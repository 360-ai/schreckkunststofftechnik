// QA-Checks nach PLAN-WEBSITE-FABLE.md Abschnitt 14.
// Läuft gegen das gebaute dist/-HTML: vorher `npm run build`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const DIST = path.resolve(import.meta.dirname, '../dist');

function collectFiles(dir, ext) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectFiles(p, ext));
    else if (entry.name.endsWith(ext)) out.push(p);
  }
  return out;
}

assert.ok(existsSync(DIST), 'dist/ fehlt. Erst `npm run build` ausführen.');
const htmlFiles = collectFiles(DIST, '.html');
assert.ok(htmlFiles.length >= 5, `Zu wenige HTML-Seiten in dist/ (${htmlFiles.length})`);

const pages = htmlFiles.map((file) => {
  const html = readFileSync(file, 'utf-8');
  return { file: path.relative(DIST, file).replaceAll('\\', '/'), html, $: cheerio.load(html) };
});

// Sichtbaren Text extrahieren: script/style/code/noscript/JSON-LD raus, Meta-Description rein.
function visibleText($) {
  const clone = cheerio.load($.html());
  clone('script, style, code, noscript, template').remove();
  const meta = clone('meta[name="description"]').attr('content') ?? '';
  const title = clone('title').text();
  return `${clone('body').text()}\n${meta}\n${title}`;
}

test('genau eine H1 pro Seite', () => {
  for (const { file, $ } of pages) {
    assert.equal($('h1').length, 1, `${file}: ${$('h1').length} H1-Elemente`);
  }
});

test('Canonical auf jeder Seite, html lang="de"', () => {
  for (const { file, $ } of pages) {
    const canonical = $('link[rel="canonical"]').attr('href');
    assert.ok(canonical?.startsWith('https://'), `${file}: Canonical fehlt`);
    assert.equal($('html').attr('lang'), 'de', `${file}: lang != de`);
  }
});

test('Meta-Description vorhanden und eindeutig', () => {
  const seen = new Map();
  for (const { file, $ } of pages) {
    if (file === '404.html') continue;
    const desc = $('meta[name="description"]').attr('content');
    assert.ok(desc && desc.length > 40, `${file}: Meta-Description fehlt oder zu kurz`);
    assert.ok(!seen.has(desc), `${file}: Description doppelt mit ${seen.get(desc)}`);
    seen.set(desc, file);
  }
});

test('JSON-LD parsebar', () => {
  for (const { file, $ } of pages) {
    $('script[type="application/ld+json"]').each((_, el) => {
      assert.doesNotThrow(() => JSON.parse($(el).text()), `${file}: JSON-LD nicht parsebar`);
    });
  }
});

test('keine toten internen Links', () => {
  for (const { file, $ } of pages) {
    $('a[href]').each((_, el) => {
      const href = $(el).attr('href');
      if (!href.startsWith('/') || href.startsWith('//')) return;
      const [clean, anchor] = href.split('#');
      const target = clean.replace(/\/$/, '');
      if (clean === '' && anchor) return; // Anker auf derselben Seite, unten geprüft
      const candidates = [
        path.join(DIST, target, 'index.html'),
        path.join(DIST, target),
        path.join(DIST, decodeURIComponent(target)),
      ];
      assert.ok(
        candidates.some((c) => existsSync(c)),
        `${file}: toter interner Link ${href}`
      );
    });
  }
});

test('interne Anker-Ziele existieren', () => {
  const idsByPage = new Map(
    pages.map(({ file, $ }) => [
      '/' + file.replace(/index\.html$/, '').replace(/\.html$/, '/'),
      new Set($('[id]').map((_, el) => $(el).attr('id')).get()),
    ])
  );
  for (const { file, $ } of pages) {
    $('a[href*="#"]').each((_, el) => {
      const href = $(el).attr('href');
      if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
      const [pagePart, anchor] = href.split('#');
      if (!anchor) return;
      const key = pagePart === '' ? '/' + file.replace(/index\.html$/, '').replace(/\.html$/, '/') : pagePart.endsWith('/') ? pagePart : pagePart + '/';
      const ids = idsByPage.get(key === '/404.html/' ? '/' : key);
      if (!ids) return;
      assert.ok(ids.has(anchor), `${file}: Anker #${anchor} fehlt auf ${key}`);
    });
  }
});

test('kein Request an fonts.googleapis / Google-Dienste', () => {
  for (const { file, html } of pages) {
    assert.ok(!html.includes('fonts.googleapis.com'), `${file}: Google-Fonts-Request`);
    assert.ok(!html.includes('fonts.gstatic.com'), `${file}: gstatic-Request`);
    assert.ok(!html.includes('googletagmanager.com'), `${file}: GTM-Request`);
    assert.ok(!/src="https?:\/\/[^"]*google/.test(html), `${file}: Google-Embed`);
  }
});

test('Bilder unter 500 KB', () => {
  const imagesDir = path.join(DIST, 'images');
  if (!existsSync(imagesDir)) return;
  for (const img of readdirSync(imagesDir)) {
    const size = statSync(path.join(imagesDir, img)).size;
    assert.ok(size < 500 * 1024, `images/${img}: ${(size / 1024).toFixed(0)} KB >= 500 KB`);
  }
});

test('img-Tags mit width/height und alt', () => {
  for (const { file, $ } of pages) {
    $('img').each((_, el) => {
      const src = $(el).attr('src');
      assert.ok($(el).attr('width') && $(el).attr('height'), `${file}: ${src} ohne width/height`);
      assert.notEqual($(el).attr('alt'), undefined, `${file}: ${src} ohne alt`);
    });
  }
});

// ---------- Anti-Slop (Plan Abschnitt 4 + 14) ----------

test('Anti-Slop: keine Gedankenstriche im sichtbaren Text', () => {
  for (const { file, $ } of pages) {
    const text = visibleText($);
    const match = text.match(/[–—]/u);
    if (match) {
      const idx = text.indexOf(match[0]);
      assert.fail(`${file}: Gedankenstrich bei "...${text.slice(Math.max(0, idx - 40), idx + 40).trim()}..."`);
    }
  }
});

test('Anti-Slop: keine Emojis', () => {
  for (const { file, $ } of pages) {
    const text = visibleText($);
    // © ® ™ sind Extended_Pictographic, aber normale Typografie, keine Emojis
    const match = text.match(/(?![©®™])\p{Extended_Pictographic}/u);
    assert.ok(!match, `${file}: Emoji "${match?.[0]}" gefunden`);
  }
});

test('Anti-Slop: keine KI-Floskeln', () => {
  const floskeln = /(in der heutigen zeit|tauchen sie ein|nahtlos|maßgeschneidert|ganzheitlich|innovation trifft|ihr zuverlässiger partner|wir sind stolz)/i;
  for (const { file, $ } of pages) {
    const match = visibleText($).match(floskeln);
    assert.ok(!match, `${file}: Floskel "${match?.[0]}"`);
  }
});

test('Anti-Slop: kein "nicht nur ... sondern auch"', () => {
  for (const { file, $ } of pages) {
    const match = visibleText($).match(/nicht nur[\s\S]{0,160}?sondern auch/i);
    assert.ok(!match, `${file}: "${match?.[0]?.slice(0, 80)}"`);
  }
});

test('Anti-Slop: keine Fragezeichen am Ende von Überschriften (außer FinalCta laut Plan)', () => {
  for (const { file, $ } of pages) {
    $('h1, h2, h3').each((_, el) => {
      const t = $(el).text().trim();
      // Plan Abschnitt 6 gibt "Projekt besprechen?" als Final-CTA-Wortlaut vor.
      if (t === 'Projekt besprechen?') return;
      assert.ok(!t.endsWith('?'), `${file}: Überschrift endet mit Fragezeichen: "${t}"`);
    });
  }
});

test('Anti-Slop-Warnung: Drei-Adjektiv-Ketten (nur Hinweis)', () => {
  const pattern = /\b(\w+ig|\w+iv|\w+ell|\w+isch|modern|schnell|präzise),\s+(\w+ig|\w+iv|\w+ell|\w+isch|modern|schnell|präzise)\s+und\s+(\w+ig|\w+iv|\w+ell|\w+isch|modern|schnell|präzise)\b/gi;
  for (const { file, $ } of pages) {
    const matches = visibleText($).match(pattern);
    if (matches) console.warn(`WARNUNG ${file}: mögliche Adjektiv-Kette: ${matches.join(' | ')}`);
  }
});

// ---------- Struktur ----------

test('robots.txt, llms.txt, sitemap vorhanden', () => {
  assert.ok(existsSync(path.join(DIST, 'robots.txt')), 'robots.txt fehlt');
  assert.ok(existsSync(path.join(DIST, 'llms.txt')), 'llms.txt fehlt');
  assert.ok(existsSync(path.join(DIST, 'sitemap-index.xml')), 'sitemap-index.xml fehlt');
});

test('danke-Seite noindex und nicht in Sitemap', () => {
  const danke = pages.find((p) => p.file === 'danke/index.html');
  if (!danke) return; // Seite optional
  assert.match(danke.$('meta[name="robots"]').attr('content') ?? '', /noindex/);
  const sitemap = readFileSync(path.join(DIST, 'sitemap-0.xml'), 'utf-8');
  assert.ok(!sitemap.includes('/danke/'), 'danke/ steht in der Sitemap');
});
