# AP1 – Bestandsaufnahme

Stand: 12.07.2026

## 1. Untersuchungsumfang

Untersucht wurden:

- die alte WordPress-Website unter `https://www.schreck-kunststofftechnik.de/` als Fakten- und Redirect-Quelle,
- die neue Astro-Website im Quellcode,
- der mit `npm run build` erzeugte Stand unter `dist/`,
- die Cloudflare-Dateien `_headers`, `_redirects` und `_worker.js`.

Die alte Website wird nicht verändert. Ihre Angaben werden nur übernommen, wenn die konkrete Quell-URL dokumentiert ist. Aktualitätskritische Angaben werden zusätzlich als offene Frage geführt.

## 2. Faktenextrakt der alten Website

### 2.1 Unternehmen und Historie

Quelle: `https://www.schreck-kunststofftechnik.de/?page_id=80`

- Gründung am 01.01.1984.
- Eine der ersten erworbenen Maschinen war eine Spritzgießmaschine, um Formen mit Abmusterungsprotokoll serienreif auszuliefern.
- Seit der Gründung wurden mehr als 1.000 Formen gebaut und zur Serienreife gebracht.
- Mehr als 30 Lehrlinge wurden ausgebildet.
- Die alte Seite nennt außerdem „hunderte Problemlösungen und Entwicklungen“ für Kunden. Diese ungenaue Mengenangabe eignet sich nicht als prominente Kennzahl.

Quelle: `https://www.schreck-kunststofftechnik.de/`

Die alte Startseite nennt folgende Leistungen:

- Herstellung von Formen für Kunststoffverarbeitung sowie Aluminium- und Zink-Druckguss,
- Abmusterung der hergestellten Formen auf eigenen Spritzgießmaschinen,
- Angebote und Konstruktionen nach Zeichnungen oder Mustern,
- Fertigungsstandskontrolle,
- Prototypen und Erstserien,
- protokollierte Qualität,
- Entwicklung und Weiterentwicklung von Produkten,
- Schulung des Fachpersonals, auch vor Ort,
- Reparaturen.

Nicht als zeitloser Website-Claim übernommen wird die alte Aussage zur Präsentation auf nationalen und internationalen Messen; dafür fehlt ein aktueller Nachweis.

### 2.2 Firmen- und Kontaktdaten

Quellen:

- `https://www.schreck-kunststofftechnik.de/?page_id=18`
- `https://www.schreck-kunststofftechnik.de/?page_id=20`

Belegt sind:

- Schreck Kunststofftechnik GmbH,
- Wolkersdorfer Straße 28, 35099 Burgwald-Bottendorf,
- Telefon `+49 6451 5000-0`,
- Fax `+49 6451 5000-10`,
- E-Mail `info@schreck-kunststofftechnik.com`,
- Geschäftsführer: Maximilian Grebe und Roman Manz,
- Handelsregister HRB 3981, Amtsgericht Marburg/Lahn,
- USt-IdNr. DE 113086891.

### 2.3 Zertifizierung

Quellen:

- Einbettungsseite: `https://www.schreck-kunststofftechnik.de/?page_id=85`
- Zertifikatsseite: `https://www.schreck-kunststofftechnik.de/?page_id=380`
- Originalzertifikat: `https://www.schreck-kunststofftechnik.de/wp-content/uploads/2024/07/2024-ISO-Zertifikat-deutsch.pdf`

Das visuell und per Textextraktion geprüfte Originalzertifikat belegt:

- Norm: DIN EN ISO 9001:2015,
- Geltungsbereich: „Formenbau von der Konstruktion bis zur Serienreife“,
- Zertifikatsnummer: 000854.Q/24.R,
- gültig vom 28.06.2024 bis 27.06.2027,
- Zertifizierungsstelle: SKZ-Cert GmbH.

Die Zertifizierung ist am Prüftag gültig. Vor einer dauerhaft veröffentlichten Download-Datei sollte Schreck bestätigen, dass nach Ablauf rechtzeitig ein Folgezertifikat bereitgestellt wird.

### 2.4 Maschinenpark und technische Grenzen

Quellen:

- Seite: `https://www.schreck-kunststofftechnik.de/?page_id=82`
- Maschinenpark-PDF: `https://www.schreck-kunststofftechnik.de/wp-content/uploads/2025/03/Maschinenpark.pdf`

Das PDF trägt den Stand 01/2024 und nennt:

| Bereich | Menge | Bezeichnung / Angabe |
|---|---:|---|
| Fräsen | 1 | DMU 80 Mono Block, iTNC 530, 3 Achsen |
| Fräsen | 1 | DMG Mori CMX 600 V, 3 Achsen |
| Fräsen | 1 | Deckel FP4MK |
| Fräsen | 1 | DMU 50 T, TNC 426, 3 Achsen |
| Drehen | 1 | Trens |
| Flachschleifen | 1 | Elb |
| Profilschleifen | 2 | Jung |
| Koordinatenschleifen | 1 | Moore |
| Rundschleifen | 1 | MSO |
| Senkerodieren | 1 | OPS Ingersoll Gantry 400 |
| Senkerodieren | 1 | OPS Ingersoll Gantry Eagle 400 |
| Spritzgießen | 1 | ARBURG, 35 t |
| Spritzgießen | 1 | ENGEL ES 200, 2-Komponenten, 80 t |
| Konstruktion | 3 | CAD Cimatron |
| Konstruktion | 2 | CAM Cimatron |
| Qualitätssicherung | 1 | Werth Profile-Projector |
| Qualitätssicherung | 1 | Tesa 2-D Messplatz Micro Hite |
| Qualitätssicherung | 1 | optisches 20-fach Messmikroskop |
| Qualitätssicherung | 1 | Koordinatenmessgerät PIONEER 05.06.04 |

Genannte Grenzen:

- Werkzeug-/Formgröße bis 446 × 646 mm,
- Formgewicht bis 1.500 kg.

Die Liste ist eine geeignete Basis für eine Seite „Maschinen & Ausstattung“, muss wegen des Stands 01/2024 vor Veröffentlichung als aktuell bestätigt werden.

### 2.5 Produkt- und Anwendungsbereiche

#### Gesamtportfolio

Quelle: `https://www.schreck-kunststofftechnik.de/?page_id=249`

- Formen für Kunststoff-, Aluminium- und Zink-Druckgussverarbeitung.
- Genannte Bereiche: Medizin, Labor, Kosmetik, Verpackung, Filtertechnik, Automobil, Haushaltsprodukte und Elektronik.
- Genannte Prozessschritte: Konzeptionierung, Konstruktion, Entwicklung, Abmusterung, Vermessung, Optimierung und Dokumentation.

„Luftfahrt“ wird auf der alten Seite nicht belegt und muss aus der neuen Website entfernt oder vom Unternehmen bestätigt werden.

#### Labortechnik

Quellen:

- `https://www.schreck-kunststofftechnik.de/?page_id=101`
- `https://www.schreck-kunststofftechnik.de/wp-content/uploads/2019/12/SKT_Flyer_Labor.pdf`

Belegte Anwendungen: Pipetten, Küvetten, Verbindungselemente, PCR-Gefäße und Filtertechnik. Genannte Formanforderungen: reproduzierbare Qualität, schneller Zyklus, abfallfreie Produktion, balancierte Fließwege, austauschbare Ersatzteile, Partikelfreiheit und wartungsarme Auslegung.

#### Verpackung

Quellen:

- `https://www.schreck-kunststofftechnik.de/?page_id=97`
- `https://www.schreck-kunststofftechnik.de/wp-content/uploads/2019/12/SKT_Flyer_Verpackung.pdf`

Belegte Anwendungen: Verschlusstechnik, Schraubkappen und Inlays. Genannte Formanforderungen: Voll-Heißkanal-Lösungen, reproduzierbare Qualität, abfallfreie Produktion, austauschbare Ersatzteile, schneller Zyklus und wartungsarme Auslegung.

#### Innenanspritzung

Quelle: `https://www.schreck-kunststofftechnik.de/?page_id=99`

Belegte Anwendung: Verschlusstechnik. Genannte Formanforderungen: hohe Oberflächengüte, reproduzierbare Maßqualität, schneller Zyklus, abfallfreie Produktion und balancierte Fließwege.

Die derzeit auf der neuen Seite genannten Beispiele „Nadelverschlusstechnik“, „Schraubformen“ und „Umspritzungsformen“ sind durch diese Quelle nicht belegt.

#### Medizin

Quellen:

- `https://www.schreck-kunststofftechnik.de/?page_id=103`
- `https://www.schreck-kunststofftechnik.de/wp-content/uploads/2019/12/SKT_Flyer_Medizin.pdf`

Belegte Anwendungen: Einmalspritzen, Adaption, Schutzkappen, Verbindungselemente, Kleinstteile und Filtertechnik. Genannte Formanforderungen: Voll-Heißkanal-Lösungen, reproduzierbare Qualität, abfallfreie Produktion, lange Lebensdauer, austauschbare Ersatzteile, Partikelfreiheit und wartungsarme Auslegung.

#### Mehrkomponentenwerkzeuge

Quellen:

- `https://www.schreck-kunststofftechnik.de/?page_id=105`
- `https://www.schreck-kunststofftechnik.de/wp-content/uploads/2019/12/SKT_Flyer_2K.pdf`

Belegte Anwendungen: Dreiwegehahn, Funkschlüssel, Mobilfunkzubehör, Waschmaschinen-Dichtring und Kleinstteile. Genannte Formanforderungen: Voll- und Teilheißkanallösungen, reproduzierbare Qualität, abfallfreie Produktion, austauschbare Ersatzteile, schneller Zyklus, wartungsarme Auslegung und lange Lebensdauer.

#### Kleinstteile / Kleinstartikelformen

Quelle: `https://www.schreck-kunststofftechnik.de/?page_id=107`

Belegte Anwendungen: Optik und Verriegelung, Verriegelungspin, künstliche Pupille als Zwei-Komponenten-Teil, Metallumspritzung, Rollen und Zahnräder, Funktionsteile, Wippe als Zwei-Komponenten-Teil, optische Gehäuse, Verriegelungsgehäuse und Clip. Genannte Formanforderungen: reproduzierbare Qualität, austauschbare Ersatzteile, schneller Zyklus, wartungsarme Auslegung, lange Lebensdauer, optimale Entlüftung und Reinraumtauglichkeit.

### 2.6 Karriere und Downloads

Quellen:

- Stellenanzeigen: `https://www.schreck-kunststofftechnik.de/?page_id=489`
- Downloads: `https://www.schreck-kunststofftechnik.de/?page_id=15`

Die Ausbildung zum Werkzeugmechaniker startet laut alter Website im August 2027 und dauert drei Jahre. Die dort genannten Ausbildungsinhalte entsprechen weitgehend der neuen Jobseite. Aussagen zu Vergütung, Zusatzleistungen und Übernahmechancen sollten dennoch separat vom Unternehmen bestätigt werden.

Die alte Downloadseite verlinkt Produktflyer, ISO-Zertifikat und AGB. Die neue Downloadseite stellt aktuell nur Mailto-Anfragen bereit und ist `noindex`.

## 3. Audit der neuen Astro-Seite

Prioritäten: P0 = kritisch vor Domain-Aufschaltung, P1 = hoch, P2 = mittel, P3 = optional.

| URL | Zweck / Zielgruppe / Suchintention | Ist-Zustand | Problem / Maßnahme | Priorität |
|---|---|---|---|---:|
| `/` | Unternehmens- und Leistungsübersicht für Einkauf, Konstruktion und Projektverantwortliche; Anbieterrecherche | 740 Wörter, FAQPage, klare CTAs, ein H1 | Standard-OG-Bild ist 6,9 MB; Aussagen zu Luftfahrt, vollständiger Qualitätsdokumentation, deutschlandweiter/internationaler Betreuung und vorbeugender Wartung sind nicht vollständig belegt; H1 „Produktentwicklung mit System“ nennt Formenbau nicht direkt. Belegte Positionierung schärfen, Bilder optimieren. | P0/P1 |
| `/produkte/` | Portfolio-Übersicht; Auswahl eines passenden Werkzeugbereichs | 347 Wörter, sechs Karten, sichtbare FAQ mit Schema | Title „Produkte und Werkzeugbau“ ist generisch; Inhalte sind knapp. Übersicht auf Suchintention „Spritzgusswerkzeuge / Formenbau“ ausrichten und interne Auswahlhilfe ergänzen. | P1 |
| `/produkte/medizintechnik/` | Anbieter für Formen medizinischer Kunststoffteile | 186 Wörter, Service- und Breadcrumb-Schema | Sehr kurz und weitgehend identisch zu anderen Produktseiten; mehrere Beispiele weichen von der alten Medizinquelle ab. Mit belegten Anwendungen, Anforderungen, Projektinformationen und sichtbarer FAQ vertiefen. | P1 |
| `/produkte/labortechnik/` | Anbieter für Labor- und Diagnostikwerkzeuge | 183 Wörter, Service- und Breadcrumb-Schema | Zu kurz; belegte Anwendungen sind vorhanden, aber technische Einordnung und Anfrageanforderungen fehlen. | P1 |
| `/produkte/verpackung-kosmetik/` | Formen für Verschlüsse, Verpackung und ggf. Kosmetik | 183 Wörter, Service- und Breadcrumb-Schema | Kosmetik ist nur als Bereich, nicht mit konkreten Anwendungen belegt. Inhalt sauber zwischen belegter Verpackung und allgemein belegtem Kosmetikbereich abgrenzen. | P1 |
| `/produkte/innenanspritzung/` | Spezialverfahren / Werkzeugkonzept für Verschlusstechnik | 186 Wörter, Service- und Breadcrumb-Schema | Drei der vier Beispiele sind nicht durch die erfassten Quellen belegt. Seite fachlich vertiefen, nicht belegte Beispiele entfernen oder bestätigen lassen. | P0/P1 |
| `/produkte/mehrkomponentenwerkzeuge/` | Anbieter für 2K-/Mehrkomponentenwerkzeuge | 189 Wörter, Service- und Breadcrumb-Schema | Zu kurz, Suchbegriff 2K nur in Keywords, nicht ausreichend im sichtbaren Text. Belegte Beispiele und Prozessfragen ausbauen. | P1 |
| `/produkte/kleinstteile/` | Anbieter für Formen kleiner technischer Kunststoffteile | 193 Wörter, Service- und Breadcrumb-Schema | Zu kurz; gute belegbare Detailbasis wird kaum genutzt. Anwendungen, Entlüftung, Ersatzteil-/Wartungsaspekte und Anfrageunterlagen erklären. | P1 |
| `/kompetenzen/` | Prozess- und Leistungsdarstellung für technische Entscheider | 495 Wörter, FAQPage, acht Karten | FAQ nennt unbelegte Werkstoffpalette (PP, PE, ABS und Hochleistungswerkstoffe) sowie pauschale Projektlaufzeiten; „modernes Messequipment“ ist unspezifisch. Durch Maschinenpark und belegte Prozessschritte ersetzen/konkretisieren. | P0/P1 |
| `/ueber-uns/` | Vertrauen, Historie, Standort | 225 Wörter, belastbare Kennzahlen und Historie | Hero-Bild 3 MB; Seite bleibt trotz guter Faktenbasis dünn. Zertifizierung und Standortkompetenz sinnvoll verlinken; Bild optimieren. | P0/P2 |
| `/karriere/` | Arbeitgeber- und Ausbildungsrecherche | 240 Wörter, eine aktive Stelle, Initiativbewerbung sichtbar | Text behauptet aktuell Werkzeugmechaniker und Auszubildende als offene Zielgruppen, tatsächlich ist nur eine Ausbildung aktiv. „Familiär“, „modern“ und Entwicklungsmöglichkeiten sind zu bestätigen. | P1 |
| `/karriere/ausbildung-werkzeugmechaniker-2027/` | Konkrete Bewerbung für Ausbildung 2027 | 190 Wörter, JobPosting- und Breadcrumb-Schema | „Gute Übernahmechancen“, „attraktive Ausbildungsvergütung und Zusatzleistungen“ sind nicht belegt. `directApply: true` bei Mailto ist zu prüfen. Ausbildungsdauer fehlt auf der neuen Detailseite. | P0/P1 |
| `/kontakt/` | Projektanfrage, Telefon, E-Mail, Anfahrt | 215 Wörter, Mailto-Formular | Title wird doppelt ergänzt und ist zu lang. Formular funktioniert nur mit JavaScript, deaktiviert native Validierung und zeigt bei Fehlern keine Meldung. Kontakt bleibt ohne JS möglich, Projektanfrage sollte aber zugänglicher und konkreter werden. | P1 |
| `/downloads/` | Unterlagen anfragen | 125 Wörter, `noindex` | Trotz `noindex` in der Sitemap enthalten. Gültiges ISO-Zertifikat ist vorhanden, wird aber nicht direkt angeboten. Entscheidung über indexierbare Qualitäts-/Ausstattungsseiten und Downloadstrategie nötig. | P1 |
| `/impressum/` | Anbieterkennzeichnung | 115 Wörter, indexierbar | Inhalt wurde in AP0 rechtlich abgenommen und bleibt unverändert. Technisch keine Altbegriffe oder ODR-Links gefunden. Optional `noindex` prüfen, aber keine inhaltliche Änderung durch diesen Auftrag. | P3 |
| `/datenschutz/` | Datenschutzhinweise | 629 Wörter, `noindex`, nicht in Sitemap | Inhaltlich gesperrt. Technisch stimmig zum aktuellen Stand mit Systemschriften; nach Oswald-Selbsthosting muss der Font-Abschnitt durch den Auftraggeber angepasst werden. | P0-Hinweis |
| `/404.html` | Fehlernavigation | 72 Wörter, `noindex` | Funktional; interne Hilfslinks im späteren Link-Check verifizieren. | P3 |

## 4. Querschnittsprobleme

### 4.1 Inhalte und Fakten

- Mehrere sichtbare Aussagen sind derzeit nicht auf die alte Website oder die bestätigten Firmenfakten zurückführbar: Luftfahrt, konkrete Materialpalette, pauschale Projektlaufzeiten, vollständige Qualitätsdokumentation, internationale Betreuung, Übernahmechancen und Vergütungszusagen.
- Die sechs Produktseiten enthalten jeweils nur rund 183–193 Wörter und wiederholen große Textteile.
- Die vorhandenen alten Quellen bieten ausreichend belegbare Details für eine deutlich konkretere Darstellung.

### 4.2 SEO und GEO

- Alle HTML-Seiten besitzen genau ein H1.
- Canonicals und deutsche Hreflang-Angaben sind vorhanden.
- FAQPage ist nur dort eingebunden, wo die Fragen sichtbar sind.
- BreadcrumbList existiert derzeit nur auf Produkt- und Jobdetailseiten; sichtbare Breadcrumbs fehlen.
- Das Standard-OG-Bild ist `hero2.jpg` mit 7.174.773 Byte.
- `/downloads/` ist `noindex`, steht aber in der XML-Sitemap.
- `lastmod` wird bei jedem Build auf das Tagesdatum gesetzt und bildet keine echte Inhaltsänderung ab.
- Die Kontaktseite erzeugt wegen der Title-Logik einen doppelten Markenzusatz.

### 4.3 Bilder und Performance

Fünf Bilder überschreiten 2 MB:

| Datei | Größe |
|---|---:|
| `einweisung.png` | 7.180.166 Byte |
| `hero2.jpg` | 7.174.773 Byte |
| `skt_eingang.png` | 3.099.913 Byte |
| `luftbild_skt.png` | 3.087.336 Byte |
| `reparatur.png` | 2.107.303 Byte |

Im Build wurden 53 Bildvorkommen gezählt:

- 0 ohne `alt`,
- 53 ohne `width`,
- 53 ohne `height`,
- 35 ohne `loading`.

Maßnahmen: große Bilder in geeignete WebP-Dateien umwandeln, intrinsische Abmessungen setzen, Below-the-fold-Bilder lazy laden und ein separates 1200×630-OG-Bild erstellen.

### 4.4 Technik und Security

`public/_headers` setzt derzeit:

- `X-Frame-Options: DENY`,
- `X-Content-Type-Options: nosniff`,
- `Referrer-Policy: strict-origin-when-cross-origin`,
- Cache-Header für Assets.

Noch zu ergänzen bzw. fachlich zu testen sind mindestens Content-Security-Policy, Strict-Transport-Security und Permissions-Policy. Wegen Inline-Skripten und des optionalen GA4-Blocks muss eine CSP vor der Aktivierung im Browser getestet werden.

`public/_worker.js` fängt `?page_id=...`-URLs ab, entfernt Query und Hash und leitet mit Status 301 auf neue Pfade weiter. Das ist für Cloudflare Pages die richtige technische Stelle, weil `_redirects` Query-Parameter nicht zuverlässig abbildet. Im aktuellen Mapping fehlen die IDs 85 (Zertifizierung), 89 (Termine) und 380 (ISO-Zertifikat).

`public/_redirects` enthält zusätzlich `/firmengeschichte/ → /ueber-uns/`.

### 4.5 Altfehler-Grep im Build

Alle erwarteten Prüfungen ergaben 0 Treffer:

```text
 TMG                                  0 Treffer
TTDSG                                 0 Treffer
fonts.googleapis                      0 Treffer
ec.europa.eu/consumers/odr            0 Treffer
AggregateRating                       0 Treffer
```

## 5. Redirect-Map

| Alte URL | Ziel | Status / Begründung |
|---|---|---|
| `/?page_id=15` | `/downloads/` | vorhanden |
| `/?page_id=18` | `/kontakt/` | vorhanden |
| `/?page_id=20` | `/impressum/` | vorhanden |
| `/?page_id=80` | `/ueber-uns/` | vorhanden |
| `/?page_id=82` | `/maschinen-ausstattung/` oder `/kompetenzen/` | derzeit `/kompetenzen/`; nach AP5 finalisieren |
| `/?page_id=85` | `/qualitaet-zertifizierung/` oder `/downloads/` | fehlt; nach AP5 finalisieren |
| `/?page_id=89` | `/ueber-uns/` | fehlt; alte Termine-Seite ist leer, daher keine eigene Zielseite nötig |
| `/?page_id=97` | `/produkte/verpackung-kosmetik/` | vorhanden |
| `/?page_id=99` | `/produkte/innenanspritzung/` | vorhanden |
| `/?page_id=101` | `/produkte/labortechnik/` | vorhanden |
| `/?page_id=103` | `/produkte/medizintechnik/` | vorhanden |
| `/?page_id=105` | `/produkte/mehrkomponentenwerkzeuge/` | vorhanden |
| `/?page_id=107` | `/produkte/kleinstteile/` | vorhanden |
| `/?page_id=249` | `/produkte/` | vorhanden |
| `/?page_id=297` | `/downloads/` | vorhanden |
| `/?page_id=338` | `/datenschutz/` | vorhanden |
| `/?page_id=380` | `/qualitaet-zertifizierung/` oder `/downloads/` | fehlt; nach AP5 finalisieren |
| `/?page_id=489` | `/karriere/` | vorhanden |
| `/firmengeschichte/` | `/ueber-uns/` | in `_redirects` und Worker vorhanden |

## 6. Priorisierte Maßnahmen

### P0 vor Domain-Aufschaltung

1. Fünf übergroße Bilder und Standard-OG-Bild optimieren.
2. Nicht belegte Website-Aussagen entfernen oder durch belegte Aussagen ersetzen.
3. Unbelegte Zusagen in Stellenanzeige und Karrierebereich korrigieren.
4. Oswald lokal einbinden und die erforderliche DSE-Anpassung ausdrücklich an den Auftraggeber übergeben.

### P1

1. Produktseiten mit belegten Fachinformationen und klarer Anfragehilfe vertiefen.
2. Kompetenzseite auf konkrete, belegte Prozesse, Maschinen und Messmittel ausrichten.
3. Sitemap-/`noindex`-Widerspruch und fehlende Legacy-Redirects beheben.
4. Kontaktformular zugänglicher machen und Title korrigieren.
5. Security-Header ergänzen und browserseitig prüfen.

### P2

1. Über-uns-Seite und interne Verlinkung zu Qualität/Ausstattung vertiefen.
2. Sichtbare Breadcrumbs und strukturierte Daten konsistent über die finale Struktur ausrollen.
3. Reale Änderungsdaten statt Build-Datum für Sitemap prüfen.

### P3

1. Indexierungsentscheidung für Impressum und Downloadseite dokumentieren.
2. Englische Version nur nach belegbarem internationalen Bedarf bewerten.

