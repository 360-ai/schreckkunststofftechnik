/// <reference types="@cloudflare/workers-types" />
// Cloudflare Pages Function: nimmt die Projektanfrage entgegen und versendet sie per Mail.
// Plan Abschnitt 7. Anbieter-Kandidat Resend (AP-1-Entscheidung offen), deshalb strikt
// hinter MAIL_DRY_RUN testbar. Kein Logging von Personendaten oder Dateiinhalten.

interface Env {
  RESEND_API_KEY?: string;
  MAIL_DRY_RUN?: string;
  MAIL_TO?: string;
  MAIL_FROM?: string;
}

const MAX_CONTENT_LENGTH = 15 * 1024 * 1024; // frueh ablehnen, vor dem Parsen
const MAX_TOTAL_FILES = 10 * 1024 * 1024; // echtes Limit nach dem Parsen
const MAX_FILES = 5;
const MIN_SECONDS = 5; // Zeitfalle (weiches Signal)

const ALLOWED_EXT = ['pdf', 'step', 'stp', 'igs', 'iges', 'dxf', 'dwg', 'png', 'jpg', 'jpeg', 'zip'];

// Magic Bytes nur fuer Formate mit verlaesslicher Signatur (CAD: Endung + Groesse reicht)
const MAGIC: Record<string, number[][]> = {
  pdf: [[0x25, 0x50, 0x44, 0x46]],
  png: [[0x89, 0x50, 0x4e, 0x47]],
  jpg: [[0xff, 0xd8, 0xff]],
  jpeg: [[0xff, 0xd8, 0xff]],
  zip: [
    [0x50, 0x4b, 0x03, 0x04],
    [0x50, 0x4b, 0x05, 0x06],
    [0x50, 0x4b, 0x07, 0x08],
  ],
};

const ALLOWED_ORIGINS = [
  'https://www.schreck-kunststofftechnik.de',
  'https://schreck-kunststofftechnik.de',
];

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

const fail = (status: number, code: string, message: string) => json(status, { ok: false, code, message });

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function sanitizeFilename(name: string): string {
  const cleaned = name.replace(/[^a-zA-Z0-9._-]/g, '_');
  return cleaned.length > 80 ? cleaned.slice(-80) : cleaned || 'datei';
}

function matchesMagic(bytes: Uint8Array, ext: string): boolean {
  const signatures = MAGIC[ext];
  if (!signatures) return true; // CAD-Formate: keine verlaessliche Signatur
  return signatures.some((sig) => sig.every((b, i) => bytes[i] === b));
}

function toBase64(bytes: Uint8Array): string {
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // Origin-Pruefung: Browser-Submits kommen von der eigenen Domain.
  // Preview-Deployments (*.pages.dev) sind fuer Tests zugelassen.
  const origin = request.headers.get('origin') ?? '';
  const originOk =
    ALLOWED_ORIGINS.includes(origin) ||
    /^https:\/\/[a-z0-9-]+\.schreck-fable\.pages\.dev$/.test(origin) ||
    origin === 'https://schreck-fable.pages.dev' ||
    origin.startsWith('http://localhost') ||
    origin.startsWith('http://127.0.0.1');
  if (!originOk) return fail(403, 'origin', 'Anfrage von unerlaubter Herkunft.');

  const contentLength = Number(request.headers.get('content-length') ?? '0');
  if (contentLength > MAX_CONTENT_LENGTH) {
    return fail(413, 'too_large', 'Die Anfrage ist zu groß. Bitte insgesamt höchstens 10 MB anhängen.');
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(400, 'bad_request', 'Die Anfrage konnte nicht gelesen werden.');
  }

  const text = (key: string, max = 5000) => String(form.get(key) ?? '').trim().slice(0, max);

  // Honeypot: hartes Kriterium. Bot bekommt einen scheinbaren Erfolg, es wird nichts versendet.
  if (text('firma_web')) return json(200, { ok: true });

  // Zeitfalle: weiches Signal, freundlich ablehnen mit Wiederholungsmoeglichkeit.
  const ts = Number(text('ts'));
  if (Number.isFinite(ts) && ts > 0 && Date.now() - ts < MIN_SECONDS * 1000) {
    return fail(429, 'too_fast', 'Das ging sehr schnell. Bitte prüfen Sie Ihre Angaben und senden Sie erneut.');
  }

  const anliegen = text('anliegen', 60);
  const beschreibung = text('beschreibung');
  const branche = text('branche', 40);
  const firma = text('firma', 200);
  const name = text('name', 200);
  const email = text('email', 320);
  const telefon = text('telefon', 60);
  const nachricht = text('nachricht');

  if (!anliegen || !beschreibung || !name) {
    return fail(400, 'missing_fields', 'Bitte füllen Sie Anliegen, Projektbeschreibung und Name aus.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return fail(400, 'invalid_email', 'Bitte geben Sie eine gültige E-Mail-Adresse an.');
  }

  // Dateien validieren
  const files = form.getAll('dateien').filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > MAX_FILES) {
    return fail(400, 'too_many_files', `Höchstens ${MAX_FILES} Dateien.`);
  }
  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  if (totalSize > MAX_TOTAL_FILES) {
    return fail(413, 'files_too_large', 'Die Dateien sind zusammen größer als 10 MB.');
  }

  const attachments: { filename: string; content: string }[] = [];
  for (const file of files) {
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
    if (!ALLOWED_EXT.includes(ext)) {
      return fail(400, 'bad_file_type', `Der Dateityp .${ext} ist nicht zulässig.`);
    }
    const bytes = new Uint8Array(await file.arrayBuffer());
    if (!matchesMagic(bytes, ext)) {
      return fail(400, 'bad_file_content', `Die Datei "${sanitizeFilename(file.name)}" entspricht nicht ihrem Dateityp.`);
    }
    // ZIP-Archive werden niemals entpackt, nur durchgereicht.
    attachments.push({ filename: sanitizeFilename(file.name), content: toBase64(bytes) });
  }

  // Mail bauen (alle Nutzereingaben escaped)
  const row = (label: string, value: string) =>
    value ? `<tr><td style="padding:4px 12px 4px 0;color:#364C59;white-space:nowrap;vertical-align:top;"><strong>${label}</strong></td><td style="padding:4px 0;">${escapeHtml(value).replaceAll('\n', '<br>')}</td></tr>` : '';

  const html = `<!doctype html><html lang="de"><body style="font-family:Arial,sans-serif;color:#101A26;font-size:15px;">
<h2 style="color:#1B6478;">Projektanfrage über die Website</h2>
<table>${[
    row('Anliegen', anliegen),
    row('Branche', branche),
    row('Firma', firma),
    row('Name', name),
    row('E-Mail', email),
    row('Telefon', telefon),
  ].join('')}</table>
<h3 style="color:#1B6478;">Projektbeschreibung</h3>
<p>${escapeHtml(beschreibung).replaceAll('\n', '<br>')}</p>
${nachricht ? `<h3 style="color:#1B6478;">Ergänzende Nachricht</h3><p>${escapeHtml(nachricht).replaceAll('\n', '<br>')}</p>` : ''}
${attachments.length ? `<p style="color:#364C59;">Anhänge: ${attachments.map((a) => escapeHtml(a.filename)).join(', ')}</p>` : ''}
</body></html>`;

  const subject = `Projektanfrage: ${anliegen} von ${firma || name}`;
  const payload = {
    from: env.MAIL_FROM ?? 'SKT Website <anfrage@schreck-kunststofftechnik.de>',
    to: [env.MAIL_TO ?? 'info@schreck-kunststofftechnik.com'],
    reply_to: email,
    subject,
    html,
    attachments,
  };

  // Dry-Run: loggt nur Metadaten (keine Personendaten, keine Inhalte)
  if (env.MAIL_DRY_RUN === '1') {
    console.log(`[DRY RUN] Anfrage ok. Anhaenge: ${attachments.length}, Gesamtgroesse: ${totalSize} Bytes`);
    return json(200, { ok: true, dryRun: true });
  }

  if (!env.RESEND_API_KEY) {
    return fail(503, 'mail_unconfigured', 'Der Mail-Versand ist noch nicht eingerichtet.');
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25_000);
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) {
      console.log(`Mailversand fehlgeschlagen: HTTP ${res.status}`);
      return fail(502, 'mail_failed', 'Der Versand ist fehlgeschlagen. Bitte nutzen Sie Telefon oder E-Mail.');
    }
  } catch {
    console.log('Mailversand: Timeout oder Netzwerkfehler');
    return fail(504, 'mail_timeout', 'Der Versand hat zu lange gedauert. Bitte nutzen Sie Telefon oder E-Mail.');
  }

  return json(200, { ok: true });
};
