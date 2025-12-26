'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f1d83959244a6f405f8093364b602e7d",
"assets/AssetManifest.bin.json": "6022420787382ba2fce9ee126aaa76a8",
"assets/assets/images/Albert_Einstein.png": "e17b4a1e94296f9a64208498acaefc1a",
"assets/assets/images/Ali_Kuscu.png": "64865636d146609c4d099e1362c873f1",
"assets/assets/images/Arsimet.png": "ca2b5b5ab2ce31cd56950a919531117d",
"assets/assets/images/Cezeri.png": "32872a7ac4d04cd0cbe565aaea404f4d",
"assets/assets/images/Farabi.png": "fb69ea87e9201389cf39dc3829971d90",
"assets/assets/images/field_empty.png": "1d81463931e65cdf41000e223c1e1893",
"assets/assets/images/Galileo.png": "e4f2faaffe4e4e0a5963377d006d7c10",
"assets/assets/images/Graham_Bell.png": "07fc909cf298de6ad8cf8cab5e0e3aef",
"assets/assets/images/Harezmi.png": "1b5704cd806f29029cb53e701e1490a5",
"assets/assets/images/Hawkings.png": "94c9ed0c30631276a93eb6725edcf396",
"assets/assets/images/Hubble.png": "e98f280f3aab6c48b9871478e18aa6a0",
"assets/assets/images/Ibni_Sina.png": "406b9f56a2e10196b3cf7a432646386e",
"assets/assets/images/kapak.png": "82587988a21e8ebfb2f0092bc797ac47",
"assets/assets/images/Kepler.png": "1c98e75c6067831c36c5a7fab254c91a",
"assets/assets/images/Marie_Cruie.png": "afba4d6b9a3ca5ad7c245256b12683c2",
"assets/assets/images/Mendeleyev.png": "42da76d90473bf814cbb35fc40bcd884",
"assets/assets/images/mosaley.png": "30fcf922e48f628a657525db05c00522",
"assets/assets/images/Newton.png": "67eb433b9728993b384b870eee09d671",
"assets/assets/images/Platon.png": "a3dd821a645244337797f3e7e981fb20",
"assets/assets/images/Sokrates.png": "33f500e1822fdb4cfcf6e4c12fab1577",
"assets/assets/images/splash.png": "cd7247fab3b5acf4936c8538f694acda",
"assets/assets/images/Tesla.png": "d6d00486996703dd6aaa024862e8617d",
"assets/assets/images/transparent_pixel.png": "1d9bd2961eed6136d031b0d01c8fe004",
"assets/assets/images/Webb.png": "f747588f4faf81ed9c7b394089455731",
"assets/assets/sounds/correct.mp3": "aa6da0f02e3403186f5871de07feadd0",
"assets/assets/sounds/opening.mp3": "1b44b7dbcd385ea7bcf1f3caf67264ef",
"assets/assets/sounds/thinking.mp3": "0b943db9cbd96a954ea1ba83b7ad0490",
"assets/assets/sounds/wrong.mp3": "6fc81ff5b14e992285a570099b2a698b",
"assets/assets/videos/portal.mp4": "bc3bd1d0fb1854ba400e746edf39b79c",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "3507543de0fa12d898222ecf0ab6f94c",
"assets/NOTICES": "1308fcfbb8d49ff45e219e92baa2881b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "bfb312607277c6f8fd8f8c973d8e6f64",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "10c919c244f5b5b1fde7f4c4a423e83d",
"/": "10c919c244f5b5b1fde7f4c4a423e83d",
"main.dart.js": "5503569a7aae5434843245cbaa1bf12f",
"manifest.json": "89a7f3f836effb95518f7d9373ba4d76",
"version.json": "fe9d95b196fd125c3ac96a8409c35453"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
