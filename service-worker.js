"use strict";var precacheConfig=[["/ring-toss-2/index.html","da2b5e24b2cfc7b8af4c1aeecf685f61"],["/ring-toss-2/static/css/main.353bf2bf.css","e4f12fa759d9679206a87a32e7143621"],["/ring-toss-2/static/js/main.c5ea09e4.js","f05227e0b59ad3b5f0a5c89fa94fc1f7"],["/ring-toss-2/static/media/background.ef0c62f7.png","ef0c62f7d1704a24a1cb50b3c3753ac0"],["/ring-toss-2/static/media/logo.5d6f0a53.png","5d6f0a53491a839e625884cbe1d8d6e3"],["/ring-toss-2/static/media/miss.8be9c037.png","8be9c03704c8a09c939d9b58c9b1773c"],["/ring-toss-2/static/media/product2.f172dce8.png","f172dce8eeb4299481933d9f7fa89ddc"],["/ring-toss-2/static/media/product3.b652b6a1.png","b652b6a1f4dffb4e810f9e7a97d52954"],["/ring-toss-2/static/media/product5.85b2589c.png","85b2589c744fb9b85047fb9ce66b03e2"],["/ring-toss-2/static/media/product6.d27f6645.png","d27f664536762ccec7bedddb5c6f1ddb"],["/ring-toss-2/static/media/product7.e1358873.png","e13588734defb71e1bdd1506f426ab2e"],["/ring-toss-2/static/media/win_gift.916d90f9.png","916d90f983fdee5d66ecfbf1c38c312d"],["/ring-toss-2/static/media/win_product.a39d45fe.png","a39d45fe44d686b8a5b490a68cd49076"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var a="/ring-toss-2/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});