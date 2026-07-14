# Umsetzungs- und QA-Bericht (Stand 2026-07-14)

Umsetzung durch Claude nach `PLAN-WEBSITE-FABLE.md`. Alle Arbeitspakete AP0 bis AP9 sind gebaut und lokal committet (Konvention `AP<N>: ...`), Push erst nach Repo-Freigabe.

## Status je Arbeitspaket

| AP | Inhalt | Status |
|---|---|---|
| AP-1 | Freigaben durch Denis | OFFEN, siehe FREIGABEN.md |
| AP0 | Astro 5, Tailwind 4, Fonts self-hosted (WOFF2 + OFL), Design-Tokens, Kontrastmatrix, Bilder als WebP, PDFs, Test-Skript | FERTIG |
| AP1 | BaseLayout (SEO-Head, JSON-LD LocalBusiness + BreadcrumbList), Header mit Burger, Footer, StickyMobileBar, 404 | FERTIG |
| AP2 | site.ts als einzige Inhaltsquelle, draft-Logik, OFFENE-FRAGEN.md | FERTIG |
| AP2a | Wireframe-Gate: als gebaute Seite umgesetzt, Screenshots 390/1280 in docs/screenshots/ | WARTET AUF DENIS |
| AP3 | Hero + 3-Schritt-Formular, Client-Validierung, Upload mit Limits, A11y (aria-invalid, Fokus-Führung, aria-live) | FERTIG |
| AP4 | Pages Function mit serverseitiger Validierung, Magic Bytes, Honeypot, Zeitfalle, Dry-Run; 8/8 Fehlerpfad-Tests bestanden (TESTPROTOKOLL.md) | FERTIG (Livebetrieb wartet auf Mail-Anbieter + Tarif-Test) |
| AP5 | Startseite komplett; Screenshot-Abnahme | WARTET AUF DENIS |
| AP6 | /produkte/ mit 6 Anker-Sektionen | FERTIG |
| AP7 | ueber-uns, karriere, downloads (mit Dateigrößen), kontakt (Maps nur Link-out), danke | FERTIG |
| AP8 | Rechtsseiten aus Projekt 1, DSE-Anpassungen dokumentiert (TEXTABNAHME.md), Interessenabwägung | FERTIG (Freigabe der Änderungen offen) |
| AP9 | Titles/Descriptions, Canonicals, OG/Twitter, JSON-LD, sitemap (ohne /danke/), robots.txt, llms.txt, OG-Image, Redirect-Function + REDIRECTS.md (Live-Crawl der Altseite, 18 URLs) | FERTIG |
| AP10 | QA lokal | TEILWEISE, Rest braucht Preview-Deployment |
| AP11 | Go-Live-Begleitung | STEHT AUS |

## QA-Ergebnisse (lokal)

- **`npm run build`:** grün, 10 Seiten.
- **`npm test`:** 17/17 grün. Checks: genau eine H1, Canonicals, eindeutige Descriptions, JSON-LD parsebar, keine toten Links, Anker-Ziele existieren, keine Google-Requests, Bilder < 500 KB, width/height/alt gesetzt, Anti-Slop (Gedankenstriche, Emojis, Floskeln, nicht-nur-sondern-auch, Fragezeichen-Überschriften), robots/llms/sitemap, danke noindex.
- **Formular-Backend:** 8/8 curl-Tests gegen `wrangler pages dev` bestanden (Happy Path Dry-Run, Honeypot, Zeitfalle, .exe, Fake-PDF, Pflichtfelder, E-Mail-Format, fremde Origin).
- **Formular-UI im Browser:** Schritt 1 bis 3 durchgeklickt, Validierungsfehler erscheinen als Text mit Icon, Fortschrittsbalken und Schrittzähler aktualisieren.
- **Mobile:** 390 px und 320 px ohne horizontalen Overflow (programmatisch geprüft: scrollWidth == clientWidth), Burger-Menü öffnet/schließt mit aria-expanded, Sticky Mobile Bar mit drei Aktionen, Telefon-Button bleibt im Header.
- **Gefixt während QA:** weiße Formular-Überschrift auf weißer Karte (globale dark-section-Regel griff in die Karte; Reset-Regel ergänzt).
- **Bildgewichte:** Hero 87 KB (Desktop) / 27 KB (mobil), größtes Bild 318 KB (Luftbild, Platzhalter).

## Noch offen (kann erst nach Freigaben laufen)

1. **Lighthouse Mobile/Desktop + axe:** braucht ein echtes Preview-Deployment (Pages-Projekt existiert absichtlich noch nicht). Lokal spricht nichts gegen LCP < 2 s: statisches HTML, Hero < 100 KB mobil, Fonts 70 KB gesamt, kein Render-Blocking über Astro-Standard hinaus.
2. **Upload-Tarif-Test** 5 x 2 MB im gebuchten Cloudflare-Tarif (AP-1 Punkt 2).
3. **Echter Mail-Versand** nach Anbieter-Entscheidung inkl. Domain-Verifizierung (AP-1 Punkt 1).
4. **Redirect-Stichprobe live** nach Aufschaltung (Mapping steht, Function getestet nur lokal implizit).
5. **Echtgerät-Test** (iPhone/Android: virtuelle Tastatur, Datei-Picker) laut Plan AP3; im DevTools-Äquivalent geprüft.
6. **Gegenprüfung durch Codex** (Plan Abschnitt 15) nach Denis-Freigabe der Gates.

## Screenshots (docs/screenshots/)

start-1280, start-390, produkte-1280, produkte-390, ueber-uns-1280, kontakt-390. Erzeugt mit `node scripts/screenshots.mjs` gegen `npm run preview`.
