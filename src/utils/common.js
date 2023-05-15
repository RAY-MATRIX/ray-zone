function extractIdFromURL(url) {
  const values = url.split('/');
  return values[2];
}

function routeFromURL() {
  const route = window.location;
  const values = route.href.split('/');
  return values[3];
}

export { extractIdFromURL, routeFromURL };
