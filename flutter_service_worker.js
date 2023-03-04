'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/img/dark-3x.png": "2dace4c08dc337300492ad6472dd8c96",
"splash/img/light-2x.png": "5599cdb1741b29d70010fb70547dd445",
"splash/img/light-4x.png": "a4461ada88d7d5c9ef9b85676c84b06a",
"splash/img/dark-1x.png": "5fcf94c7fe527528aa70b0b40be0405d",
"splash/img/dark-4x.png": "a4461ada88d7d5c9ef9b85676c84b06a",
"splash/img/light-1x.png": "5fcf94c7fe527528aa70b0b40be0405d",
"splash/img/light-3x.png": "2dace4c08dc337300492ad6472dd8c96",
"splash/img/dark-2x.png": "5599cdb1741b29d70010fb70547dd445",
"splash/style.css": "3f80d51781f907d2597898bb74841ccb",
"favicon.png": "a881651f7aa2c18d2b1bcc8d372a8345",
"assets/NOTICES": "5067ed9b2edfded01a824dad4ec458b1",
"assets/AssetManifest.json": "9042792e310b26d98a6ddaea2b40d2ae",
"assets/assets/images/avatar5.png": "8e08f5723279cc8bfb2e5280305b4ff9",
"assets/assets/images/avatar15.png": "660ccb6f971f7a3d321e7e728a7ae104",
"assets/assets/images/swipe_logo.png": "05234c2e421c6da8a16e013e9d199fd8",
"assets/assets/images/splash3.png": "560e5f89adb851fac9694689c5b3a102",
"assets/assets/images/avatar10.png": "f79acc4e6604f13f57d6b1d6aced7b5b",
"assets/assets/images/avatar11.png": "842d9edecb53136dc4381a4e2b4e58f6",
"assets/assets/images/avatar14.png": "e3f21314f6c2efa4e547f4a1bf5951a2",
"assets/assets/images/avatar13.png": "addfa3e187adc82b77bda878babd633e",
"assets/assets/images/avatar8.png": "5902c379af5db5411b06fe55ebd83b26",
"assets/assets/images/empty_coupons.png": "7cd26651d3bc9747809a07fb1ea2ebd5",
"assets/assets/images/avatar9.png": "b5d064d98c8f6a0c7913ee2a83332759",
"assets/assets/images/avatar4.png": "2de4675e346f82d720300337dacff237",
"assets/assets/images/avatar2.png": "6ee043ecff2494569dfb21b52c6e162c",
"assets/assets/images/faq.png": "428cd11b33c559a02e7be1b8ec6184f5",
"assets/assets/images/empty.png": "99c43d6047bb43ec8b8335de45347e6d",
"assets/assets/images/first.png": "68c80699c2f8c296101cf57d3237fd43",
"assets/assets/images/avatar6.png": "d494f6af3e87274f82a86e91a711894b",
"assets/assets/images/empty_request.png": "961705d4f86217ae8e60aabd28bf5dbd",
"assets/assets/images/avatar3.png": "85e79442e745037627b0d32adcbedcf3",
"assets/assets/images/avatar12.png": "0c46298e79e11f26c780929592407d5e",
"assets/assets/images/empty_coins.png": "dc0a489ce1ff0009685cbbd1c1f52b04",
"assets/assets/images/avatar1.png": "443109302e3dc4493529a80bd4724166",
"assets/assets/images/avatar7.png": "90a5a5ad3f018f1e265f9a76f6e3eae4",
"assets/assets/images/category_vote.png": "20237f05407ad1e8f764a7fae552e062",
"assets/assets/images/FactJano_Logo_V1.png": "01923d57e6b6ae4b4649008ff32339a3",
"assets/assets/images/report.png": "6c6cc9e9ef0556c17832ddbb726a2a2e",
"assets/assets/images/coin_group.png": "92628ebf5bfcc441fe71fb61339c60dd",
"assets/assets/images/coin_image.png": "77b8696caa4a06f72560ff0e08f77fe4",
"assets/assets/images/coin_new.png": "fe3d7ac846cfd88357de7e69937f886a",
"assets/assets/images/avatar0.png": "1051badcb1f45c197298175e3b5941f2",
"assets/assets/images/premium_icon.png": "5881a0a9769c47f29415a6910c10a2a5",
"assets/assets/images/splash4.png": "557822a45b5800e654e5e6ae3dd54fd4",
"assets/assets/images/splash2.png": "1bb6dca4dc5d8a5804994f515572fb8c",
"assets/assets/images/empty_req.png": "ad75d5102fda159cf93842bb9579120f",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"version.json": "0104aaf6c45ddfcf3ac5bad2f501881e",
"manifest.json": "185b83427f9cba1f8695c0de57119569",
"icons/Icon-192.png": "84e2edc9ff40bae0384c404dcda6aca1",
"icons/Icon-512.png": "9be03a870d3367a4729ca1347f24c867",
"icons/Icon-maskable-192.png": "84e2edc9ff40bae0384c404dcda6aca1",
"icons/Icon-maskable-512.png": "9be03a870d3367a4729ca1347f24c867",
"main.dart.js": "a52b7172b901593ccae30bf110844754",
"index.html": "c91a24ef230725cff5babf91ad8144ad",
"/": "c91a24ef230725cff5babf91ad8144ad",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
