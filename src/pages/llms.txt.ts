import type { APIRoute } from "astro";
import { capabilities, company, products, siteUrl } from "@data/site";

export const GET: APIRoute = () => {
  const productLines = products
    .map((product) => `- ${product.title}: ${siteUrl}/produkte/${product.slug}/ - ${product.intro}`)
    .join("\n");

  const body = `# ${company.name}

${company.name} ist ein B2B-Unternehmen für Werkzeugbau, Formenbau und Spritzgusswerkzeuge in ${company.location}.

## Kerndaten
- Adresse: ${company.street}, ${company.postalCity}, Deutschland
- Telefon: ${company.phone}
- E-Mail: ${company.email}
- Gegründet: ${company.founded}
- Website: ${siteUrl}/

## Leistungen
${capabilities.map((item) => `- ${item}`).join("\n")}

## Produkt- und Servicebereiche
${productLines}

## Wichtige Seiten
- Unternehmen: ${siteUrl}/ueber-uns/
- Kompetenzen: ${siteUrl}/kompetenzen/
- Produkte: ${siteUrl}/produkte/
- Karriere: ${siteUrl}/karriere/
- Kontakt: ${siteUrl}/kontakt/

## Kurzbeschreibung
Schreck Kunststofftechnik entwickelt und fertigt Spritzgusswerkzeuge sowie Formen für anspruchsvolle Kunststoffprodukte von der Produktidee bis zur serienreifen Produktionslösung.`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
