// Einzige Inhaltsquelle der Website (PLAN-WEBSITE-FABLE.md, Abschnitt 13).
// Keine hartcodierten Texte in Komponenten. Einträge mit draft: true werden NIE gerendert.
// Faktenbasis: Plan Abschnitt 2 und 8; Impressums- und Maschinendaten aus dem ersten
// Projekt (Projekte/Website/src/data/site.ts, dokumentierte Übernahme).

export const siteUrl = 'https://www.schreck-kunststofftechnik.de';

export const company = {
  name: 'Schreck Kunststofftechnik GmbH',
  shortName: 'SKT',
  street: 'Wolkersdorfer Straße 28',
  zip: '35099',
  city: 'Burgwald-Bottendorf',
  region: 'Hessen',
  country: 'DE',
  phoneDisplay: '+49 6451 5000-0',
  phoneLink: 'tel:+49645150000',
  faxDisplay: '+49 6451 5000-10',
  email: 'info@schreck-kunststofftechnik.com',
  founded: '1984',
  employees: '14', // [Prüfdatum: Unterlagen 2026, vor Go-Live mit SKT bestätigen, siehe OFFENE-FRAGEN.md]
  geo: { latitude: 51.017, longitude: 8.832 },
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Schreck+Kunststofftechnik+Wolkersdorfer+Str.+28+35099+Burgwald',
};

export const legal = {
  managingDirectors: ['Maximilian Grebe', 'Roman Manz'],
  register: 'Amtsgericht Marburg/Lahn, Handelsregister HRB 3981',
  vatId: 'DE 113086891',
};

export const certificate = {
  norm: 'DIN EN ISO 9001:2015',
  scope: 'Formenbau von der Konstruktion bis zur Serienreife',
  number: '000854.Q/24.R',
  validFrom: '28.06.2024',
  validTo: '27.06.2027',
  authority: 'SKZ-Cert GmbH',
  pdf: '/downloads/iso-9001-zertifikat-2024-2027.pdf',
};

export const industries = [
  'Medizin',
  'Labor',
  'Kosmetik',
  'Verpackung',
  'Filtertechnik',
  'Automobil',
  'Elektronik',
];

export const nav = [
  { label: 'Produkte', href: '/produkte/' },
  { label: 'Über uns', href: '/ueber-uns/' },
  { label: 'Karriere', href: '/karriere/' },
  { label: 'Downloads', href: '/downloads/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const hero = {
  // \n = fester Umbruch (Hero rendert mit white-space: pre-line)
  h1: 'Präzisionsformen\nfür Kunststoffteile',
  subline:
    'Von der Produktidee bis zur Serienreife. Schreck entwickelt, fertigt und optimiert Formen für Medizin, Labor, Verpackung und technische Kleinteile.',
  badges: ['Seit 1984', 'ISO 9001:2015 zertifiziert', 'Von der Idee bis zur Serienreife'],
  image: '/images/hero-werkzeug.webp',
  imageMobile: '/images/hero-werkzeug-mobil.webp',
  imageAlt: 'Geöffnetes Spritzgusswerkzeug mit zwei Formhälften und Auswerferstiften',
};

export const trustStrip = [
  { value: 'Seit 1984', label: 'Formenbau aus Hessen' },
  { value: '1.000+', label: 'Formen bis zur Serienreife' },
  { value: 'ISO 9001', label: 'zertifiziert bis Juni 2027' },
  { value: 'Alles im Blick', label: 'von Konstruktion bis Abmusterung' },
];

export const processIntro =
  'Sieben Schritte, von der Konzeptionierung bis zur Dokumentation: Ihre Form bleibt durchgehend in einer Hand.';

// Die 7 Leistungsschritte aus den Flyern (identischer Wortlaut in allen sechs PDFs).
export const processSteps = [
  {
    title: 'Konzeptionierung',
    text: 'Aus Ihren Zeichnungen, Mustern oder Vorgaben entsteht das Werkzeugkonzept.',
  },
  {
    title: 'Konstruktion',
    text: 'Die Form wird im CAD konstruiert, inklusive Auslegung der Fließwege und Ersatzteile.',
  },
  {
    title: 'Entwicklung',
    text: 'Die Werkzeugkomponenten werden gefertigt und zur einbaufertigen Form montiert.',
  },
  {
    title: 'Abmusterung',
    text: 'Die fertige Form wird auf eigenen Spritzgießmaschinen abgemustert.',
  },
  {
    title: 'Vermessung',
    text: 'Musterteile werden vermessen, die Ergebnisse fließen in die Bewertung ein.',
  },
  {
    title: 'Optimierung',
    text: 'Erkenntnisse aus Abmusterung und Vermessung führen zur optimierten Serienform.',
  },
  {
    title: 'Dokumentation',
    text: 'Sie erhalten die Dokumentation des Werkzeugs zur Serienfreigabe.',
  },
];

export interface ProductGroup {
  id: string;
  title: string;
  cardTitle: string;
  cardText: string;
  pills: string[];
  intro: string[];
  demands: string[];
  examples: string[];
  examplesLabel: string;
  cardImage: { src: string; width: number; height: number };
  images: { src: string; alt: string; width: number; height: number }[];
  pdf: { href: string; label: string };
  note?: string;
}

export const productGroups: ProductGroup[] = [
  {
    id: 'mehrkomponenten',
    title: 'Mehr-Komponenten-Formen',
    cardTitle: 'Mehr-Komponenten-Formen',
    cardText:
      'Formen, die zwei oder mehr Komponenten in einem Werkzeug verbinden. Ausgelegt auf schnelle Zyklen und abfallfreie Produktion.',
    pills: ['Dreiwegehahn', 'Funkschlüssel', 'Einstellrad'],
    intro: [
      'Mehr-Komponenten-Formen verbinden zwei oder mehr Kunststoffkomponenten in einem Werkzeug. SKT legt diese Formen auf reproduzierbare Qualität und abfallfreie Produktion aus.',
      'Belegte Produktbeispiele aus dem Prospekt: Dreiwegehahn, Funkschlüssel und Air-Condition-Einstellrad.',
    ],
    demands: [
      'Reproduzierbare Qualität',
      'Abfallfreie Produktion',
      'Austauschbare Ersatzteile',
      'Schneller Zyklus',
      'Wartungsarme Auslegung',
      'Lange Lebensdauer',
    ],
    examplesLabel: 'Produktbeispiele',
    examples: ['Dreiwegehahn', 'Funkschlüssel', 'Air-Condition-Einstellrad'],
    cardImage: { src: '/images/produkt-2k-1.webp', width: 900, height: 580 },
    images: [
      { src: '/images/produkt-2k-1.webp', alt: 'Mehr-Komponenten-Spritzgusswerkzeug von SKT', width: 900, height: 580 },
      { src: '/images/produkt-2k-2.webp', alt: 'Zwei-Komponenten-Kunststoffteil aus einer SKT-Form', width: 273, height: 168 },
    ],
    pdf: { href: '/downloads/skt-flyer-mehrkomponenten.pdf', label: 'Prospekt Mehr-Komponenten-Formen' },
  },
  {
    id: 'innenanspritzung',
    title: 'Innenanspritzung',
    cardTitle: 'Innenanspritzung',
    cardText:
      'Werkzeuge für Produkte ohne sichtbare Anspritzpunkte. Der Anspritzpunkt liegt im Inneren des Bauteils.',
    pills: ['Verschlusstechnik'],
    intro: [
      'Bei der Innenanspritzung liegt der Anspritzpunkt im Inneren des Bauteils. Das Ergebnis sind Produkte ohne sichtbare Anspritzpunkte.',
      'Belegte Anwendung aus dem Prospekt ist die Verschlusstechnik.',
    ],
    demands: [
      'Höchste Oberflächengüte',
      'Reproduzierbare Maßqualität',
      'Schneller Zyklus',
      'Abfallfreie Produktion',
      'Balancierte Fließwege',
    ],
    examplesLabel: 'Anwendung',
    examples: ['Verschlusstechnik'],
    cardImage: { src: '/images/produkt-innenanspritzung-5.webp', width: 900, height: 541 },
    images: [
      { src: '/images/produkt-innenanspritzung-5.webp', alt: 'Werkzeug für Innenanspritzung in der Verschlusstechnik', width: 900, height: 541 },
      { src: '/images/produkt-innenanspritzung-4.webp', alt: 'Kunststoffverschluss ohne sichtbaren Anspritzpunkt', width: 900, height: 410 },
    ],
    pdf: { href: '/downloads/skt-flyer-innenanspritzung.pdf', label: 'Prospekt Innenanspritzung' },
  },
  {
    id: 'labor',
    title: 'Formen für die Labortechnik',
    cardTitle: 'Labor',
    cardText:
      'Formen für Pipetten, Küvetten, PCR-Gefäße und Filtertechnik. Mit Anforderungen an Partikelfreiheit und balancierte Fließwege.',
    pills: ['Pipetten', 'PCR-Gefäße', 'Küvetten'],
    intro: [
      'Für die Labortechnik fertigt SKT Formen für Pipetten, Küvetten, Verbindungselemente, PCR-Gefäße und Filtertechnik.',
      'Der Prospekt nennt Partikelfreiheit und balancierte Fließwege als zentrale Ansprüche an diese Formen.',
    ],
    demands: [
      'Reproduzierbare Qualität',
      'Schneller Zyklus',
      'Abfallfreie Produktion',
      'Balancierte Fließwege',
      'Austauschbare Ersatzteile',
      'Partikelfreiheit',
      'Wartungsarme Auslegung',
    ],
    examplesLabel: 'Produkte',
    examples: ['Pipetten', 'Küvetten', 'Verbindungselemente', 'PCR-Gefäße', 'Filtertechnik'],
    cardImage: { src: '/images/produkt-labor-1.webp', width: 900, height: 677 },
    images: [
      { src: '/images/produkt-labor-1.webp', alt: 'Spritzgusswerkzeug für Laborartikel wie Pipetten und PCR-Gefäße', width: 900, height: 677 },
    ],
    pdf: { href: '/downloads/skt-flyer-labor.pdf', label: 'Prospekt Labor' },
  },
  {
    id: 'medizin',
    title: 'Formen für die Medizintechnik',
    cardTitle: 'Medizin',
    cardText:
      'Formen für Einmalspritzen, Schutzkappen und Kleinstteile. Partikelfreiheit und lange Lebensdauer sind dokumentierte Ansprüche.',
    pills: ['Einmalspritzen', 'Schutzkappen', 'Kleinstteile'],
    intro: [
      'Für die Medizintechnik fertigt SKT Formen für Einmalspritzen, Adaptionen, Schutzkappen, Verbindungselemente und Kleinstteile.',
      'Partikelfreiheit, austauschbare Ersatzteile und lange Lebensdauer sind die im Prospekt dokumentierten Ansprüche an diese Formen.',
    ],
    demands: [
      'Reproduzierbare Qualität',
      'Abfallfreie Produktion',
      'Lange Lebensdauer',
      'Austauschbare Ersatzteile',
      'Partikelfreiheit',
      'Wartungsarme Auslegung',
    ],
    examplesLabel: 'Produkte',
    examples: ['Einmalspritzen', 'Adaption', 'Schutzkappen', 'Verbindungselemente', 'Kleinstteile'],
    cardImage: { src: '/images/produkt-medizin-2.webp', width: 796, height: 1024 },
    images: [
      { src: '/images/produkt-medizin-2.webp', alt: 'Spritzgusswerkzeug für medizinische Kunststoffteile', width: 796, height: 1024 },
      { src: '/images/produkt-medizin-1.webp', alt: 'Medizinische Kunststoffteile aus SKT-Formen', width: 260, height: 273 },
    ],
    pdf: { href: '/downloads/skt-flyer-medizin.pdf', label: 'Prospekt Medizin' },
  },
  {
    id: 'miniaturteile',
    title: 'Kleinstartikel-Formen',
    cardTitle: 'Miniaturteile',
    cardText:
      'Formen für Kleinstartikel wie Verriegelungspins, Zahnräder und optische Gehäuse. Auch als Metallumspritzung und in zwei Komponenten.',
    pills: ['Zahnräder', 'Metallumspritzung', 'Optische Gehäuse'],
    intro: [
      'Kleinstartikel-Formen fertigen Bauteile, deren Größe im Prospekt mit einem Streichholz verglichen wird. Reinraumtauglichkeit und optimale Entlüftung gehören zu den dokumentierten Ansprüchen.',
      'Zu den belegten Artikeln zählen Lichtwellenleiter-Stecker (im Prospekt: Optik und Verriegelung), eine künstliche Pupille aus zwei Komponenten und Metallumspritzungen.',
    ],
    demands: [
      'Reproduzierbare Qualität',
      'Austauschbare Ersatzteile',
      'Schneller Zyklus',
      'Wartungsarme Auslegung',
      'Lange Lebensdauer',
      'Optimale Entlüftung',
      'Reinraumtaugliche Form',
    ],
    examplesLabel: 'Artikel',
    examples: [
      'Optik und Verriegelung (Lichtwellenleiter-Stecker)',
      'Verriegelungspin',
      'Künstliche Pupille (zwei Komponenten)',
      'Metallumspritzung',
      'Rollen und Zahnräder',
      'Funktionsteile',
      'Wippe (zwei Komponenten)',
      'Optische Gehäuse',
      'Verriegelungsgehäuse',
      'Clip',
    ],
    cardImage: { src: '/images/produkt-miniaturteile-1.webp', width: 283, height: 160 },
    images: [
      { src: '/images/produkt-miniaturteile-1.webp', alt: 'Kleinstartikel aus Kunststoff im Größenvergleich mit einem Streichholz', width: 283, height: 160 },
      { src: '/images/produkt-miniaturteile-2.webp', alt: 'Miniaturteile aus SKT-Kleinstartikelformen', width: 227, height: 133 },
    ],
    pdf: { href: '/downloads/skt-flyer-miniaturteile.pdf', label: 'Prospekt Miniaturteile' },
  },
  {
    id: 'verpackung',
    title: 'Formen für die Verpackungstechnik',
    cardTitle: 'Verpackung',
    cardText:
      'Formen für Verschlusstechnik, Schraubkappen und Inlays. Ausgelegt auf schnelle Zyklen und wartungsarmen Betrieb.',
    pills: ['Verschlusstechnik', 'Schraubkappen', 'Inlays'],
    intro: [
      'Für die Verpackungstechnik fertigt SKT Formen für Verschlusstechnik, Schraubkappen und Inlays.',
      'Schnelle Zyklen, abfallfreie Produktion und wartungsarme Auslegung sind die im Prospekt dokumentierten Ansprüche.',
    ],
    demands: [
      'Reproduzierbare Qualität',
      'Abfallfreie Produktion',
      'Austauschbare Ersatzteile',
      'Schneller Zyklus',
      'Wartungsarme Auslegung',
    ],
    examplesLabel: 'Produkte',
    examples: ['Verschlusstechnik', 'Schraubkappen', 'Inlays'],
    cardImage: { src: '/images/produkt-verpackung-1.webp', width: 250, height: 166 },
    images: [
      { src: '/images/produkt-verpackung-1.webp', alt: 'Schraubkappen und Verschlüsse aus SKT-Formen', width: 250, height: 166 },
    ],
    pdf: { href: '/downloads/skt-flyer-verpackung.pdf', label: 'Prospekt Verpackung' },
  },
];

// Reparatur und Schulung vor Ort: belegt über den Leistungskatalog aus Projekt 1
// (capabilities: "Reparatur", "Schulung vor Ort") und das Formular-Anliegen.
export const services = {
  heading: 'Reparatur & Schulung',
  intro: 'Zwei Leistungen, die nach der Serienfreigabe weiterlaufen.',
  items: [
    {
      title: 'Reparatur und Ersatzteile',
      text: 'SKT repariert Spritzgusswerkzeuge und fertigt austauschbare Ersatzteile. Senden Sie Ihre Anfrage mit dem Anliegen Ersatzteile oder Reparatur, gern mit Fotos der Form.',
      image: { src: '/images/reparatur.webp', alt: 'Reparatur eines Spritzgusswerkzeugs bei SKT', width: 1133, height: 944 },
      cta: { label: 'Reparatur anfragen', href: '/#anfrage' },
    },
    {
      title: 'Schulung vor Ort',
      text: 'SKT schult Ihr Team im Umgang mit der Form, vor Ort in Ihrer Produktion. Termin und Umfang stimmen Sie direkt mit uns ab.',
      image: { src: '/images/einweisung.webp', alt: 'Einweisung an der Maschine durch SKT', width: 1200, height: 693 },
      cta: { label: 'Schulung anfragen', href: '/#anfrage' },
    },
  ],
};

export const aboutTeaser = {
  heading: 'Formenbau aus Burgwald-Bottendorf',
  paragraphs: [
    'Die Schreck Kunststofftechnik GmbH fertigt seit 1984 Spritzgusswerkzeuge für Micro-Kunststoffartikel. 14 Mitarbeiter begleiten Ihre Form von der Konstruktion bis zur Serienreife.',
    'Das Qualitätsmanagement ist nach DIN EN ISO 9001:2015 zertifiziert. Kunden kommen aus sieben Branchen, von der Medizin bis zur Elektronik.',
  ],
  image: { src: '/images/luftbild-skt.webp', alt: 'Luftaufnahme des SKT-Firmengebäudes in Burgwald-Bottendorf', width: 1451, height: 1084 },
};

export const careerTeaser = {
  heading: 'Arbeiten bei SKT',
  text: 'SKT fertigt mit 14 Mitarbeitern Spritzgusswerkzeuge in Burgwald-Bottendorf. Initiativbewerbungen sind jederzeit willkommen.',
};

export const finalCta = {
  heading: 'Projekt besprechen?',
  text: 'Senden Sie Ihre Anfrage mit Zeichnung oder CAD-Daten, rufen Sie an oder schreiben Sie eine E-Mail.',
};

// Multi-Step-Formular (Plan Abschnitt 7)
export const inquiryForm = {
  heading: 'Projekt anfragen',
  intro: 'In drei Schritten zu Ihrer Anfrage. Mit Datei-Upload für Zeichnungen und CAD-Daten.',
  topics: ['Neuwerkzeugbau', 'Spritzgussteile', 'Ersatzteile oder Reparatur', 'Sonstiges'],
  upload: {
    accept: '.pdf,.step,.stp,.igs,.iges,.dxf,.dwg,.png,.jpg,.jpeg,.zip',
    maxFiles: 3,
    maxTotalMb: 10,
  },
  privacyNote:
    'Ihre Angaben werden zur Bearbeitung der Anfrage per E-Mail an SKT übermittelt. Details in der',
};

export interface Job {
  slug: string;
  titel: string;
  umfang: string;
  aufgaben: string[];
  profil: string[];
  benefits: string[];
  ansprechpartner: string;
  draft: boolean;
}

// draft: true wird NIE gerendert. Echte Stellentexte liefert Denis nach (AP-1).
export const jobs: Job[] = [
  {
    slug: 'platzhalter-stelle',
    titel: '[KLÄREN: Titel aus stellenanzeige.png, Datei ist AVIF und muss konvertiert werden]',
    umfang: 'Vollzeit',
    aufgaben: [],
    profil: [],
    benefits: [],
    ansprechpartner: 'info@schreck-kunststofftechnik.com',
    draft: true,
  },
];

export const career = {
  intro: [
    'SKT fertigt seit 1984 Spritzgusswerkzeuge für Micro-Kunststoffartikel in Burgwald-Bottendorf. Das Team besteht aus 14 Mitarbeitern.',
    'Sie arbeiten am kompletten Werkzeug: von der Konstruktion über die Fertigung bis zur Abmusterung auf eigenen Spritzgießmaschinen.',
  ],
  initiative: {
    heading: 'Initiativbewerbung',
    text: 'Auch ohne passende Ausschreibung lohnt sich Ihre Bewerbung. Senden Sie Lebenslauf und ein kurzes Anschreiben per E-Mail.',
    mailSubject: 'Initiativbewerbung',
  },
};

export interface DownloadItem {
  title: string;
  description: string;
  href: string;
  draft?: boolean;
}

export const downloads: DownloadItem[] = [
  { title: 'Prospekt Mehr-Komponenten-Formen', description: 'Formen für zwei und mehr Komponenten, mit Produktbeispielen.', href: '/downloads/skt-flyer-mehrkomponenten.pdf' },
  { title: 'Prospekt Innenanspritzung', description: 'Produkte ohne sichtbare Anspritzpunkte, Anwendung Verschlusstechnik.', href: '/downloads/skt-flyer-innenanspritzung.pdf' },
  { title: 'Prospekt Labor', description: 'Formen für Pipetten, Küvetten, PCR-Gefäße und Filtertechnik.', href: '/downloads/skt-flyer-labor.pdf' },
  { title: 'Prospekt Medizin', description: 'Formen für Einmalspritzen, Schutzkappen und Kleinstteile.', href: '/downloads/skt-flyer-medizin.pdf' },
  { title: 'Prospekt Miniaturteile', description: 'Kleinstartikel-Formen, vom Verriegelungspin bis zum Zahnrad.', href: '/downloads/skt-flyer-miniaturteile.pdf' },
  { title: 'Prospekt Verpackung', description: 'Formen für Verschlusstechnik, Schraubkappen und Inlays.', href: '/downloads/skt-flyer-verpackung.pdf' },
  { title: 'ISO-9001-Zertifikat', description: 'DIN EN ISO 9001:2015, ausgestellt von SKZ-Cert, gültig bis 27.06.2027.', href: '/downloads/iso-9001-zertifikat-2024-2027.pdf' },
  // AVB öffentlich ja/nein ist AP-1-Entscheidung (OFFENE-FRAGEN.md Punkt 4).
  { title: 'Allgemeine Verkaufsbedingungen', description: 'AVB der Schreck Kunststofftechnik GmbH.', href: '/downloads/allgemeine-verkaufsbedingungen.pdf', draft: true },
];

// Maschinenpark Stand 01/2024, übernommen aus Projekt 1. Rendering erst nach
// SKT-Freigabe (AP-1, OFFENE-FRAGEN.md Punkt 6).
export const machinePark = {
  draft: true,
  asOf: 'Stand 01/2024',
  areas: [
    { area: 'Fräsen', entries: ['DMU 80 Mono Block, iTNC 530, 3 Achsen', 'DMG Mori CMX 600 V, 3 Achsen', 'Deckel FP4MK', 'DMU 50 T, TNC 426, 3 Achsen'] },
    { area: 'Drehen', entries: ['Trens'] },
    { area: 'Schleifen', entries: ['Elb Flachschleifmaschine', '2 x Jung Profilschleifmaschinen', 'Moore Koordinatenschleifmaschine', 'MSO Rundschleifmaschine'] },
    { area: 'Senkerodieren', entries: ['OPS Ingersoll Gantry 400', 'OPS Ingersoll Gantry Eagle 400'] },
    { area: 'Spritzgießen', entries: ['ARBURG, 35 t', 'ENGEL ES 200, 2 Komponenten, 80 t'] },
    { area: 'Konstruktion', entries: ['3 x CAD Cimatron', '2 x CAM Cimatron'] },
    { area: 'Qualitätssicherung', entries: ['Werth Profile-Projector', 'Tesa 2-D-Messplatz Micro Hite', 'optisches Messmikroskop, 20-fach', 'Koordinatenmessgerät PIONEER'] },
  ],
};

// VideoSection rendert nur bei Einträgen. Bleibt leer, bis Videos vorliegen.
export const videos: { title: string; src: string }[] = [];

export const aboutPage = {
  paragraphs: [
    'Die Schreck Kunststofftechnik GmbH wurde 1984 in Burgwald-Bottendorf gegründet. Das Unternehmen fertigt Spritzgusswerkzeuge für Micro-Kunststoffartikel, von der Konstruktion bis zur Serienreife.',
    'Im Januar 2025 haben Roman Manz und Maximilian Grebe die Nachfolge übernommen. Sie führen die Schreck Kunststofftechnik als Gesellschafter und Geschäftsführer weiter.',
    'Heute arbeiten 14 Mitarbeiter am Standort in Burgwald-Bottendorf. Kunden kommen aus den Branchen Medizin, Labor, Kosmetik, Verpackung, Filtertechnik, Automobil und Elektronik.',
    'Jede Form durchläuft sieben Leistungsschritte: Konzeptionierung, Konstruktion, Entwicklung, Abmusterung, Vermessung, Optimierung und Dokumentation.',
  ],
  images: {
    aerial: { src: '/images/luftbild-skt.webp', alt: 'Luftaufnahme des SKT-Firmengebäudes', width: 1451, height: 1084 },
    entrance: { src: '/images/skt-eingang.webp', alt: 'Eingang der Schreck Kunststofftechnik GmbH', width: 1200, height: 900 },
    team: { src: '/images/team.webp', alt: 'Das SKT-Team am Standort Burgwald-Bottendorf', width: 800, height: 533 },
  },
};

export const seo = {
  home: {
    title: 'Formenbau für Micro-Kunststoffartikel | Schreck Kunststofftechnik GmbH',
    description:
      'Spritzgusswerkzeuge von der Konstruktion bis zur Serienreife. Seit 1984 in Burgwald-Bottendorf, ISO 9001:2015 zertifiziert. Projektanfrage mit CAD-Upload.',
  },
  produkte: {
    title: 'Produkte: Spritzgusswerkzeuge und Formenbau | Schreck Kunststofftechnik GmbH',
    description:
      'Mehr-Komponenten-Formen, Innenanspritzung, Labor, Medizin, Miniaturteile und Verpackung: sechs Produktgruppen mit Prospekten als PDF.',
  },
  ueberUns: {
    title: 'Über uns: Formenbau seit 1984 | Schreck Kunststofftechnik GmbH',
    description:
      'Die Schreck Kunststofftechnik GmbH fertigt seit 1984 Spritzgusswerkzeuge in Burgwald-Bottendorf. 14 Mitarbeiter, ISO 9001:2015 zertifiziert.',
  },
  karriere: {
    title: 'Karriere im Werkzeugbau | Schreck Kunststofftechnik GmbH',
    description:
      'Arbeiten bei SKT in Burgwald-Bottendorf: Stellenangebote und Initiativbewerbung im Formenbau für Micro-Kunststoffartikel.',
  },
  downloads: {
    title: 'Downloads: Prospekte und Zertifikat | Schreck Kunststofftechnik GmbH',
    description:
      'Sechs Produktprospekte und das ISO-9001-Zertifikat als PDF: Mehr-Komponenten-Formen, Innenanspritzung, Labor, Medizin, Miniaturteile, Verpackung.',
  },
  kontakt: {
    title: 'Kontakt und Anfahrt | Schreck Kunststofftechnik GmbH',
    description:
      'Schreck Kunststofftechnik GmbH, Wolkersdorfer Straße 28, 35099 Burgwald-Bottendorf. Telefon +49 6451 5000-0, Projektanfrage mit Datei-Upload.',
  },
  impressum: {
    title: 'Impressum | Schreck Kunststofftechnik GmbH',
    description: 'Impressum der Schreck Kunststofftechnik GmbH, Wolkersdorfer Straße 28, 35099 Burgwald-Bottendorf.',
  },
  datenschutz: {
    title: 'Datenschutzerklärung | Schreck Kunststofftechnik GmbH',
    description: 'Datenschutzerklärung der Schreck Kunststofftechnik GmbH: Hosting, Projektanfrage-Formular, Ihre Rechte.',
  },
  danke: {
    title: 'Anfrage gesendet | Schreck Kunststofftechnik GmbH',
    description: 'Ihre Projektanfrage an die Schreck Kunststofftechnik GmbH wurde übermittelt.',
  },
};
