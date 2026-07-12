# AP5 – Finale Informationsarchitektur

Stand: 12.07.2026

## 1. Entscheidung

Die vorhandene Astro-Seite bleibt die technische und gestalterische Basis. Sie wird nicht neu aufgebaut. Zwei neue indexierbare Seiten werden ergänzt:

1. `/qualitaet-zertifizierung/`
2. `/maschinen-ausstattung/`

Beide Seiten erfüllen die bindenden Kriterien:

- eigene, in AP4 abgegrenzte Suchintention,
- ausreichend belegbare Inhalte aus Originalquellen,
- klarer Nutzen für Einkauf und Konstruktion,
- kein künstliches Aufteilen bereits vorhandener Texte.

## 2. Finale Sitemap

### Indexierbar

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

### Nicht indexierbar

```text
/downloads/       noindex, follow
/datenschutz/     noindex, follow
/404.html         noindex, follow
```

`/downloads/` und `/datenschutz/` werden aus der XML-Sitemap ausgeschlossen. Das Impressum bleibt technisch indexierbar, weil inhaltliche Änderungen an den Rechtstexten nicht Teil des Auftrags sind und eine zusätzliche Noindex-Entscheidung keinen geschäftlichen Nutzen für den Relaunch hat.

## 3. Navigationsstruktur

### Desktop-Hauptnavigation

1. Produkte
2. Kompetenzen
3. Qualität
4. Über uns
5. Karriere
6. Kontakt

„Maschinen & Ausstattung“ wird nicht als siebter Desktop-Hauptpunkt ergänzt. Die Seite ist über Qualität, Kompetenzen, Footer und interne Links erreichbar. So bleibt die Hauptnavigation auf die wichtigsten Entscheidungswege beschränkt.

### Mobile Navigation

Die mobile Navigation enthält zusätzlich:

- Maschinen & Ausstattung
- Downloads

### Footer

Der Footer führt alle Hauptpunkte sowie Maschinen & Ausstattung und Downloads.

## 4. URL-Entscheidungen

- Deutsche, sprechende URLs ohne Umlaute.
- Bestehende Produkt-URLs bleiben unverändert, um keine neuen Redirect-Ketten zu erzeugen.
- `qualitaet-zertifizierung` kombiniert die beiden eng verbundenen Intentionen, statt zwei dünne Seiten anzulegen.
- `maschinen-ausstattung` ist verständlicher als das interne Branchenwort „Maschinenpark“ und deckt auch CAD/CAM und Messtechnik ab.

## 5. Breadcrumb-Struktur

- Startseite besitzt keinen Breadcrumb.
- Ebene 1: `Startseite / Seitentitel`.
- Produktdetail: `Startseite / Produkte / Produktbereich`.
- Jobdetail: `Startseite / Karriere / Stellenbezeichnung`.

Die sichtbaren Breadcrumbs werden im gemeinsamen `PageHero` umgesetzt. Strukturierte BreadcrumbList-Daten werden in AP7 auf die finale Sitemap ausgerollt.

## 6. Interne Verlinkung

| Ausgang | Ziel | Kontext |
|---|---|---|
| Startseite | Produkte, Kompetenzen, Qualität, Kontakt | Anbieterprüfung und nächster Schritt |
| Produktübersicht | sechs Produktseiten | Auswahl nach Anwendung |
| Produktdetail | Kompetenzen, Qualität, Kontakt | Prozess, Nachweis, Anfrage |
| Kompetenzen | Maschinen, Qualität, Kontakt | Ausstattung und Nachweis |
| Qualität | Maschinen, Kompetenzen, Zertifikat, Kontakt | Prüfbarkeit und Projektanforderung |
| Maschinen | Qualität, Kontakt | Nachweis und Machbarkeitsprüfung |
| Über uns | Qualität, Maschinen, Karriere | Vertrauen, Geschichte, Arbeitgeber |
| Karriere | aktive Stelle, Initiativbewerbung | Bewerbung |
| Kontakt | Produkte, Kompetenzen | Anfrage vorbereiten |

## 7. Bewusst nicht angelegte Seiten

### Branchen-Landingpages Medizin, Labor und Verpackung

Nicht angelegt, weil die vorhandenen Produktseiten exakt diese Suchintentionen bedienen. Zusätzliche `/branchen/...`-Seiten würden Inhalte duplizieren und Kannibalisierung erzeugen.

### Fachwissen / Blog

Nicht angelegt, weil kein Redaktionsprozess und keine freigegebenen Fachartikel vorhanden sind. Ein leerer oder künstlich befüllter Blog schwächt Vertrauen.

### Zentrale FAQ-Seite

Nicht angelegt. Fragen werden dort beantwortet, wo die jeweilige Suchintention besteht: Start, Produkte, Kompetenzen, Qualität und Kontakt.

### Referenzen / Projekte

Nicht angelegt, weil keine Referenzkunden oder freigegebenen Fallstudien vorliegen.

### Materialseite

Nicht angelegt, weil die konkrete Werkstoffpalette von Schreck noch nicht bestätigt ist.

### Eigene Reparatur- oder Service-Seite

Vorerst nicht angelegt. Reparatur und Schulung sind belegt, aber für eine eigenständige Seite fehlen bestätigte Details zu Fremdwerkzeugen, Wartung, Reaktionszeiten und Serviceumfang. Die Intention bleibt auf `/kompetenzen/`.

### Englische Version

Nicht angelegt. Bedarf und Zielmärkte sind nicht bestätigt; die Empfehlung folgt im Abschlussbericht.

## 8. Umsetzung in AP5

- neue Seiten `qualitaet-zertifizierung.astro` und `maschinen-ausstattung.astro`,
- gültiges ISO-Zertifikat lokal unter `public/downloads/` gesichert,
- Navigation und Footer ergänzt,
- sichtbare Breadcrumbs im gemeinsamen PageHero eingeführt,
- XML-Sitemap um neue Seiten ergänzt und `downloads/` entfernt,
- Worker-Redirects für `page_id=82`, `85`, `89` und `380` finalisiert.

