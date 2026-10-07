const APP_VERSION="1.5";
const CACHE_NAME=`pixelarte-pwa-v${APP_VERSION}`;
const APP_SHELL=["./","./index.html","./manifest.webmanifest","./ads-config.js","./favicon.svg","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png"];

self.addEventListener("install",event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    for(const url of APP_SHELL){
      try{
        const response=await fetch(url,{cache:"reload"});
        if(response.ok)await cache.put(url,response.clone());
      }catch{}
    }
    await self.skipWaiting();
  })())
});

self.addEventListener("activate",event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith("pixelarte-pwa-")&&key!==CACHE_NAME).map(key=>caches.delete(key)));
    await self.clients.claim();
  })())
});

self.addEventListener("message",event=>{
  if(event.data?.type==="SKIP_WAITING")self.skipWaiting();
});

self.addEventListener("fetch",event=>{
  const req=event.request;
  if(req.method!=="GET")return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;

  if(req.mode==="navigate"){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(req,{cache:"no-store"});
        if(fresh.ok){const cache=await caches.open(CACHE_NAME);await cache.put("./index.html",fresh.clone())}
        return fresh;
      }catch{
        return (await caches.match("./index.html"))||(await caches.match("./"));
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    try{
      const fresh=await fetch(req,{cache:"no-store"});
      if(fresh.ok){const cache=await caches.open(CACHE_NAME);await cache.put(req,fresh.clone())}
      return fresh;
    }catch{
      return (await caches.match(req))||Response.error();
    }
  })());
});
