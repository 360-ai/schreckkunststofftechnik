import type { APIRoute } from "astro";
import { capabilities, company, products, siteUrl } from "@data/site";

export const GET: APIRoute = () => {
  const productLines = products
    .map((product) => `- ${product.title}: ${siteUrl}/produkte/${product.slug}/ - ${product.intro}`)
    .join("\n");

  const body = `# ${company.name}

${company.name} ist ein Werkzeug- und Formenbauer in ${company.location}. Das Unternehmen entwickelt und fertigt Formen für Kunststoffverarbeitung sowie Aluminium- und Zink-Druckguss.

## Verifizierte Kerndaten
- Adresse: ${company.street}, ${company.postalCity}, Deutschland
- Telefon: ${company.phone}
- E-Mail: ${company.email}
- Gegründet: 01.01.${company.founded}
- Team: 14 Mitarbeiter
- Erfahrung: mehr als 1.000 Formen bis zur Serienreife; mehr als 30 ausgebildete Lehrlinge
- Website: ${siteUrl}/

## Zertifizierung
- Norm: DIN EN ISO 9001:2015
- Geltungsbereich: Formenbau von der Konstruktion bis zur Serienreife
- Zertifikat: 000854.Q/24.R, gültig 28.06.2024 bis 27.06.2027
- Seite: ${siteUrl}/qualitaet-zertifizierung/

## Leistungen
${capabilities.map((item) => `- ${item}`).join("\n")}

## Produkt- und Anwendungsbereiche
${productLines}

## Wichtige Seiten
- Produkte: ${siteUrl}/produkte/
- Kompetenzen und Projektablauf: ${siteUrl}/kompetenzen/
- Qualität und Zertifizierung: ${siteUrl}/qualitaet-zertifizierung/
- Maschinen und Ausstattung (dokumentierter Stand 01/2024): ${siteUrl}/maschinen-ausstattung/
- Unternehmen: ${siteUrl}/ueber-uns/
- Karriere: ${siteUrl}/karriere/
- Kontakt und Projektanfrage: ${siteUrl}/kontakt/

## Kontakt für Projektanfragen
Angebote und Konstruktionen können auf Grundlage von Zeichnungen oder Mustern erstellt werden. Für eine erste Einordnung helfen außerdem Bauteilfunktion, Werkstoff, Zielstückzahl, Maße, Oberflächen-, Prüf- und Dokumentationsanforderungen.`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
