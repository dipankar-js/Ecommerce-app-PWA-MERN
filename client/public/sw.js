var CACHE_NAME = 'itcan-app1';
var urlsToCache = [
	'/',
	'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600&display=swap',
	'/fallback',
	'/checkout',
	'/success',
	'/logo192.png',
	'/logo512.png',
	'/favicon.png'
];

// Install a service worker
self.addEventListener('install', (event) => {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			// Cache hit - return response
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});

// Update a service worker
self.addEventListener('activate', (event) => {
	var cacheWhitelist = ['itcan-app'];
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
