self.addEventListener('install', (event) => {
    const appCacheAssets = [
        '/index.html',
        'dist/styles/app.css',
        'dist/scripts/qa.js',
        'dist/scripts/master.js',
        '/main.dart.js',
        'flutter.js',
        'assets/packages/flutter_inappwebview_web/assets/web/web_support.js'
    ];

    const pdfCacheAssets = [
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js',
        'https://cdn.cookie-script.com/s/f0df1134dafc0eb7acc54e9b6afc14aa.js',
    ];

    const otherScriptsForCache = [
        '//www.gstatic.com/recaptcha/releases/-ZG7BC9TxCVEbzIO2m429usb/styles__ltr.css',
        '//www.gstatic.com/recaptcha/api2/logo_48.png',
    ];

    event.waitUntil(
        Promise.all([
            caches.open('app-cache-v1').then((cache) => cache.addAll(appCacheAssets)),
            caches.open('pdf-cache-v1').then((cache) => cache.addAll(pdfCacheAssets)),
            caches.open('external-scripts-v1').then((cache) => cache.addAll(otherScriptsForCache)),
        ]).catch((error) => {
            console.error('Cache failed:', error);
        })
    );
});

self.addEventListener('activate', (event) => {
    const cacheAllowlist = ['app-cache-v1', 'pdf-cache-v1', 'external-scripts-v1'];
    const maxAge = 60 * 60 * 24 * 7;

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheAllowlist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    } else {
                        caches.open(cacheName).then((cache) => {
                            cache.keys().then((requests) => {
                                requests.forEach((request) => {
                                    cache.match(request).then((response) => {
                                        const date = new Date(response.headers.get('date'));
                                        if ((Date.now() - date.getTime()) / 1000 > maxAge) {
                                            cache.delete(request);
                                        }
                                    });
                                });
                            });
                        });
                    }
                })
            );
        })
    );
});


self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    if (url.origin === location.origin) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return cachedResponse || fetch(event.request);
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                const fetchPromise = fetch(event.request).then((networkResponse) => {
                    caches.open('external-scripts-v1').then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                    });
                    return networkResponse;
                });
                return cachedResponse || fetchPromise;
            })
        );
    }
});

