# Geparkte Unterseiten — Wiederherstellung

Stand: 2026-07-14. Auf Wunsch von Denis wurde die Navigation verschlankt. Die hier
geparkten Seiten sind **nicht gelöscht** und werden von Astro nicht gebaut (Ordner
liegt außerhalb von `src/pages/`). Inhaltlich ging nichts verloren:

- **Kompetenzen** → ersatzlos entfernt (Inhalt steht auf der Startseite, Abschnitt „Prozess").
- **Qualität/Zertifizierung** → Inhalt lebt jetzt auf `ueber-uns.astro` unter `#zertifikat`.
- **Maschinen & Ausstattung** → Inhalt lebt jetzt auf `ueber-uns.astro` unter `#maschinen`.
- **Produkte-Detailseiten** (`produkte/[slug].astro`, 6 Stück) → zusammengezogen in die
  neue kompakte `src/pages/produkte/index.astro` (Anker `#<slug>` je Gruppe).

Neue Navigation (`src/data/site.ts` → `navItems`):
`Produkte · Downloads · Über uns · Karriere · Kontakt`

---

## Alles wieder herstellen (voller Rückbau)

1. Seiten zurückschieben:
   ```bash
   git mv _geparkt/kompetenzen.astro                 src/pages/kompetenzen.astro
   git mv _geparkt/qualitaet-zertifizierung.astro    src/pages/qualitaet-zertifizierung.astro
   git mv _geparkt/maschinen-ausstattung.astro       src/pages/maschinen-ausstattung.astro
   git mv "_geparkt/produkte/[slug].astro"           "src/pages/produkte/[slug].astro"
   # Original-Produktübersicht zurück (überschreibt die kompakte Version):
   git mv _geparkt/produkte/index.astro              src/pages/produkte/index.astro
   ```

2. `src/data/site.ts` → `navItems` wieder auf die alten 6 Punkte:
   ```
   Produkte /produkte/ · Kompetenzen /kompetenzen/ · Qualität /qualitaet-zertifizierung/
   · Über uns /ueber-uns/ · Karriere /karriere/ · Kontakt /kontakt/
   ```
   (Downloads + Maschinen liefen vorher als Extra-Links in Header/Footer, nicht in navItems.)

3. `src/components/Header.astro` — nach dem `navItems.map` in der **mobile-nav** wieder
   ergänzen:
   ```astro
   <a href="/maschinen-ausstattung/" ...>Maschinen &amp; Ausstattung</a>
   <a href="/downloads/" ...>Downloads</a>
   ```

4. `src/components/Footer.astro` — nach dem `navItems.map` wieder ergänzen:
   ```astro
   <a href="/maschinen-ausstattung/">Maschinen &amp; Ausstattung</a>
   <a href="/downloads/">Downloads</a>
   ```

5. `src/components/ProductCard.astro` — Link zurück auf Detailseiten:
   `href={`/produkte/${product.slug}/`}` (statt `/produkte/#${product.slug}`).

6. `src/pages/kontakt.astro` — Buttons zurück:
   `/ueber-uns/#zertifikat` → `/qualitaet-zertifizierung/`,
   `/ueber-uns/#maschinen` → `/maschinen-ausstattung/`,
   `/produkte/` (Produktbereiche ansehen) → `/kompetenzen/` (Projektablauf ansehen).

7. `src/pages/ueber-uns.astro` — die zwei Blöcke `#maschinen` und `#zertifikat` wieder
   entfernen, die drei internen Links (`#maschinen`/`#zertifikat`) auf
   `/maschinen-ausstattung/` bzw. `/qualitaet-zertifizierung/` zurücksetzen.
   (Die Daten `machinePark`, `machineLimits`, `certificate` in `site.ts` können bleiben.)

8. `src/pages/sitemap.xml.ts` — `kompetenzen/`, `qualitaet-zertifizierung/`,
   `maschinen-ausstattung/` wieder in `staticPages`; `productEntries` (per-slug) wieder
   ergänzen und `import { products }` wieder aufnehmen.

9. `src/pages/llms.txt.ts` — Produktzeilen zurück auf `/produkte/<slug>/`, „Wichtige
   Seiten" um Kompetenzen/Qualität/Maschinen ergänzen.

10. `public/_worker.js` + `tests/seo-audit.test.mjs` — Legacy-Redirects der IDs
    82, 85, 97, 99, 101, 103, 105, 107, 380 zurück auf die alten Pfade
    (`/maschinen-ausstattung/`, `/qualitaet-zertifizierung/`, `/produkte/<slug>/`).
    Test-Assertion für llms.txt zurück auf `/produkte/medizintechnik/`.

Danach `npm run build && npm run check:links && node --test tests/` grün prüfen.

## Nur einzelne Seite zurückholen
Schritt 1 für die gewünschte Datei + zugehörige Nav-/Link-Zeile aus Schritt 2–10.
Bei Produkte-Detailseiten muss auch die kompakte `produkte/index.astro` weichen bzw.
angepasst werden (beide Varianten gleichzeitig gehen nicht auf derselben Route).
