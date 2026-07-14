/// <reference types="@cloudflare/workers-types" />
// Redirect-Logik fuer die alten WordPress-URLs (?page_id=NN).
// Cloudflares statische _redirects koennen keine Query-Strings matchen (Plan 11.1),
// deshalb faengt diese Function nur die Root-Route ab. Mapping: docs/REDIRECTS.md.

const PAGE_ID_MAP: Record<string, string> = {
  '15': '/downloads/',
  '18': '/kontakt/',
  '20': '/impressum/',
  '80': '/ueber-uns/',
  '82': '/ueber-uns/',
  '85': '/ueber-uns/#zertifikat',
  '89': '/ueber-uns/',
  '97': '/produkte/#verpackung',
  '99': '/produkte/#innenanspritzung',
  '101': '/produkte/#labor',
  '103': '/produkte/#medizin',
  '105': '/produkte/#mehrkomponenten',
  '107': '/produkte/#miniaturteile',
  '249': '/produkte/',
  '297': '/downloads/',
  '338': '/datenschutz/',
  '380': '/ueber-uns/#zertifikat',
  '489': '/karriere/',
};

export const onRequestGet: PagesFunction = async ({ request, next }) => {
  const url = new URL(request.url);
  const pageId = url.searchParams.get('page_id') ?? url.searchParams.get('p');
  if (pageId) {
    const target = PAGE_ID_MAP[pageId] ?? '/';
    return Response.redirect(new URL(target, url.origin).href, 301);
  }
  return next();
};
