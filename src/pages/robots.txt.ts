import type { APIRoute } from "astro";

export const GET: APIRoute = () =>
  new Response(
`User-agent: *
Allow: /
Allow: /llms.txt
Disallow: /cdn-cgi/

Sitemap: https://www.schreck-kunststofftechnik.de/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
