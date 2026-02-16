self.addEventListener("fetch", (event) => {
  if (event.request.method === "GET") {
    const requestUrl = new URL(event.request.url);
    const path = requestUrl.pathname.toLowerCase();

    if (
      path.includes(".webp") ||
      path.includes(".glb") ||
      path.includes(".js") ||
      path.includes(".svg") ||
      path.includes(".png") ||
      path.includes(".jpg") ||
      path.includes(".jpeg")
    ) {
      event.respondWith(
        fetch(event.request).then((response) => {
          if (response && (response.status === 200 || response.status === 0)) {
            return response;
          }
        }).catch((error)=>{console.log("Service Worker error while Fethcing", error)})
      );
    }
  }
});
