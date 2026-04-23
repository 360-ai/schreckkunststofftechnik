import type { APIRoute } from "astro";
import { products } from "@data/site";

const staticPages = [
  "",
  "produkte/",
  "kompetenzen/",
  "ueber-uns/",
  "firmengeschichte/",
  "karriere/",
  "kontakt/",
  "downloads/",
  "impressum/",
  "datenschutz/"
];

export const GET: APIRoute = ({ site }) => {
  const productPages = products.map((product) => `produkte/${product.slug}/`);
  const pages = [...staticPages, ...productPages];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${new URL(page, site).toString()}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
