'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0bff073c8e48c528a9e75ee7dbcc26ad",
"splash/img/dark-1x.gif": "7360a9d581d9623374d9d94356d25ea6",
"splash/img/light-1x.gif": "7360a9d581d9623374d9d94356d25ea6",
"splash/img/light-2x.gif": "ba683a482f119e0676ac02443c62361f",
"splash/img/dark-4x.gif": "5b880310241983e91c686fed5bf5a8c5",
"splash/img/light-3x.gif": "1ad3d23cccc4f8203f35b39dbc7db587",
"splash/img/dark-3x.gif": "1ad3d23cccc4f8203f35b39dbc7db587",
"splash/img/light-4x.gif": "5b880310241983e91c686fed5bf5a8c5",
"splash/img/dark-2x.gif": "ba683a482f119e0676ac02443c62361f",
"index.html": "c81d1de72525d938af8f5b4303bf39c2",
"/": "c81d1de72525d938af8f5b4303bf39c2",
"dist/styles/app.css": "510d5eeeb248bed4337f9141d4fac6cf",
"dist/scripts/qa.js": "961146bcc2e2c42be5684dae69ca393a",
"dist/scripts/master.js": "66f34448e36d15b33eeb8837db672276",
"main.dart.js": "b29347c58be3e166cb0083faab0b0548",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"_redirects": "2c227bf07615ae3687d530ec92101ac0",
"favicon.png": "e00214365d4b7a4550c71cdc5c5d7ba4",
"icons/Icon-192.png": "e37f60af0f73a5394fade8a8ae729555",
"icons/Icon-maskable-192.png": "e37f60af0f73a5394fade8a8ae729555",
"icons/Icon-maskable-512.png": "7dc80b01898f4035a72d8620c394c01d",
"icons/Icon-512.png": "e22b929f280a4274ff831677a66a600f",
"manifest.json": "d118cf1031c9a7ca6e0ad589c403cd5f",
"sitemap.xml": "a39bd9415ee612955e491cbd2a5eb140",
"robots.txt": "9a9282d33bf41e707f4a2e0128a8f226",
"assets/AssetManifest.json": "6c08c14dbe2546d0654a1e31f19db10c",
"assets/NOTICES": "2faed3ae6a32bb10b483b93e9d614c7c",
"assets/FontManifest.json": "55047ec018a124cdcd14985adf99b9d5",
"assets/AssetManifest.bin.json": "6837c3a7c9f156c424c3cbd8f9bd1484",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a00418abbf35028b0a8f39a0820028f3",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/la_recetta_library/lib/assets/fonts/futura/FuturaPTBold.otf": "f3483f64fe4f53928cfe2786e7ec82cc",
"assets/packages/la_recetta_library/lib/assets/fonts/futura/FuturaPTBook.otf": "99541f31c3aca8a3251b82b28ec7966e",
"assets/packages/la_recetta_library/lib/assets/fonts/futura/FuturaPT-Light.ttf": "c7f1106be884b5027c6d93deec8ca00a",
"assets/packages/la_recetta_library/lib/assets/fonts/futura/FuturaPT-Heavy.ttf": "8b9416a7a903a8734f22e4fd043f74e9",
"assets/packages/la_recetta_library/lib/assets/fonts/futura/FuturaPTMedium.otf": "bd99f124d37cfd9caecec4fe24094334",
"assets/packages/la_recetta_library/lib/assets/fonts/futura/FuturaPT-Demi.ttf": "cc2af0787cb4b6579c8de6cdb7e0ec19",
"assets/packages/la_recetta_library/lib/assets/fonts/appIcons/AppIcons.ttf": "b0d8e9c0aa0a85a5bc8bb73c7e6379a7",
"assets/packages/la_recetta_library/assets/images/logo-la-recetta-white.png": "fff99bc7686290dcd6da2afe8f0596e0",
"assets/packages/la_recetta_library/assets/images/logo-nutresa-h.png": "7a1c6ac606f2640de184348c4f1e83ba",
"assets/packages/la_recetta_library/assets/images/triangle-radius.svg": "61cc2e58c4bd142612c487dfc4d82395",
"assets/packages/la_recetta_library/assets/images/logo-la-recetta-red.png": "120a2ef94e44d55eb643e18e3ffe5ae2",
"assets/packages/la_recetta_library/assets/images/customer-service-white.png": "41e8fa23ea65ed1f61bca2bf29d0bbf0",
"assets/packages/la_recetta_library/assets/images/logo-alpina.png": "de967e691fc553ef657c34e47bd76727",
"assets/packages/la_recetta_library/assets/images/triangle-radius-green.svg": "5c36f03452a54b89904a2e6f9210a607",
"assets/packages/la_recetta_library/assets/fonts/futura/FuturaPTBold.otf": "f3483f64fe4f53928cfe2786e7ec82cc",
"assets/packages/la_recetta_library/assets/fonts/futura/FuturaPTBook.otf": "99541f31c3aca8a3251b82b28ec7966e",
"assets/packages/la_recetta_library/assets/fonts/futura/FuturaPT-Light.ttf": "c7f1106be884b5027c6d93deec8ca00a",
"assets/packages/la_recetta_library/assets/fonts/futura/FuturaPT-Heavy.ttf": "8b9416a7a903a8734f22e4fd043f74e9",
"assets/packages/la_recetta_library/assets/fonts/futura/FuturaPTMedium.otf": "bd99f124d37cfd9caecec4fe24094334",
"assets/packages/la_recetta_library/assets/fonts/futura/FuturaPT-Demi.ttf": "cc2af0787cb4b6579c8de6cdb7e0ec19",
"assets/packages/la_recetta_library/assets/fonts/appIcons/AppIcons.ttf": "dca56065d872722dc90afb67deb4d5a6",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js.map": "1d2af1f0a021761b289f4bf0fed87242",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js": "77727e3a27ad3662c8fe30922a27626e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js.map": "b77186f134bc5be76a9c7b6512461a00",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js": "fa742e283e40fa499a72f9a314f9f53a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "dfe02348aa3ee1afd8854a94ec8cd28c",
"assets/fonts/MaterialIcons-Regular.otf": "0287e530ed98dd63401888d8d10eccb7",
"assets/assets/images/empty_cart.png": "1d95e04168f57e49ca78baa91f11496a",
"assets/assets/images/img-no-disponible.webp": "29c2474f5348b16a75e182a4e7f82514",
"assets/assets/images/404Mobile.png": "5005fdef346555ec9983d67d958d3475",
"assets/assets/images/pse-icon.png": "d45793b0045841de7d26090ddb4891ca",
"assets/assets/images/404.png": "8898d42f238eea6c98bd1809181ec18a",
"assets/assets/images/404.svg": "5bc1715ed1ec697105c168284525914f",
"assets/assets/images/404Mobile.svg": "9c30252eddd4b391f1069a8173e084e2",
"assets/assets/images/broken-link.png": "3fac21421b525bbe4da224246fdee450",
"assets/assets/images/search-404.svg": "3d2dfefe4fa9abae48a7a9058a50b4a6",
"assets/assets/images/broken-link.svg": "12b98fd861428a59f683c8a1ef4eb8af",
"assets/assets/gifs/loading.gif": "1d66590920587e34c0efb77e51cda2ce",
"service_worker.js": "5e30443ca8252b4ca073752f8a1c9ffc",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
