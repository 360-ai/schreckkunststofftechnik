import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { products } from "@data/site";

const staticPages = [
  "",
  "produkte/",
  "kompetenzen/",
  "ueber-uns/",
  "karriere/",
  "kontakt/",
  "impressum/"
];

export const GET: APIRoute = async ({ site }) => {
  const productPages = products.map((product) => `produkte/${product.slug}/`);
  const jobPages = (await getCollection("jobs"))
    .filter((job) => job.data.active)
    .map((job) => `karriere/${job.id.replace(/\.mdx?$/, "")}/`);
  const pages = [...staticPages, ...productPages, ...jobPages];
  const lastmod = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${new URL(page, site).toString()}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
