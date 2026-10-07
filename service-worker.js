const CACHE_NAME = "pixelarte-pwa-v1-1-final";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./ads-config.js",
  "./favicon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET"){
    return;
  }

  const url = new URL(event.request.url);

  /*
    IMPORTANTE:
    O Service Worker só trata recursos do próprio Pixelarte.

    Isso evita que uma verificação externa de internet receba
    index.html do cache como resposta e seja interpretada
    incorretamente como "Online".
  */
  if(url.origin !== self.location.origin){
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if(cached){
        return cached;
      }

      return fetch(event.request)
        .then(response => {
          if(response.ok){
            const copy = response.clone();

            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, copy);
            });
          }

          return response;
        })
        .catch(async () => {
          if(event.request.mode === "navigate"){
            return caches.match("./index.html");
          }

          return caches.match(event.request);
        });
    })
  );
});
