const CACHE_NAME = 'crew-portal-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  /* Add your CSS and JS file names here, like '/style.css', '/script.js' */
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// Install Event: Caches your app's core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch Event: Serves cached files if offline (Stupid Simple Crazy Fast)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return the cached version if found, otherwise go to the network
      return response || fetch(event.request);
    })
  );
});