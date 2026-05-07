const CACHE_NAME = "portfolio-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./couleurs.css",
  "./data.js",
  "./achats.js",
  "./birthday.js",
  "./icon-192-v2.png",
  "./bous.png"
];

// INSTALL
self.addEventListener("install", event => {
  self.skipWaiting(); // 🔥 active direct

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// ACTIVATE (nettoyage anciens caches)
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// FETCH
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
