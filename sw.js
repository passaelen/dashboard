const CACHE_NAME = "portfolio-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "https://cdn.jsdelivr.net/npm/chart.js"
];

// INSTALL
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// FETCH
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
