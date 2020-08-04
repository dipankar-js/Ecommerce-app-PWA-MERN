const staticCacheName = 'site-static-v';
const dynamicCacheName = 'site-dynamic-v';
const assets = [
	'/',
	'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600&display=swap',
	'/fallback',
	'/checkout',
	'/success'
];

// cache size limit function
const limitCacheSize = (name, size) => {
	caches.open(name).then((cache) => {
		cache.keys().then((keys) => {
			if (keys.length > size) {
				cache.delete(keys[0]).then(limitCacheSize(name, size));
			}
		});
	});
};

// install event
self.addEventListener('install', (evt) => {
	//console.log('service worker installed');
	evt.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			console.log('caching shell assets');
			cache.addAll(assets);
		})
	);
});

// activate event
self.addEventListener('activate', (evt) => {
	//console.log('service worker activated');
	evt.waitUntil(
		caches.keys().then((keys) => {
			//console.log(keys);
			return Promise.all(
				keys
					.filter((key) => key !== staticCacheName && key !== dynamicCacheName)
					.map((key) => caches.delete(key))
			);
		})
	);
});

// fetch events
self.addEventListener('fetch', (evt) => {
	evt.respondWith(
		caches
			.match(evt.request)
			.then((cacheRes) => {
				return (
					cacheRes ||
					fetch(evt.request).then((fetchRes) => {
						return caches.open(dynamicCacheName).then((cache) => {
							cache.put(evt.request.url, fetchRes.clone());
							// check cached items size
							limitCacheSize(dynamicCacheName, 15);
							return fetchRes;
						});
					})
				);
			})
			.catch(() => {
				return caches.match('/fallback');
			})
	);
});
