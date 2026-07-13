import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const staticPages: { path: string; priority: string; changefreq: string }[] = [
  { path: "",               priority: "1.0", changefreq: "weekly" },
  { path: "produkte/",      priority: "0.9", changefreq: "monthly" },
  { path: "ueber-uns/",     priority: "0.7", changefreq: "monthly" },
  { path: "karriere/",      priority: "0.8", changefreq: "weekly" },
  { path: "kontakt/",       priority: "0.8", changefreq: "monthly" },
  // downloads/ ist noindex — gehoert nicht in die Sitemap
  // datenschutz/ ist noindex — gehoert nicht in die Sitemap
  { path: "impressum/",     priority: "0.3", changefreq: "yearly" },
];

export const GET: APIRoute = async ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const jobEntries = (await getCollection("jobs"))
    .filter((job) => job.data.active)
    .map((job) => ({
      path: `karriere/${job.id.replace(/\.mdx?$/, "")}/`,
      priority: "0.7",
      changefreq: "weekly"
    }));
  const allPages = [...staticPages, ...jobEntries];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(({ path, priority, changefreq }) =>
  `  <url><loc>${new URL(path, site).toString()}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
).join("\n")}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
