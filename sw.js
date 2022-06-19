
const assets = ["/pwa/", "/pwa/index.html", "https://pyscript.net/alpha/pyscript.css", "https://pyscript.net/alpha/pyscript.js", "/pwa/src/main.py", "/pwa/src/main.js"];

console.log("maurice file sw.js FULL ASSETS"); 


self.addEventListener("install", installEvent => {
    console.log("EVENT INSTALL");
    installEvent.waitUntil(caches.open("pwa")
    .then((cache) => {return cache.addAll(assets);}).catch((err) => console.log("Error INSTALL", err)));
    console.log("INSTALL COMPLETED");
    
});

self.addEventListener("fetch", fetchEvent => {
    console.log("EVENT FETCH");
    fetchEvent.respondWith(caches.match(fetchEvent.request).then(res=>{return res || fetch(fetchEvent.request)}));
    console.log("FETCH COMPLETED");

});

