'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2de0560c0b09366417b26a05a52821da",
".git/config": "6ac1377428764c83a19aee88d2cebe0a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "93ce4ec8370c1c6cce81ed36ec83f3a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "03220b3353019357f6dbd480ce0bce41",
".git/logs/refs/heads/master": "03220b3353019357f6dbd480ce0bce41",
".git/logs/refs/remotes/origin/master": "1603780da3c602d3f78099055957dd2d",
".git/objects/07/41191abbb5a64b0a8b48967fc865065f67530d": "ea6b87c49fa98fc394594d5ccdd336b8",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0c/6f31fc53bf7a50e959e10786bbe805e7cc9d10": "9a827fcfe99604d867577eaf0960ffbd",
".git/objects/0d/0e676624bbc2c2991589f0a8400d7bd555db27": "81ef9128e86d596bba609217438a9a45",
".git/objects/11/5b7fc22aa90f8afbef694aa2f9f1500928dac3": "d3abd6660907a093ab728efba4533033",
".git/objects/16/76faa4077cddd2330ad956ceb73786bc597686": "95caa8042eda3c8dd253538506e8c3ec",
".git/objects/1a/e619a72b61e9235f2385caf22fb8f9d14f36f6": "a567d2e3341d4a4a191eb1c0941feabc",
".git/objects/25/75c8061cf628f063ebada9db148c9a9038cb4c": "d4e92908f34066fc6183c5e3968b7a7d",
".git/objects/27/d76d4b05bd0e627ee9bfc494b3270af5dfb3a8": "c02b561dbbaf7555d8d1d48393741b80",
".git/objects/28/723d528110d5ec9a756ff4f4b1b423c84c0860": "53e3c19a8c304a56de5e96c9d616e1b3",
".git/objects/2b/209455b74fb55e0935e22b191cbf09ef2db3be": "9b200ec857b06c018231f15eada76420",
".git/objects/38/a6ceb8603b56460827c6286d054eda8ff12712": "ce401c7a5f13f0ac5749a71a48b78b22",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/41/6bfebad0bb87e574749e7924e36d76f337ed8d": "dc66ec6c58c501e88c8c8ca689a0b7f1",
".git/objects/45/6e62fe31e840858c0b7aa54f8a2559cbab812f": "ad1df9697be87540d6a9d1fffc0cac84",
".git/objects/4a/82aef340d4bd7bc4253041d066256c43bd3476": "2057c03fcd565ec70fba56f212c453c5",
".git/objects/4d/ae21462bf8dfda321f7434d26b8301203a68b4": "451c7d36eb77e49d280db560dff43fdf",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/5a/b9f956f1325237a3779dc12e8e99a03ded97f8": "54eb52603999b414027de528d2a4c6e9",
".git/objects/5e/0dd9774914296bd37be511aac0e3157dc1fea6": "45d288d61ad607cf9209aacf30adc3d5",
".git/objects/61/238a605eec9834e5a78f9d4708e89f83d89224": "29bd91c3fb0c3820804d3a511f7e1207",
".git/objects/63/c901d017caf31a0312cc87ae408c130697503c": "2155d48654d4b0a150be856906e4b035",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/d42984725e1f27e85d150dbc5e8def1105602a": "c29a614739237a47cd1d29cdd16fa488",
".git/objects/6c/91a46c9190933b54cbfb9a4ffc6b208cbc4b91": "a7e487fca49887e1c254aadd185f8028",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/a89c28bd7c0bcc87fab62d88196d05eb322371": "e584e9d1b2ad6788008bbc7df0069f52",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/26e2400d7c489e2771f3aee11b8917e3afe3ac": "de9f458b4a0060727acb5c2082d5740d",
".git/objects/90/0173723987fa9a79071e1cb1e4383fd43cb78b": "b3be80508f7bb1b2e8fb7126adc94422",
".git/objects/92/2ae9e736a734420f93f42e4ab5e46b523c9517": "99a188764ec2e0f1190a38cfa771afe7",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9e/3aafd379c1fdd80d7ff6f92768c6514abc1526": "e695dc7df0555daf498013cce8702a48",
".git/objects/9e/90e86ebef350dd134a50fcfba25cce8a896112": "d3adb31128f14ec6971d84e3c2d26ad3",
".git/objects/a4/b5a8dabe9829af3857cd3ab0f7888c68c7c067": "8019a8b87e935a2588cc1afb7168b0b3",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/ddd98c6673a0f6dfa9a0244e0033c8bf5cea1a": "054a4f971baccc54fa18a94b874658d7",
".git/objects/b3/dea970dd1fb0e90738d584742fd3b000b8aafc": "e1d148e17a51fbc435fb5b578384a8ef",
".git/objects/b5/51838c57030ecc6669946a6c5b62da0b81b111": "72386e33b51f73ecb74176044301de3e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c2/34987a96cb84a9c77a8829d5453c7becf447ee": "38166079fb2f5ce52e15a92010e6d687",
".git/objects/c5/632c9ff04c13a02870904b0fdc61e750418c7f": "33076be1f59cd9c05122093bcb5a6123",
".git/objects/c6/105ff8d9b6811e058b732c5e4ef2a6354bbf3c": "d0df24fcb4dbff85b2d1ca7537af2af5",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cb/44be9998a306910d64d521326290ab823a61ca": "ee01b66c943907b25b4125fb1af357ab",
".git/objects/d3/054f4628c7016f30b0300aee648387f8da1e4f": "febd719e9500a4bdacd3b12260ca3e5e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/5a919dbf7274271173d9410bc2af1ec7c84d1d": "b58db133a56fb0aff680073ab17a3134",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/fdca2cc3289bdc902f1f741dc71f0644836106": "e189807b94cf1836867e5308d9238cc7",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dd/307dde380d0ef1b6be94752274c31d8d06527b": "be8a12cd8cd5d4ef09be7b7b86386fc4",
".git/objects/e0/81070297da398ff83dd902f36a9037c637f924": "10e768a99f5cb6bd3a4c862292c01e07",
".git/objects/ea/e610966fd1be16c401fc6e9692c34c36ed9e61": "f0149512926ffff75dec17fd96835b1d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7bf044b32e80fd3383128c3e9f14d23d1a69fa": "593c5d378fe1a24246ce391abe7932f3",
".git/objects/ed/f7d5925b6d4e1297c1103dc991dd17ec2a5c4a": "4e47c39c1c5f7986534417983a887033",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/247e802f3d217129cfa7612cb70ca99de4efde": "d4713a151d0e3ccdd1ae3842f3b82b28",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/e2d4fcd9a7e3fec68c7d8ba3eb3eb3783e62e2": "325cf66fe8d435f1fc454913e4cea2cf",
".git/objects/fa/2a58102a4cfbe2f200e9540e19bc2d68f99c3f": "648b3c090c589acbdb1fc2a81857b44f",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/653bd087dd6f01fdef7d5543e4e1f7157a3170": "1499c75e971b882c3ef239b6c66c035b",
".git/objects/ff/942eb00b534e526ce18b3397a66dd9c487925e": "b7205d8781ed18cc1efa649e49b4dfd7",
".git/refs/heads/master": "6e94fc8676ef7735c156a4d547576c9c",
".git/refs/remotes/origin/master": "6e94fc8676ef7735c156a4d547576c9c",
"assets/AssetManifest.bin": "f1d83959244a6f405f8093364b602e7d",
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
"flutter_bootstrap.js": "c8bc6bbb5e13beabb417ec91c1e36ddf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "71d5aaf4024d63ddfb2034996928ee9e",
"/": "71d5aaf4024d63ddfb2034996928ee9e",
"main.dart.js": "ef63859390a49b0ba11ff01d9961bd35",
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
