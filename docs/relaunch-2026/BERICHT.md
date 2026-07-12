# Abschlussbericht Website-Relaunch Schreck Kunststofftechnik

Stand: 13.07.2026
Projektstand: AP0 bis AP10 abgeschlossen, Quellcode auf `master` gepusht, kein Live-Deployment ausgeführt

## 1. Management-Zusammenfassung

Die neue Astro-Website ist die richtige Basis für den Relaunch. Ein technischer Neuaufbau wäre nicht wirtschaftlich gewesen: Das Projekt besaß bereits eine klare Komponentenstruktur, statische Ausgabe, eine genehmigte visuelle Richtung und eine grundsätzlich gute Seitenarchitektur. Die entscheidenden Schwächen lagen nicht im Framework, sondern in der Belegbarkeit von Aussagen, der fachlichen Tiefe, einzelnen SEO-/GEO-Lücken, sehr großen Medien, fehlenden Nachweisseiten und mehreren Barrierefreiheits- und Markupdetails. Diese Punkte wurden innerhalb der vorhandenen Astro-Basis systematisch behoben.

Das Ergebnis ist eine schlanke B2B-Website mit 19 erzeugten HTML-Seiten: 16 indexierbare Seiten sowie Downloads, Datenschutz und 404 mit `noindex`. Die Positionierung lautet nicht „größter“, „modernster“ oder „führender“ Formenbauer, sondern nachvollziehbar: spezialisierter Werkzeug- und Formenbau in Burgwald-Bottendorf, mehr als 40 Jahre Erfahrung, mehr als 1.000 Formen bis zur Serienreife, eigene Abmusterung und ein nach DIN EN ISO 9001:2015 zertifizierter Geltungsbereich „Formenbau von der Konstruktion bis zur Serienreife“.

Die wichtigste redaktionelle Leistung war die Trennung belegbarer Fakten von nicht bestätigten Marketingaussagen. Entfernt oder entschärft wurden unter anderem Luftfahrt, eine konkrete Werkstoffpalette, pauschale Projektlaufzeiten, vollständige Qualitätsdokumentation, internationale bzw. deutschlandweite Betreuung, vorbeugende Wartung und nicht bestätigte Karrierevorteile. Die sechs Produktseiten wurden von rund 183–193 auf 356–375 Wörter erweitert und enthalten nun belegte Anwendungen, Formanforderungen, Projektgrenzen, Anfragehilfen und sichtbare FAQ.

Zwei neue Nachweisseiten wurden ergänzt: `/qualitaet-zertifizierung/` und `/maschinen-ausstattung/`. Das gültige ISO-Zertifikat ist lokal abrufbar. Die Maschinenliste wird transparent mit Stand 01/2024 ausgewiesen; ihre Aktualität bleibt vom Unternehmen zu bestätigen. Alte WordPress-URLs werden inklusive Query-String-Fällen per Cloudflare Worker auf die neue Struktur geleitet.

Technisch wurden die fünf größten Bilder von zusammen 22,65 MB auf 1,01 MB reduziert. Ein eigenes OG-Motiv mit 1200 × 630 Pixeln wurde erstellt. Oswald wird lokal mit Lizenzdatei ausgeliefert. Titel, Beschreibungen, Canonicals, Hreflang, Sitemap, Breadcrumbs, `llms.txt`, Robot-Regeln und 95 JSON-LD-Blöcke sind konsistent. Die Organisationseinträge stimmen mit Impressum und `llms.txt` überein.

Die Abschlussprüfung ist grün: Astro meldet 0 Fehler, 0 Warnungen und 0 Hinweise; 644 interne Links sind auflösbar; 214 Überschriften besitzen eine valide Hierarchie; alle 19 Seiten haben genau eine H1; vier repräsentative Seiten sind im offiziellen W3C Nu-Validator meldungsfrei; 19/19 Seiten zeigen bei 390 Pixel Breite weder horizontalen Überlauf noch sichtbare Touch-Ziele unter 44 × 44 Pixel; die Browserkonsole blieb ohne Fehler oder Warnungen.

Vor einer Live-Aufschaltung bestehen drei wesentliche externe Aufgaben:

1. Der Auftraggeber muss den Font-Abschnitt der Datenschutzerklärung auf die lokale Oswald-Datei anpassen und den Rechtstext erneut freigeben.
2. Schreck muss aktualitätskritische Unternehmensangaben, insbesondere den Maschinenpark 01/2024, bestätigen.
3. AI IT muss Domain, Cloudflare-Konfiguration und Redirects auf Staging bzw. Produktion aufschalten und dort nochmals technisch prüfen.

GA4, Consent-Manager, Web3Forms, Search Console, Google-Unternehmensprofil und die Domain-Aufschaltung wurden bewusst nicht aktiviert. Es erfolgte kein Deployment.

## 2. Ist-Analyse

### 2.1 Ausgangslage

Die alte WordPress-Seite war eine wertvolle Faktenquelle, aber keine geeignete Relaunch-Basis. Die neue Astro-Seite war technisch moderner, enthielt jedoch vor der Überarbeitung mehrere Risiken:

- fünf Bilder zwischen 2,1 und 7,2 MB;
- das 7,2-MB-Hero diente zugleich als Standard-OG-Bild;
- 53 Bildvorkommen ohne intrinsische Breite und Höhe;
- mehrere nicht belegte Leistungs-, Branchen- und Karriereaussagen;
- sechs sehr kurze und stark ähnliche Produktdetailseiten;
- keine eigene Qualitäts-/Zertifizierungs- oder Ausstattungsseite;
- `/downloads/` trotz `noindex` in der Sitemap;
- fehlende sichtbare Breadcrumbs und unvollständige strukturierte Breadcrumbs;
- fehlende Legacy-Redirects für mehrere WordPress-IDs;
- generische bzw. überlange Seitentitel;
- deaktivierte native Formularvalidierung;
- fehlender Skip-Link, zu kleine Mobile-Ziele und unvollständige Menü-Fokussteuerung;
- Security-Header ohne CSP, HSTS und Permissions-Policy.

Die vollständige Ausgangsanalyse mit URL-Matrix, Faktenextrakt und Redirect-Map steht in [`01-bestandsaufnahme.md`](./01-bestandsaufnahme.md).

### 2.2 Belastbare Ausgangsfakten

Die verbindliche Aussagenbasis umfasst 62 bestätigte Fakten bzw. klar abgegrenzte Quellenaussagen. Die wichtigsten sind:

- Gründung am 01.01.1984;
- 14 Mitarbeiter;
- mehr als 1.000 Formen bis zur Serienreife;
- mehr als 30 ausgebildete Lehrlinge;
- Formen für Kunststoffverarbeitung sowie Aluminium- und Zink-Druckguss;
- Konzeptionierung, Konstruktion, Entwicklung, Abmusterung, Vermessung, Optimierung und Dokumentation;
- eigene Spritzgießmaschinen zur Abmusterung;
- Reparaturen und Schulung von Fachpersonal, bei Bedarf vor Ort;
- ISO 9001:2015, Zertifikat 000854.Q/24.R, gültig bis 27.06.2027;
- belegte Anwendungen in Medizin, Labor, Verpackung, Innenanspritzung, Mehrkomponentenwerkzeugen und Kleinstteilen;
- Ausbildung zum Werkzeugmechaniker mit Start August 2027 und drei Jahren Dauer.

Die Quellen, zulässigen Ableitungen und ausgeschlossenen Aussagen stehen in [`02-faktenbasis-positionierung.md`](./02-faktenbasis-positionierung.md).

### 2.3 Bewertung Optimierung versus Neuaufbau

| Kriterium | Bewertung |
|---|---|
| Framework und Build | Astro mit statischer Ausgabe ist für die Website passend. |
| Komponenten | Header, Footer, Layout, Hero, Produkt- und Jobkomponenten waren wiederverwendbar. |
| Design | Navy/Cyan-System war genehmigt und wurde beibehalten. |
| Informationsarchitektur | Grundstruktur war tragfähig; nur zwei neue Nachweisseiten waren nötig. |
| Hauptproblem | Inhalte, Nachweise, Performance, SEO/GEO und Accessibility – nicht die Plattform. |
| Entscheidung | Bestehende Astro-Seite optimieren; kein Neuaufbau. |

## 3. Wettbewerbsvergleich

Verglichen wurden sechs funktional relevante mittelständische Anbieter: WISA, Fenkl, Midena, Precupa, RMF und HWF. Konzerne wurden ausgeschlossen. Die Bewertungen beziehen sich auf die Websites, nicht auf die technische Leistungsfähigkeit der Unternehmen.

| Anbieter | Website-Stärke | Erkennbare Schwäche | Konsequenz für Schreck |
|---|---|---|---|
| WISA | Sehr tiefe Leistungsseiten, konkrete Systeme, Datenformate und Zertifikate | Konventionelles Design, teils schwer zu scannen | Technische Tiefe nur mit bestätigten Fakten übernehmen; Inhalte klarer verteilen |
| Fenkl | Historie, Investitionen, Ansprechpartner | Veraltete Hierarchie, im Test 19 H1, schwache Projektführung | Saubere Semantik und konkrete CTA schaffen bereits Differenzierung |
| Midena | Werkzeugbau plus Teilefertigung, konkrete Ansprechpartnerin | Startseite ohne H1, mehrere allgemeine Claims | Persönlichkeit und Daten nutzen, unbelegte Vorteilsclaims vermeiden |
| Precupa | Starke Fachbegriffe, Anwendungen, FAQ und moderne Hero-Hierarchie | Sehr hohe Inhaltsdichte | Belegte Produktbeispiele und Direktantworten nutzen, Inhalte auf Zielseiten verteilen |
| RMF | Zertifikate, Kapazitäten, Datenformate, Maschinen und Messmittel | Klassische, textlastige Darstellung; Browserdarstellung instabil | Nachweisseiten mit schlanker, stabiler Nutzerführung verbinden |
| HWF | Moderne Navigation, klare Leistungspfeiler, Ansprechpartner, FAQ | Teilweise aggressive Keyword-/Claim-Dichte | Eigenständiges Design beibehalten, klare Einstiege ohne Keyword-Überladung |

Die Differenzierung von Schreck beruht daher auf fünf Punkten:

1. Nachweis statt Superlativ: exakte ISO-Daten, Geltungsbereich, Gültigkeit und Kennzahlen.
2. Konkrete, belegte Anwendungen in Medizin, Labor, Verpackung, 2K und Kleinstteilen.
3. Eigene Abmusterung als nachvollziehbare Brücke von Werkzeugbau zu Serienreife.
4. Spezialisierter 14-Personen-Betrieb mit direkter technischer Abstimmung, ohne unbelegte Ansprechpartnergarantie.
5. Getrennte Informationspfade für Einkauf und Konstruktion auf der Kontaktseite.

Die vollständige Matrix und Einzelanalysen stehen in [`03-wettbewerb.md`](./03-wettbewerb.md).

## 4. Positionierung

### 4.1 Kernpositionierung

Schreck Kunststofftechnik ist ein spezialisierter Werkzeug- und Formenbauer in Burgwald-Bottendorf. Der belegbare Schwerpunkt liegt auf Formen von der Konstruktion bis zur Abmusterung und Serienreife. Eigene Spritzgießmaschinen verbinden Werkzeugbau, Musterung, Vermessung und Optimierung. Die Positionierung wird durch mehr als 40 Jahre Erfahrung, mehr als 1.000 serienreif gebaute Formen und das ISO-9001-Zertifikat gestützt.

### 4.2 Primäre Zielgruppen

| Zielgruppe | Benötigte Antwort | Relevante Seiten |
|---|---|---|
| Einkauf | Leistungsfit, Zertifikat, Geltungsbereich, technische Grenzen, Kontakt | Start, Qualität, Ausstattung, Kontakt |
| Konstruktion/Entwicklung | Bauteil, Werkzeugkonzept, Abmusterung, Messung, Optimierung | Produkte, Kompetenzen, Ausstattung |
| Projekt-/Produktverantwortliche | Weg von Zeichnung/Muster bis Serienreife | Start, Kompetenzen, Kontakt |
| Bewerber/Auszubildende | Aktuelle Stelle, Dauer, Inhalte, Bewerbungsweg | Karriere, Jobdetail |

### 4.3 Projektanlass und CTA

Die Website fordert nicht allgemein zum „Kontakt“ auf, sondern nutzt handlungsnahe Formulierungen: „Projekt besprechen“, „Zeichnung oder Muster übermitteln“, „Werkzeugkonzept prüfen lassen“ und „Reparatur anfragen“. Feste Lieferzeiten, Kosten- oder Qualitätsgarantien werden nicht versprochen.

## 5. Sitemap und Informationsarchitektur

### 5.1 Indexierbare Seiten

```text
/
├── /produkte/
│   ├── /produkte/medizintechnik/
│   ├── /produkte/labortechnik/
│   ├── /produkte/verpackung-kosmetik/
│   ├── /produkte/innenanspritzung/
│   ├── /produkte/mehrkomponentenwerkzeuge/
│   └── /produkte/kleinstteile/
├── /kompetenzen/
├── /qualitaet-zertifizierung/
├── /maschinen-ausstattung/
├── /ueber-uns/
├── /karriere/
│   └── /karriere/ausbildung-werkzeugmechaniker-2027/
├── /kontakt/
└── /impressum/
```

### 5.2 Nicht indexierbare Seiten

- `/downloads/` – `noindex, follow`
- `/datenschutz/` – `noindex, follow`
- `/404.html` – `noindex, follow`

Die XML-Sitemap enthält alle indexierbaren Seiten und keine `noindex`-Seite. Maschinen & Ausstattung bleibt außerhalb der kompakten Desktop-Hauptnavigation, ist aber über Qualität, Kompetenzen, Mobile Navigation und Footer erreichbar.

Nicht angelegt wurden doppelte Branchen-Landingpages, Blog, zentrale FAQ, Referenzen, Materialseite oder eigene Reparaturseite. Dafür fehlen entweder eigenständige Suchintention, freigegebene Inhalte oder belegte Details.

### 5.3 Englische Version

Empfehlung: derzeit nicht bauen. Zielmärkte, englischsprachige Anfragen und ein redaktioneller Pflegeprozess sind nicht bestätigt. Eine englische Version ist sinnvoll, wenn mindestens einer dieser Auslöser eintritt:

- ein belegbarer Anteil qualifizierter internationaler Anfragen;
- aktive Vertriebsziele in klar definierten Ländern;
- intern verfügbare englische Fach- und Vertriebsbetreuung;
- Freigabe einer professionellen Fachübersetzung.

Dann sollten zunächst Start, Produkte, Kompetenzen, Qualität, Ausstattung, Unternehmen und Kontakt unter `/en/` umgesetzt werden – mit gegenseitigem Hreflang, eigenen Canonicals und keiner ungeprüften Maschinenübersetzung.

Die Architekturentscheidung steht ausführlich in [`05-sitemap.md`](./05-sitemap.md).

## 6. Umgesetzte Texte

### 6.1 Zentrale Daten- und Textquelle

`src/data/site.ts` bündelt Firmenstammdaten, Navigation, Kennzahlen, sechs Produktbereiche, belegte Anwendungen, Formanforderungen und FAQ. Dadurch bleiben sichtbare Texte und strukturierte Daten konsistent.

### 6.2 Seitenüberarbeitung

| Bereich | Kernergebnis | Commit |
|---|---|---|
| Sechs Produktseiten | 356–375 Wörter, belegte Anwendungen/Anforderungen, FAQ, Anfragehilfe | `75987a0` |
| Startseite | klare H1 „Formenbau bis zur Serienreife“, belegte Kennzahlen, Prozess und FAQ | `4aa72cc` |
| Kompetenzen | acht belegte Projektphasen, Reparatur/Schulung, Nachweislinks | `4aa72cc` |
| Qualität | Norm, Geltungsbereich, Nummer, Gültigkeit, Messmittel, Zertifikatsdownload | `45c41b8`, `4aa72cc` |
| Ausstattung | Maschinenliste 01/2024, Fertigungsbereiche, Spritzgießen, CAD/CAM, Grenzen | `45c41b8`, `4aa72cc` |
| Über uns | Historie, Kennzahlen, Standort, Zertifizierung und Ausbildung | `4aa72cc` |
| Karriere/Job | nur aktive Ausbildung 2027, drei Jahre, belegte Aufgaben/Voraussetzungen | `4aa72cc` |
| Kontakt | getrennte Hinweise für Einkauf und Konstruktion, zugängliches Mailto-Formular | `4aa72cc`, `1b0c3f8` |
| Downloads | direkter ISO-Download, Flyer und AGB auf Anfrage | `4aa72cc` |

Nicht bestätigte Aussagen wurden nicht durch weichere Synonyme versteckt, sondern entfernt oder ausdrücklich als projektspezifische Prüfung formuliert.

## 7. SEO- und GEO-Konzept

### 7.1 Keyword- und Intentionsmodell

Jeder Cluster besitzt genau eine primäre Zielseite. Damit werden Kannibalisierung und dünne Zusatzseiten vermieden.

| Suchintention | Zielseite |
|---|---|
| Formenbau/Werkzeugbau und regionale Suche Hessen/Burgwald | `/` |
| Gesamtportfolio Spritzgusswerkzeuge | `/produkte/` |
| Medizin, Labor, Verpackung, Innenanspritzung, 2K, Kleinstteile | jeweilige Produktdetailseite |
| Konstruktion bis Serienreife, Abmusterung, Reparatur, Schulung | `/kompetenzen/` |
| ISO 9001 und Qualitätsnachweis | `/qualitaet-zertifizierung/` |
| Maschinen, Verfahren und technische Grenzen | `/maschinen-ausstattung/` |
| Projektanfrage und erforderliche Unterlagen | `/kontakt/` |
| Ausbildung 2027 | Jobdetailseite |

Es wurden keine Suchvolumina erfunden. Die Priorisierung basiert auf geschäftlicher Relevanz, belegtem Leistungsumfang und Suchintention. Details stehen in [`04-keywords.md`](./04-keywords.md).

### 7.2 Onpage SEO

- Titel maximal 60 Zeichen, Beschreibungen maximal 160 Zeichen;
- genau ein Canonical je HTML-Seite;
- `lang="de"`, `hreflang="de-DE"` und `x-default`;
- lokale 1200-×-630-OG-Grafik und vollständige Open-Graph-/Twitter-Metadaten;
- sichtbare Breadcrumbs und BreadcrumbList auf inneren Seiten;
- konsistente interne Verlinkung nach Entscheidungsphase;
- Sitemap ohne `noindex`-Seiten;
- Legacy-Redirects für alte WordPress-URLs.

### 7.3 GEO und maschinenlesbare Antworten

- sichtbare FAQ auf 14 Seiten;
- FAQPage nur dort, wo die Antworten sichtbar sind;
- 19 Organization/LocalBusiness-, 19 WebSite- und 19 WebPage-Blöcke;
- sechs Service-Blöcke, ein JobPosting, 17 BreadcrumbLists;
- `llms.txt` mit Seitenstruktur, Kerndaten, Zertifikat und Anfragehinweisen;
- explizite Robot-Gruppen für GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, Claude-User, Google-Extended und PerplexityBot;
- direkte Antworten mit fachlichen Grenzen statt pauschaler Garantien.

## 8. Maßnahmenkatalog

| Problem | Datei/URL | Schweregrad | Lösung | Status |
|---|---|---:|---|---|
| Nicht belegte Branchen-/Leistungsclaims | Start, Kompetenzen, Produkte | P0 | Luftfahrt, Werkstoffpalette, Wartung, Reichweite, Zeit-/Dokumentationszusagen entfernt | erledigt |
| Nicht belegte Karrierevorteile | Karriere/Jobdetail | P0 | Vergütung, Zusatzleistungen, Übernahmechancen entfernt; Dauer ergänzt | erledigt |
| Innenanspritzungsbeispiele nicht belegt | `/produkte/innenanspritzung/` | P0 | nur Verschlusstechnik und belegte Anforderungen verwendet | erledigt |
| Fünf Bilder >2 MB | `public/images/` | P0 | WebP, sinnvolle Zielauflösungen, 95,5 % Reduktion | erledigt |
| 7,2-MB-Bild als OG | BaseLayout | P0 | eigenes `og-schreck.jpg`, 1200 × 630, 115.566 Byte | erledigt |
| Externe/fehlende Display-Schrift | global.css/BaseLayout | P0 | Oswald lokal als WOFF2 mit Preload, Swap und OFL | erledigt |
| DSE nennt nur Systemschriften | `/datenschutz/` | P0 extern | Rechtstext nicht selbst geändert; Pflichtfreigabe an Auftraggeber | offen vor Livegang |
| Download/Sitemap-Widerspruch | Sitemap/Downloads | P1 | Downloads aus Sitemap entfernt, ISO lokal verlinkt | erledigt |
| Fehlende Nachweisseiten | Qualität/Ausstattung | P1 | zwei fokussierte Seiten angelegt | erledigt |
| Maschinenliste möglicherweise veraltet | Ausstattung | P1 extern | Stand 01/2024 transparent; Aktualitätsbestätigung angefordert | offen |
| Produktseiten zu kurz/dupliziert | sechs Produktdetails | P1 | fachlich vertieft, je eigene Anwendungen, Anforderungen und FAQ | erledigt |
| Kontaktformular ohne Validierung | `/kontakt/` | P1 | native Validierung, Labels, Autocomplete, Pflichtfeldhinweise | erledigt |
| Mobile-Menü unvollständig zugänglich | Header | P1 | ARIA-Zustände, Escape, Fokusbegrenzung/-rückgabe | erledigt |
| Fehlende Skip-Navigation/Fokusdarstellung | Layout/CSS | P1 | Skip-Link und kontrastreiche Fokuszustände | erledigt |
| Touch-Ziele <44 Pixel | Header/Footer/Inline-CTA | P1 | 19-Seiten-Browseraudit, alle sichtbaren Ziele ≥44 × 44 | erledigt |
| Cyan-/Muted-Kontraste auf hellen Flächen | global.css | P1 | `#04748a` und `#5f6f82`, dokumentierte AA-Kontraste | erledigt |
| Bewegungen trotz Nutzerpräferenz | CSS/Startscript | P1 | `prefers-reduced-motion`, Video/Zähler berücksichtigt | erledigt |
| Unvollständige Security-Header | `_headers` | P1 | CSP, HSTS, Permissions-Policy, COOP ergänzt | erledigt |
| Fehlende Query-String-Redirects | `_worker.js` | P1 | IDs 82, 85, 89, 380 und Bestandsmap finalisiert | erledigt |
| Worker war ignoriert | `.gitignore` | P1 | Worker in Versionsverwaltung aufgenommen | erledigt |
| Uneinheitliche strukturierte Daten | BaseLayout/Seiten | P1 | Validator und zentrale Entitätsdaten, 95 valide Blöcke | erledigt |
| Scripte hinter `</html>` | Start/Kontakt | P1 | Scripte in Layout-Body verschoben, Nu-Validator grün | erledigt |
| Interne Links nicht wiederholbar geprüft | `scripts/check-internal-links.mjs` | P1 | automatischer Dist-Link- und Fragmentcheck | erledigt |
| Überschriften nicht wiederholbar geprüft | `scripts/check-headings.mjs` | P1 | exakt eine H1 und keine Ebenensprünge | erledigt |
| Lighthouse nicht lokal verfügbar | externe Gegenprüfung | P2 | als expliziter Staging-Prüfpunkt dokumentiert | offen |
| Sitemap-`lastmod` entspricht Build-Datum | Sitemap | P2 | keine falsche Einzelhistorie erfunden; echte Inhaltsdaten später automatisieren | offen optional |
| Englische Version ohne belegten Bedarf | Architektur | P3 | nicht gebaut; Auslöser und Vorgehen dokumentiert | bewusst zurückgestellt |

## 9. Umgesetzte Änderungen und Nachweise

### 9.1 Commit-Liste

```text
88a93ca AP0: Rechts-Abnahme 12.06. sichern (DSE, VSBG, Maps-Link, Sitemap-noindex)
983ad6b AP0: Baseline und Prüfprotokolle anlegen
86c3252 AP1: Bestand, Faktenquellen und Redirects auditieren
47a95fb AP2: Faktenbasis und Positionierung festlegen
4578973 AP3: Wettbewerber und Differenzierung analysieren
7a4b45b AP4: Keyword-Cluster und Suchintentionen zuordnen
45c41b8 AP5: Informationsarchitektur und Nachweisseiten umsetzen
75987a0 AP6: Produkttexte belegen und fachlich vertiefen
4aa72cc AP6: Kernseiten und Karriere faktenbasiert überarbeiten
3b9e36b AP7: JSON-LD, llms und KI-Crawler vervollständigen
b8ff035 AP8: Bilder, Fonts und Metadaten optimieren
1b0c3f8 AP9: Barrierefreiheit und Code-Audit abschließen
```

Alle genannten Commits wurden auf `origin/master` gepusht. AP10 wird mit diesem Bericht separat abgeschlossen.

### 9.2 Geänderte Dateien

Im Bereich AP0–AP9 wurden 53 Pfade geändert, angelegt oder durch optimierte Varianten ersetzt. Die wichtigsten Gruppen:

- Dokumentation: `docs/relaunch-2026/01-*` bis `05-*`, `ENTSCHEIDUNGEN.md`, `OFFENE-FRAGEN.md`, `PRUEFPROTOKOLL.md`;
- Layout/Komponenten: `BaseLayout.astro`, `Header.astro`, `Footer.astro`, `PageHero.astro`, `ProductCard.astro`;
- Inhalte: Start, Produkte, sechs Produktdetails, Kompetenzen, Qualität, Ausstattung, Über uns, Karriere, Jobdetail, Kontakt, Downloads;
- Daten/GEO: `site.ts`, `llms.txt.ts`, `robots.txt.ts`, `sitemap.xml.ts`, Job-Content;
- Infrastruktur: `_headers`, `_worker.js`, `.gitignore`, `package.json`;
- Tests: `validate-jsonld.mjs`, `check-internal-links.mjs`, `check-headings.mjs`;
- Assets: ISO-PDF, lokale Oswald-Datei/OFL, fünf WebP-Bilder und OG-Bild; fünf alte Großdateien entfernt.

Vollständige Pfadliste AP0–AP9:

```text
.gitignore
docs/relaunch-2026/01-bestandsaufnahme.md
docs/relaunch-2026/02-faktenbasis-positionierung.md
docs/relaunch-2026/03-wettbewerb.md
docs/relaunch-2026/04-keywords.md
docs/relaunch-2026/05-sitemap.md
docs/relaunch-2026/ENTSCHEIDUNGEN.md
docs/relaunch-2026/OFFENE-FRAGEN.md
docs/relaunch-2026/PRUEFPROTOKOLL.md
package.json
public/_headers
public/_worker.js
public/downloads/iso-9001-zertifikat-2024-2027.pdf
public/fonts/OFL.txt
public/fonts/oswald-600-700.woff2
public/images/einweisung.png (entfernt)
public/images/einweisung.webp
public/images/hero2.jpg (entfernt)
public/images/hero2.webp
public/images/luftbild_skt.png (entfernt)
public/images/luftbild_skt.webp
public/images/og-schreck.jpg
public/images/reparatur.png (entfernt)
public/images/reparatur.webp
public/images/skt_eingang.png (entfernt)
public/images/skt_eingang.webp
scripts/check-headings.mjs
scripts/check-internal-links.mjs
scripts/validate-jsonld.mjs
src/components/Footer.astro
src/components/Header.astro
src/components/PageHero.astro
src/components/ProductCard.astro
src/content/jobs/ausbildung-werkzeugmechaniker-2027.md
src/data/site.ts
src/layouts/BaseLayout.astro
src/pages/datenschutz.astro
src/pages/downloads.astro
src/pages/impressum.astro
src/pages/index.astro
src/pages/karriere.astro
src/pages/karriere/[slug].astro
src/pages/kompetenzen.astro
src/pages/kontakt.astro
src/pages/llms.txt.ts
src/pages/maschinen-ausstattung.astro
src/pages/produkte/[slug].astro
src/pages/produkte/index.astro
src/pages/qualitaet-zertifizierung.astro
src/pages/robots.txt.ts
src/pages/sitemap.xml.ts
src/pages/ueber-uns.astro
src/styles/global.css
```

### 9.3 Testergebnisse

| Test | Ergebnis |
|---|---|
| `npm run build` | 33 Dateien geprüft; 0 Fehler, 0 Warnungen, 0 Hinweise; 19 Seiten gebaut |
| `npm run check:jsonld` | 95 valide JSON-LD-Blöcke; Firmenentität konsistent |
| `npm run check:links` | 644 interne Verweise, 0 tote Ziele, 19 valide Fragmente |
| `npm run check:headings` | 214 Überschriften, 19/19 Seiten genau eine H1, 0 Sprünge |
| Altfehler-Grep | TMG, TTDSG, Google Fonts, ODR-Link, AggregateRating jeweils 0 |
| Bildlimit | 0 Bilder in `dist/images` über 500 KB |
| Sitemap | 0 fehlende indexierbare, 0 enthaltene `noindex`-Seiten |
| W3C Nu | Start, Kontakt, Medizinprodukt, Jobdetail jeweils 0 Meldungen |
| Mobile Browser | 19/19 ohne horizontalen Overflow; 0 sichtbare Touch-Ziele <44 × 44 |
| Browserkonsole | 0 Warnungen, 0 Fehler über 19 Seiten |
| HTTP-Preview | `/`, `/produkte/`, `/kompetenzen/`, `/kontakt/` jeweils 200 und eine H1 |

Vollständige Befehle und Einzelergebnisse stehen in [`PRUEFPROTOKOLL.md`](./PRUEFPROTOKOLL.md).

### 9.4 Selbstkritische Abschlusskontrolle

| Frage | Bewertung |
|---|---|
| Wurde jede Seite untersucht? | Ja, alle 19 HTML-Seiten statisch und im mobilen Browseraudit. |
| Sind Tatsachenaussagen belegt? | Ja, auf Basis AP2; aktualitätskritische Maschinenangaben tragen transparent den Stand 01/2024. |
| Sind die Texte menschlich und konkret? | Ja; konkrete Anwendungen, Projektfragen und Grenzen statt Keyword-Listen oder Superlativen. |
| Hat jede Seite eine eindeutige Suchintention? | Ja, dokumentiert in AP4/AP5; keine doppelten Branchen- oder FAQ-Seiten. |
| Sind wichtige Inhalte ohne JavaScript erreichbar? | Ja. Navigation, Inhalte, Telefon, E-Mail und Links sind HTML-basiert; JavaScript verbessert Menü, Mailto-Vorbefüllung und Animationen. |
| Sind strukturierte Daten wahrheitsgemäß? | Ja; 95 Blöcke validiert, sichtbare FAQ synchron, `directApply=false`. |
| Ist alles committed und gepusht? | AP0–AP9: ja. AP10 wird mit diesem Bericht als letzter Projektcommit gepusht. |
| Gibt es einen verdeckten Go-live-Blocker? | Nein im Code; offen sind die explizite DSE-Font-Freigabe, Faktenbestätigungen und externe Aufschaltung. |

## 10. Offene Fragen an Schreck

Die priorisierte und fortzuschreibende Liste steht in [`OFFENE-FRAGEN.md`](./OFFENE-FRAGEN.md). Für die Übergabe gelten insbesondere:

### Priorität A – vor Veröffentlichung betroffener Inhalte

1. Datenschutzerklärung auf die lokal gehostete Oswald-Schrift anpassen und rechtlich freigeben.
2. Maschinenpark Stand 01/2024 inklusive 446 × 646 mm und 1.500 kg bestätigen.
3. Aktuell bediente Branchen bestätigen; Luftfahrt bleibt bis dahin entfernt.
4. Veröffentlichbare Werkstoffe bestätigen.
5. Nadelverschlusstechnik, Schraubformen und Umspritzungsformen gegebenenfalls belegen.
6. Serviceumfang abgrenzen: Reparatur/Schulung versus vorbeugende Wartung.
7. Standard- und optionale Qualitäts-/Projektdokumente benennen.
8. Vergütung, Leistungen und Übernahmechancen für Ausbildung 2027 freigeben oder weiter nicht nennen.
9. Weitere aktuell offene Stellen bestätigen.

### Priorität B – technische Positionierung

- CAD-Datenformate;
- typische Werkzeug-/Bauteilgrößen, Kavitäten, Toleranzen und Stückzahlen;
- regelmäßige Heißkanal-, Mehrkomponenten- und Umspritzverfahren;
- Mindestunterlagen für belastbare Angebotsprüfung;
- Abnahme-, Mess- und Dokumentationsumfang;
- Fremdwerkzeug-Reparatur und belastbare Reaktionszeiten;
- freigabefähige Projektbeispiele, Bauteilfotos oder Referenzkunden;
- nachweisbare Kundenregionen/Länder;
- fachliche Abgrenzung „reinraumtaugliche Form“;
- aktueller Umfang von Prototypen und Erstserien.

### Priorität C – Betrieb und Marketingtechnik

- Umgang mit alten Produktflyern;
- Entscheidung zu Web3Forms;
- Entscheidung zu GA4 plus Consent-Manager;
- Lighthouse-Gegenprüfung auf Staging;
- CSP-Anpassung, falls später Drittanbieter aktiviert werden.

## 11. 30/60/90-Tage-Plan

### Tage 0–30: Freigabe und sichere Aufschaltung

| Maßnahme | Verantwortlich | Ergebnis |
|---|---|---|
| Priorität-A-Fragen beantworten | Schreck | belastbare finale Faktenfreigabe |
| DSE-Font-Abschnitt anpassen und Rechtstexte freigeben | Schreck/Rechtsberatung | rechtlich konsistenter Live-Stand |
| Staging bereitstellen, Domain/DNS und Cloudflare Pages konfigurieren | AI IT | prüfbare Zielumgebung |
| Worker-Redirects mit alten `page_id`-URLs auf Staging testen | AI IT/360ai | 301 ohne Ketten/Fehlziele |
| Security-Header und CSP auf Staging kontrollieren | AI IT/360ai | keine blockierten Eigenressourcen |
| Lighthouse auf Staging für Desktop/Mobile ausführen | 360ai/Gegenprüfung | dokumentierte Performance-/A11y-Scores |
| Search Console Domain-Property anlegen, Sitemap einreichen | Schreck/AI IT | Crawling- und Indexierungsdaten |
| Google-Unternehmensprofil prüfen: URL, Name, Anschrift, Telefon | Schreck | konsistente lokale Entität |
| Cloudflare-Einstellung für AI-Bots gegen `robots.txt` prüfen | AI IT | keine widersprüchliche Bot-Blockade |
| Go-live-Abnahme der Kernseiten und Redirects | Schreck/360ai/AI IT | dokumentierte Freigabe |

### Tage 31–60: Daten sammeln und Vertrauen ausbauen

| Maßnahme | Verantwortlich | Ergebnis |
|---|---|---|
| Search-Console-Abdeckung, Sitemap, 404 und Redirects prüfen | 360ai/AI IT | technische Indexierungsfehler behoben |
| Suchanfragen und Landingpages nach AP4-Cluster auswerten | 360ai | erste reale Intentionsdaten |
| Core Web Vitals und Lighthouse nach Livegang wiederholen | 360ai | reale Feld-/Labordaten |
| Maschinenliste und technische Grenzen aktualisieren | Schreck | präzisere Anbieterprüfung |
| Freigegebene Ansprechpartner mit Rollen ergänzen | Schreck/360ai | mehr B2B-Vertrauen |
| Entscheidung zu GA4 treffen | Schreck | entweder datensparsam ohne GA4 bleiben oder CMP-Projekt starten |
| Bei GA4: Consent, AVV, DSE und CSP gemeinsam umsetzen | Schreck/Rechtsberatung/AI IT | rechtskonforme optionale Messung |

### Tage 61–90: Auf Basis realer Signale optimieren

| Maßnahme | Verantwortlich | Ergebnis |
|---|---|---|
| Impressionen, Klicks, Positionen und CTR je Zielseite auswerten | 360ai | datenbasierter Title-/Snippet-Feinschliff |
| Kannibalisierung prüfen: generisch → Start, Fachcluster → Detail | 360ai | klare Seitenrollen |
| FAQ nur aus echten Vertriebs-/Suchfragen erweitern | Schreck/360ai | bessere Antworten ohne Textballast |
| Freigegebene Fallstudien/Referenzen bewerten | Schreck | Entscheidung über neue Nachweisinhalte |
| Eigenständige Service-Seite nur bei bestätigter Inhaltstiefe prüfen | Schreck/360ai | keine dünne Landingpage |
| Englische Version anhand qualifizierter internationaler Anfragen bewerten | Schreck/360ai | Go/No-Go mit Zielmärkten |
| Zertifikatserneuerung vor Ablauf 27.06.2027 terminieren | Schreck | kein veralteter Download |

## 12. Offen/Abweichungen und bewusste Grenzen

- **Kein Deployment:** `npm run deploy` wurde nicht ausgeführt. Domain-Aufschaltung bleibt bei AI IT.
- **Keine Analytics-/Formularaktivierung:** GA4, Consent-Manager und Web3Forms wurden nicht aktiviert.
- **Keine eigenmächtige Rechtsänderung:** Impressum und Datenschutz wurden nach AP0 nicht inhaltlich verändert. Die notwendige DSE-Font-Anpassung ist als Pflichtpunkt übergeben.
- **Lighthouse:** Chrome war installiert, Lighthouse nicht. Das einmalige Nachladen per `npx` wurde von der Ausführungsumgebung wegen Drittcode-Ausführung abgelehnt. Keine Umgehung; Gegenprüfung auf Staging erforderlich.
- **Maschinenaktualität:** Veröffentlicht ist transparent der dokumentierte Stand 01/2024. Schreck muss die Aktualität bestätigen.
- **Englische Version:** bewertet, bewusst nicht gebaut.
- **Sitemap-`lastmod`:** bleibt buildbezogen; echte redaktionelle Änderungsdaten sind eine optionale Folgeoptimierung.
- **Unversionierter Arbeitsauftrag:** Das vom Auftraggeber bereitgestellte Markdown-Briefing blieb absichtlich unversioniert und wurde nicht mit der Website veröffentlicht.

## 13. Abschlussbewertung

Die Astro-Seite ist nach der Überarbeitung eine belastbare Relaunch-Basis: fachlich klarer, nachweisorientiert, schneller, technisch sauberer und wesentlich besser zugänglich. Die verbleibenden Aufgaben sind keine verdeckten Codefehler, sondern explizit dokumentierte Freigaben, externe Integrationen und Betriebsentscheidungen. Nach DSE-Freigabe, Faktenbestätigung und Staging-/Domain-Abnahme kann die Seite durch AI IT aufgeschaltet werden.
