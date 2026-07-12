const legacyPageRedirects = new Map([
  ["15", "/downloads/"],
  ["18", "/kontakt/"],
  ["20", "/impressum/"],
  ["80", "/ueber-uns/"],
  ["82", "/maschinen-ausstattung/"],
  ["85", "/qualitaet-zertifizierung/"],
  ["89", "/ueber-uns/"],
  ["97", "/produkte/verpackung-kosmetik/"],
  ["99", "/produkte/innenanspritzung/"],
  ["101", "/produkte/labortechnik/"],
  ["103", "/produkte/medizintechnik/"],
  ["105", "/produkte/mehrkomponentenwerkzeuge/"],
  ["107", "/produkte/kleinstteile/"],
  ["249", "/produkte/"],
  ["297", "/downloads/"],
  ["338", "/datenschutz/"],
  ["380", "/qualitaet-zertifizierung/"],
  ["489", "/karriere/"]
]);

const cleanPathRedirects = new Map([
  ["/firmengeschichte/", "/ueber-uns/"]
]);

const redirect = (request, targetPath) => {
  const url = new URL(request.url);
  url.pathname = targetPath;
  url.search = "";
  url.hash = "";
  return Response.redirect(url.toString(), 301);
};

export default {
  fetch(request, env) {
    const url = new URL(request.url);
    const pageId = url.searchParams.get("page_id");

    if (pageId && legacyPageRedirects.has(pageId)) {
      return redirect(request, legacyPageRedirects.get(pageId));
    }

    if (cleanPathRedirects.has(url.pathname)) {
      return redirect(request, cleanPathRedirects.get(url.pathname));
    }

    return env.ASSETS.fetch(request);
  }
};
