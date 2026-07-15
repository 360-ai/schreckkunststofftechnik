# Testprotokoll Formular-Backend (AP4)

## Lokaler Test mit `wrangler pages dev` (2026-07-14)

Aufbau: `npm run build`, dann `npx wrangler pages dev dist --port 8788 --binding MAIL_DRY_RUN=1`.
Alle Requests per curl als `multipart/form-data` gegen `POST /api/anfrage`.

| # | Fall | Erwartung | Ergebnis |
|---|---|---|---|
| 1 | Happy Path mit gültiger PDF (Dry Run) | 200 `{ok:true,dryRun:true}` | BESTANDEN |
| 2 | Honeypot `firma_web` gefüllt | 200 Schein-Erfolg, kein Versand | BESTANDEN |
| 3 | Zeitfalle: Absenden unter 5 s | 429 `too_fast`, freundliche Meldung | BESTANDEN |
| 4 | Nicht zugelassener Dateityp (.exe) | 400 `bad_file_type` | BESTANDEN |
| 5 | Fake-PDF (falsche Magic Bytes) | 400 `bad_file_content` | BESTANDEN |
| 6 | Pflichtfeld `beschreibung` fehlt | 400 `missing_fields` | BESTANDEN |
| 7 | Ungültiges E-Mail-Format | 400 `invalid_email` | BESTANDEN |
| 8 | Fremde Origin (`https://boese-seite.example`) | 403 `origin` | BESTANDEN |

Serverseitige Validierung ist damit unabhängig vom Client nachgewiesen (Fälle 3 bis 8 umgehen die Client-Prüfung komplett).

## Noch offen (blockiert durch AP-1)

- **Tarif-Realitätstest:** 3 Dateien à ca. 3 MB im Cloudflare-Preview im tatsächlich gebuchten Tarif (Workers Free: ca. 10 ms CPU-Limit). Erst möglich, wenn das Pages-Projekt angelegt ist (Freigabe Denis). Scheitert der Test: Workers Paid buchen oder Limit senken.
- **Echter Mail-Versand** über den freigegebenen Anbieter (Kandidat Resend) inkl. Domain-Verifizierung, AVV, Tracking aus.
- **WAF-Rate-Limit** auf `/api/anfrage` (max. 5 Requests pro Minute und IP) wird im Cloudflare-Dashboard konfiguriert, nicht im Code. Nach Projekt-Anlage einrichten.
