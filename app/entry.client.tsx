
import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}


// Also ensure that you are not caching scripts too.

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/image-cache-sw.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
      
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}