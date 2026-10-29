var C="ng-v3",A=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(A)}))});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET"||e.request.url.indexOf("/.netlify/")>-1)return;e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request)}))});
