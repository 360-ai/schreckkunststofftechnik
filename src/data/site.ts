export const siteUrl = "https://www.schreck-kunststofftechnik.de";

export const company = {
  name: "Schreck Kunststofftechnik GmbH",
  claim: "Von der Produktidee bis zur serienreifen Produktionslösung",
  phone: "+49 6451 5000-0",
  fax: "+49 6451 5000-10",
  email: "info@schreck-kunststofftechnik.com",
  street: "Wolkersdorfer Straße 28",
  postalCity: "35099 Burgwald-Bottendorf",
  postalCode: "35099",
  locality: "Burgwald-Bottendorf",
  region: "Hessen",
  country: "DE",
  founded: "1984",
  location: "Burgwald-Bottendorf, Hessen",
  geo: {
    latitude: 51.017,
    longitude: 8.832
  }
};

export const navItems = [
  { label: "Produkte", href: "/produkte/" },
  { label: "Downloads", href: "/downloads/" },
  { label: "Über uns", href: "/ueber-uns/" },
  { label: "Karriere", href: "/karriere/" },
  { label: "Kontakt", href: "/kontakt/" }
];

// Maschinenpark (Stand 01/2024) — auf /ueber-uns/#maschinen eingebunden.
export const machinePark = [
  { area: "Fräsen", entries: ["DMU 80 Mono Block – iTNC 530, 3 Achsen", "DMG Mori CMX 600 V – 3 Achsen", "Deckel FP4MK", "DMU 50 T – TNC 426, 3 Achsen"] },
  { area: "Drehen", entries: ["Trens"] },
  { area: "Schleifen", entries: ["Elb Flachschleifmaschine", "2 × Jung Profilschleifmaschinen", "Moore Koordinatenschleifmaschine", "MSO Rundschleifmaschine"] },
  { area: "Senkerodieren", entries: ["OPS Ingersoll Gantry 400", "OPS Ingersoll Gantry Eagle 400"] },
  { area: "Spritzgießen", entries: ["ARBURG – 35 t", "ENGEL ES 200 – 2-Komponenten, 80 t"] },
  { area: "Konstruktion", entries: ["3 × CAD Cimatron", "2 × CAM Cimatron"] },
  { area: "Qualitätssicherung", entries: ["Werth Profile-Projector", "Tesa 2-D Messplatz Micro Hite", "optisches 20-fach Messmikroskop", "Koordinatenmessgerät PIONEER 05.06.04"] }
];

export const machineLimits = [
  { value: "446 × 646 mm", label: "Werkzeug-/Formgröße bis" },
  { value: "1.500 kg", label: "Formgewicht bis" },
  { value: "2K · 80 t", label: "ENGEL-Abmusterung" },
  { value: "35 t", label: "ARBURG-Abmusterung" }
];

// ISO-9001-Zertifikat — auf /ueber-uns/#zertifikat eingebunden.
export const certificate = {
  norm: "DIN EN ISO 9001:2015",
  scope: "Formenbau von der Konstruktion bis zur Serienreife",
  number: "000854.Q/24.R",
  validity: "28.06.2024–27.06.2027",
  authority: "SKZ-Cert GmbH",
  pdf: "/downloads/iso-9001-zertifikat-2024-2027.pdf"
};

export const products = [
  {
    title: "Medizintechnik",
    slug: "medizintechnik",
    eyebrow: "Werkzeuge für medizinische Kunststoffteile",
    intro: "Schreck entwickelt und fertigt Spritzgusswerkzeuge für medizinische Kunststoffteile wie Einmalspritzen, Schutzkappen, Verbindungselemente, Kleinstteile und Filtertechnik.",
    overview: "Für medizinische Anwendungen nennt die Unternehmensdokumentation reproduzierbare Qualität, abfallfreie Produktion, lange Lebensdauer, austauschbare Ersatzteile, Partikelfreiheit und eine wartungsarme Auslegung als Formanforderungen. Welche davon für Ihr Bauteil entscheidend sind, wird im Projekt geklärt.",
    image: "/images/grafik_medizin_2.png",
    keywords: ["Spritzgusswerkzeuge Medizintechnik", "Formenbau Medizin", "Präzisionswerkzeuge"],
    requirements: ["Voll-Heißkanal-Lösungen", "Reproduzierbare Qualität", "Abfallfreie Produktion", "Lange Lebensdauer", "Austauschbare Ersatzteile", "Partikelfreiheit", "Wartungsarme Auslegung"],
    examples: ["Einmalspritzen", "Adaption", "Schutzkappen", "Verbindungselemente", "Kleinstteile", "Filtertechnik"],
    faqs: [
      { q: "Welche medizinischen Anwendungen sind bei Schreck belegt?", a: "Belegt sind Formen für Einmalspritzen, Adaptionen, Schutzkappen, Verbindungselemente, Kleinstteile und Filtertechnik. Die konkrete Werkzeugauslegung richtet sich nach Bauteil, Werkstoff und den projektspezifischen Prüfanforderungen." },
      { q: "Kann Schreck Medizinwerkzeuge im eigenen Haus abmustern?", a: "Ja. Schreck mustert hergestellte Formen auf eigenen Spritzgießmaschinen ab. Für 2-Komponenten-Anwendungen nennt der Maschinenpark eine ENGEL ES 200 mit 80 Tonnen Schließkraft." },
      { q: "Welche Angaben helfen bei einer Anfrage?", a: "Hilfreich sind Zeichnung oder Muster, Bauteilfunktion, vorgesehener Werkstoff, Zielstückzahl, relevante Maße und Oberflächen sowie Prüf- und Dokumentationsanforderungen. Schreck prüft die Eignung projektbezogen." }
    ]
  },
  {
    title: "Labortechnik",
    slug: "labortechnik",
    eyebrow: "Formen für Labor- und Filteranwendungen",
    intro: "Schreck fertigt Spritzgusswerkzeuge für Pipetten, Küvetten, PCR-Gefäße, Filtertechnik und Verbindungselemente in Laboranwendungen.",
    overview: "Bei Laborbauteilen stehen laut Unternehmensdokumentation reproduzierbare Qualität, schnelle Zyklen, balancierte Fließwege, austauschbare Ersatzteile, Partikelfreiheit und eine wartungsarme Auslegung im Mittelpunkt. Die Anforderungen werden für das konkrete Bauteil priorisiert.",
    image: "/images/grafik_labor_3.png",
    keywords: ["Spritzgusswerkzeuge Labortechnik", "PCR-Gefäße Formenbau", "Labor Kunststoffteile"],
    requirements: ["Reproduzierbare Qualität", "Schneller Zyklus", "Abfallfreie Produktion", "Balancierte Fließwege", "Austauschbare Ersatzteile", "Partikelfreiheit", "Wartungsarme Auslegung"],
    examples: ["Pipetten", "Küvetten", "Verbindungselemente", "PCR-Gefäße", "Filtertechnik"],
    faqs: [
      { q: "Für welche Laborprodukte baut Schreck Formen?", a: "Schreck nennt Pipetten, Küvetten, Verbindungselemente, PCR-Gefäße und Filtertechnik als belegte Anwendungen. Daraus wird das Werkzeugkonzept passend zur Geometrie und zum geplanten Spritzgießprozess entwickelt." },
      { q: "Welche Anforderungen werden bei Laborformen berücksichtigt?", a: "Genannt werden unter anderem reproduzierbare Qualität, balancierte Fließwege, Partikelfreiheit, austauschbare Ersatzteile und eine wartungsarme Auslegung. Welche Ziele erreichbar und nachzuweisen sind, wird im Projekt festgelegt." },
      { q: "Kann Schreck das fertige Laborwerkzeug abmustern?", a: "Ja. Die Abmusterung hergestellter Formen auf eigenen Spritzgießmaschinen gehört zum belegten Leistungsumfang. Ergebnisse können anschließend vermessen, bewertet und zur Werkzeugoptimierung genutzt werden." }
    ]
  },
  {
    title: "Verpackung & Kosmetik",
    slug: "verpackung-kosmetik",
    eyebrow: "Werkzeuge für Verschlüsse, Schraubkappen und Inlays",
    intro: "Schreck entwickelt und fertigt Formen für Verschlusstechnik, Schraubkappen und Inlays; Verpackung und Kosmetik gehören zu den genannten Anwendungsbereichen.",
    overview: "Für Verpackungsformen werden Voll-Heißkanal-Lösungen, reproduzierbare Qualität, abfallfreie Produktion, austauschbare Ersatzteile, schnelle Zyklen und eine wartungsarme Auslegung als Anforderungen genannt. Konkrete Kosmetikanwendungen werden erst nach Projektprüfung beschrieben.",
    image: "/images/grafik_verpackung_4.png",
    keywords: ["Formenbau Verpackung", "Spritzgusswerkzeuge Schraubkappen", "Kosmetikverpackung Werkzeugbau"],
    requirements: ["Voll-Heißkanal-Lösungen", "Reproduzierbare Qualität", "Abfallfreie Produktion", "Austauschbare Ersatzteile", "Schneller Zyklus", "Wartungsarme Auslegung"],
    examples: ["Verschlusstechnik", "Schraubkappen", "Inlays"],
    faqs: [
      { q: "Welche Verpackungsanwendungen sind bei Schreck belegt?", a: "Belegt sind Formen für Verschlusstechnik, Schraubkappen und Inlays. Kosmetik wird als Anwendungsbereich genannt; die konkrete Eignung eines Kosmetikbauteils prüft Schreck anhand der Projektunterlagen." },
      { q: "Welche Formanforderungen nennt Schreck für Verpackungen?", a: "Genannt werden Voll-Heißkanal-Lösungen, reproduzierbare Qualität, abfallfreie Produktion, schnelle Zyklen, austauschbare Ersatzteile und eine wartungsarme Auslegung. Diese Punkte sind Projektziele, keine pauschale Garantie." },
      { q: "Wie beginnt eine Anfrage für ein Verpackungswerkzeug?", a: "Eine Anfrage kann mit Zeichnung, Muster oder vorhandenen CAD-Daten beginnen. Angaben zu Material, Stückzahl, Oberfläche, Anspritzung und geplantem Serienstart helfen bei der ersten technischen Einordnung." }
    ]
  },
  {
    title: "Innenanspritzung",
    slug: "innenanspritzung",
    eyebrow: "Werkzeugkonzepte für Verschlusstechnik",
    intro: "Schreck entwickelt Werkzeugkonzepte für Innenanspritzung in der Verschlusstechnik mit Anforderungen an Oberflächengüte, Maßqualität und balancierte Fließwege.",
    overview: "Bei der Innenanspritzung liegen Anspritzpunkt und Werkzeugfunktion im Inneren des Bauteils. Die belegte Unternehmensdarstellung nennt hohe Oberflächengüte, reproduzierbare Maßqualität, schnelle Zyklen, abfallfreie Produktion und balancierte Fließwege als Formanforderungen.",
    image: "/images/grafik_innen1_6.png",
    keywords: ["Innenanspritzung", "Werkzeugbau Verschlusstechnik", "Spritzgusswerkzeug Innenkontur"],
    requirements: ["Hohe Oberflächengüte", "Reproduzierbare Maßqualität", "Schneller Zyklus", "Abfallfreie Produktion", "Balancierte Fließwege"],
    examples: ["Verschlusstechnik"],
    faqs: [
      { q: "Für welche Anwendung nennt Schreck Innenanspritzung?", a: "Schreck nennt Verschlusstechnik als belegte Anwendung der Innenanspritzung. Weitere Einsatzmöglichkeiten werden erst nach Prüfung des konkreten Bauteils beschrieben." },
      { q: "Welche Ziele gelten für ein Innenanspritzungswerkzeug?", a: "Als Formanforderungen werden hohe Oberflächengüte, reproduzierbare Maßqualität, schnelle Zyklen, abfallfreie Produktion und balancierte Fließwege genannt. Die technische Auslegung hängt von Geometrie und Serienprozess ab." },
      { q: "Welche Unterlagen braucht Schreck für die Prüfung?", a: "Zeichnung oder Muster, Bauteilfunktion, Werkstoff, Oberflächenanforderung und Angaben zum geplanten Prozess sind eine gute Grundlage. Schreck erstellt Angebote und Konstruktionen nach Zeichnungen oder Mustern." }
    ]
  },
  {
    title: "Mehrkomponentenwerkzeuge",
    slug: "mehrkomponentenwerkzeuge",
    eyebrow: "Formen für zwei und mehr Komponenten",
    intro: "Schreck fertigt Mehrkomponentenwerkzeuge für Anwendungen wie Dreiwegehähne, Funkschlüssel, Mobilfunkzubehör, Waschmaschinen-Dichtringe und Kleinstteile.",
    overview: "Mehrkomponentenwerkzeuge verbinden mehrere Komponenten in einem Werkzeugkonzept. Als Anforderungen nennt Schreck Voll- und Teilheißkanallösungen, reproduzierbare Qualität, abfallfreie Produktion, austauschbare Ersatzteile, schnelle Zyklen, wartungsarme Auslegung und lange Lebensdauer.",
    image: "/images/grafik_2k_3.png",
    keywords: ["Mehrkomponentenwerkzeuge", "2K Spritzguss Werkzeugbau", "Mehrkomponenten Spritzguss"],
    requirements: ["Voll- und Teilheißkanallösungen", "Reproduzierbare Qualität", "Abfallfreie Produktion", "Austauschbare Ersatzteile", "Schneller Zyklus", "Wartungsarme Auslegung", "Lange Lebensdauer"],
    examples: ["Dreiwegehahn", "Funkschlüssel", "Mobilfunkzubehör", "Waschmaschinen-Dichtring", "Kleinstteile"],
    faqs: [
      { q: "Welche Mehrkomponenten-Anwendungen sind belegt?", a: "Schreck nennt Dreiwegehähne, Funkschlüssel, Mobilfunkzubehör, Waschmaschinen-Dichtringe und Kleinstteile. Das konkrete 2K- oder Mehrkomponentenkonzept wird auf das Bauteil abgestimmt." },
      { q: "Kann Schreck ein 2K-Werkzeug abmustern?", a: "Ja, im dokumentierten Maschinenpark steht eine ENGEL ES 200 für 2-Komponenten-Anwendungen mit 80 Tonnen Schließkraft. Werkzeuggröße, Gewicht und Eignung werden projektbezogen geprüft." },
      { q: "Welche Informationen sind bei 2K-Anfragen wichtig?", a: "Hilfreich sind Bauteildaten, Funktion der Komponenten, vorgesehene Werkstoffe, Stückzahl, Qualitätsanforderungen und das geplante Maschinenumfeld. Nicht bestätigte Materialkombinationen werden nicht pauschal zugesagt." }
    ]
  },
  {
    title: "Kleinstteile",
    slug: "kleinstteile",
    eyebrow: "Formen für kleine technische Kunststoffteile",
    intro: "Schreck fertigt Kleinstartikelformen für Funktionsteile, optische Gehäuse, Verriegelungen, Metallumspritzungen sowie Rollen und Zahnräder.",
    overview: "Bei kleinen technischen Bauteilen nennt Schreck reproduzierbare Qualität, austauschbare Ersatzteile, schnelle Zyklen, wartungsarme Auslegung, lange Lebensdauer, optimale Entlüftung und Reinraumtauglichkeit als Formanforderungen. Reinraumtauglichkeit bezieht sich auf die Form, nicht auf eine Reinraumproduktion bei Schreck.",
    image: "/images/grafik_kleinstteile_1.png",
    keywords: ["Kleinstartikelformen", "Kleinstteile Spritzguss", "Präzisionsformen Kunststoff"],
    requirements: ["Reproduzierbare Qualität", "Austauschbare Ersatzteile", "Schneller Zyklus", "Wartungsarme Auslegung", "Lange Lebensdauer", "Optimale Entlüftung", "Reinraumtaugliche Form"],
    examples: ["Optik und Verriegelung", "Verriegelungspin", "Künstliche Pupille (zwei Komponenten)", "Metallumspritzung", "Rollen und Zahnräder", "Funktionsteile", "Wippe (zwei Komponenten)", "Optische Gehäuse", "Verriegelungsgehäuse", "Clip"],
    faqs: [
      { q: "Welche Kleinstteil-Anwendungen nennt Schreck?", a: "Genannt werden unter anderem Verriegelungspins, künstliche Pupillen als Zwei-Komponenten-Teil, Metallumspritzungen, Rollen und Zahnräder, Funktionsteile, optische Gehäuse und Clips." },
      { q: "Was bedeutet reinraumtauglich auf dieser Seite?", a: "Reinraumtauglichkeit ist als Anforderung an die Form dokumentiert. Daraus folgt keine Aussage, dass Schreck selbst eine Reinraumproduktion betreibt." },
      { q: "Welche Anforderungen sind bei Kleinstteilformen wichtig?", a: "Schreck nennt reproduzierbare Qualität, optimale Entlüftung, austauschbare Ersatzteile, schnelle Zyklen, lange Lebensdauer und wartungsarme Auslegung. Die Prioritäten werden für das konkrete Bauteil festgelegt." }
    ]
  }
];

export const capabilities = [
  "Konzeptionierung",
  "Konstruktion",
  "Entwicklung",
  "Abmusterung",
  "Vermessung",
  "Optimierung",
  "Dokumentation",
  "Reparatur",
  "Schulung vor Ort"
];

export const industries = [
  "Medizintechnik",
  "Labortechnik",
  "Verpackung & Kosmetik",
  "Filtertechnik",
  "Automotive",
  "Elektronik"
];

export const stats = [
  { value: "40+", label: "Jahre Erfahrung" },
  { value: "1000+", label: "Formen bis zur Serienreife" },
  { value: "30+", label: "ausgebildete Lehrlinge" },
  { value: "14", label: "Mitarbeiter im Team" }
];
