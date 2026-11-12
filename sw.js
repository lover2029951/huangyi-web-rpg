// sw.js — GitHub Pages 靜態快取（與 gameVer 同步更新 CACHE 名稱）
/* global self, caches, fetch */
'use strict';

var CACHE = 'huangyi-game-v745';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(['./game.html', './landingPanelData.js']).catch(function () {});
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

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  var url = new URL(event.request.url);
  var path = url.pathname || '';
  var isGame = path.indexOf('game.html') !== -1;
  var isAsset = path.indexOf('/assets/') !== -1;
  if (!isGame && !isAsset) return;

  event.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(event.request).then(function (cached) {
        var network = fetch(event.request).then(function (res) {
          if (res && res.ok) {
            try { cache.put(event.request, res.clone()); } catch (e) { }
          }
          return res;
        }).catch(function () { return cached; });
        return cached || network;
      });
    })
  );
});
