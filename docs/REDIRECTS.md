# Redirect-Mapping Alt zu Neu (Plan 11.1)

URL-Inventur per Live-Crawl von www.schreck-kunststofftechnik.de am 2026-07-14 (WordPress/OceanWP, alle Seiten als `/?page_id=NN`). Umsetzung: `functions/index.ts` fängt die Root-Route ab und antwortet mit 301, keine Ketten. Statische `_redirects` können keine Query-Strings matchen.

| Alte URL | Alter Titel | Neues Ziel |
|---|---|---|
| `/` | Startseite "Firmenprofil" | `/` (kein Redirect nötig) |
| `/?page_id=80` | Entstehung | `/ueber-uns/` |
| `/?page_id=82` | Ausrüstung | `/ueber-uns/` (nach Maschinenpark-Freigabe: `/ueber-uns/#maschinen`) |
| `/?page_id=85` | Zertifizierung | `/ueber-uns/#zertifikat` |
| `/?page_id=89` | Termine | `/ueber-uns/` |
| `/?page_id=249` | Produkte | `/produkte/` |
| `/?page_id=101` | Labor | `/produkte/#labor` |
| `/?page_id=97` | Verpackung | `/produkte/#verpackung` |
| `/?page_id=99` | Innenanspritzung | `/produkte/#innenanspritzung` |
| `/?page_id=103` | Medizin | `/produkte/#medizin` |
| `/?page_id=105` | Mehrkomponenten Werkzeuge | `/produkte/#mehrkomponenten` |
| `/?page_id=107` | Kleinstartikelformen | `/produkte/#miniaturteile` |
| `/?page_id=489` | Stellenanzeigen | `/karriere/` |
| `/?page_id=15` | Download | `/downloads/` |
| `/?page_id=18` | Kontakt | `/kontakt/` |
| `/?page_id=20` | Impressum | `/impressum/` |
| `/?page_id=338` | Datenschutzerklärung | `/datenschutz/` |
| `/?page_id=297` | AGB | `/downloads/` |
| `/?page_id=<unbekannt>` oder `/?p=<N>` | | `/` (Fallback, 301) |

## Host-Variante

Arbeitsannahme: `https://www.schreck-kunststofftechnik.de` ist kanonisch (AP-1 Punkt 7 offen). Nach Aufschaltung:

1. Cloudflare: Root-Domain per Redirect Rule 301 auf `www` (oder umgekehrt, je nach Entscheidung).
2. `http://` auf `https://` erzwingen (Always Use HTTPS).
3. Nach Go-Live Stichprobe aller Tabellenzeilen: 301, sinnvolles Ziel, keine Ketten (QA AP10/AP11).

## Öffentlich verlinkte PDF-Pfade der Altseite

Die alten Flyer liegen unter `/wp-content/uploads/...` (Dateinamen weichen ab). Nach Go-Live 404-Bericht in der Search Console beobachten; bei relevanten Treffern gezielt in `functions/_middleware.ts` oder `_redirects` (pfadbasiert, ohne Query) nachziehen.
