// Atualize CACHE quando publicar uma nova versão do jogo.
const CACHE='eco-adventure-brasil-20261123-2';
const FILES=['./','./index.html','./manifest.webmanifest','./instalar.js','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(x=>new Request(x,{cache:'reload'})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const url=new URL(e.request.url);
 if(e.request.method!=='GET'||url.origin!==self.location.origin) return;
 e.respondWith(fetch(e.request,{cache:'no-cache'}).then(response=>{
  if(response.ok){const copy=response.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(e.request,copy)));}
  return response;
 }).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
