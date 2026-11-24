// Eco Adventure Brasil — service worker (mesmo modelo do NOVA).
// Arquivos do próprio site: busca na rede primeiro (atualizações chegam na hora) e usa a cópia se estiver sem sinal.
// A cada atualização: mude o CACHE aqui e o ?v= do instalar.js no index.html.
const CACHE='eco-adventure-brasil-202611232200';
const ASSETS=['./','./index.html','./instalar.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(a=>new Request(a,{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==self.location.origin)return;
  const fresh=()=>fetch(e.request,{cache:'no-cache'}).catch(()=>fetch(e.request));
  const saved=()=>caches.match(e.request).then(r=>r||caches.match(e.request,{ignoreSearch:true})).then(r=>r||caches.match('./index.html'));
  e.respondWith(fresh().then(r=>{if(r&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r;}).catch(saved));
});
