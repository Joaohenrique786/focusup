self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("focusup").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js"
      ]);
    })
  );
});
