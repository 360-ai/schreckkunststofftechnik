# Redaktion und Cloudflare

Diese Website ist als statische Astro-Seite für Cloudflare Pages aufgebaut.

## Lokal starten

```bash
npm install
npm run dev
```

Wenn der Dev-Server in einer eingeschränkten Umgebung Probleme macht, kann das gebaute Ergebnis geprüft werden:

```bash
npm run build
npm run preview
```

## Deploy auf Cloudflare Pages

Das Projekt baut in den Ordner:

```txt
dist/
```

Für Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: aktuelle LTS-Version

Alternativ per Wrangler:

```bash
npm run deploy
```

## Inhalte ändern

- Produktdaten: `src/data/site.ts`
- Stellenanzeigen: `src/content/jobs/`
- Seiten: `src/pages/`
- Layout und Komponenten: `src/components/`, `src/layouts/`
- Designsystem: `src/styles/global.css`

## SEO/GEO

Die Website erzeugt:

- `sitemap.xml`
- `robots.txt`
- Canonical URLs
- OpenGraph-Daten
- strukturierte Daten für Organisation, Services, FAQ und JobPosting
- Redirects für alte WordPress-URLs in `public/_redirects`
