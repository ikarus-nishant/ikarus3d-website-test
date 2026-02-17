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
          return response;
        }).catch((error)=>{
          console.log("Service Worker error while Fetching", error);
          return new Response("Network error", { status: 408, statusText: "Request Timeout" });
        })
      );
    }
  }
});
