/* HIMA App — Service Worker: Offline-Modus.
   Kern wird beim Install gecacht, alles Weitere beim ersten Besuch —
   danach funktionieren App, Amira und Farbpass ohne Netz. */
const CACHE = 'hima-app-v1';
const KERN = ['./index.html', '../website/assets/js/amira-brain.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(KERN)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit =>
      hit || fetch(e.request).then(res => {
        if (res.ok && e.request.url.indexOf(self.location.origin) === 0) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html'))
    )
  );
});
