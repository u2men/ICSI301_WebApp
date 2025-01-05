const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './components/my-product.js',
    'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

self.addEventListener('install', (event) => {
    // Precache assets on install
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(urlsToCache);
    }));
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'New Notification';
    const options = {
        body: data.body || 'You have a new notification.',
        icon: './path/to/icon.png',
        badge: './path/to/icon.png'
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

addEventListener('message', event => {
    console.log("message handled");
    
    if (event.data === 'showNotification') {
        const title = 'Periodic Notification';
        const options = {
            body: 'This is a periodic notification.',
            icon: './path/to/icon.png',
            badge: './path/to/icon.png'
        };
        self.registration.showNotification(title, options);
    }
});
