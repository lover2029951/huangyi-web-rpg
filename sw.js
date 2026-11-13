// sw.js — GitHub Pages 靜態快取（與 gameVer 同步更新 CACHE 名稱）
/* global self, caches, fetch */
'use strict';

var CACHE = 'huangyi-game-v762';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll([
        './game.html', './game-chunked.html', './landingPanelData.js', './index.html', './style.css',
        './chunks/hy-phase1.js', './chunks/hy-phase2.js', './chunks/hy-perf.js', './chunks/manifest.json'
      ]).catch(function () {});
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) {
        return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function cacheableRequest(req) {
  try {
    var u = new URL(req.url);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch (e) { return false; }
}

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  if (!cacheableRequest(event.request)) return;
  var url = new URL(event.request.url);
  var path = url.pathname || '';
  var isGame = path.indexOf('game.html') !== -1 || path.indexOf('game-chunked.html') !== -1;
  var isChunk = path.indexOf('/chunks/') !== -1;
  var isAsset = path.indexOf('/assets/') !== -1;
  if (!isGame && !isAsset && !isChunk) return;

  event.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(event.request).then(function (cached) {
        var network = fetch(event.request).then(function (res) {
          if (res && res.ok && cacheableRequest(event.request)) {
            try { cache.put(event.request, res.clone()); } catch (e) { }
          }
          return res;
        }).catch(function () { return cached; });
        return cached || network;
      });
    })
  );
});
