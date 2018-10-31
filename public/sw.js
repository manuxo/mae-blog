var CACHE_NAME = 'cache1';
var urlsToCache = [
    '/css/style.css',
    '/img/angular.png',
    '/img/icon-192.png',
    '/img/icon-512.png',
    '/img/java.png',
    '/img/mysql.png',
    '/img/nodejs.png',
    '/img/python.png',
    '/img/user-background.png',
    '/img/user.png',
    '/js/index.js',
    '/layouts/footer.ejs',
    '/layouts/head.ejs',
    '/layouts/header.ejs',
    '/bundles.ejs',
    '/index.ejs',
    '/favicon.ico',
    '/manifest.json'
];
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        var fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
    );
});