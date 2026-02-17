import React, { useEffect, useRef } from "react";
import getBrowserEnv from "../utils/browserEnv";

const env = getBrowserEnv();
const marker = `${env.CDN_BASE_URL}/miscellaneous/marker2.png`;

export default function LeafletMap() {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      mapContainer.current &&
      !mapInstance.current
    ) {
      const L = require("leaflet");

      var myIcon = L.icon({
        iconUrl: marker,
        iconSize: [121.863, 23.058],
        iconAnchor: [10, 20],
      });

      mapInstance.current = L.map(mapContainer.current).setView(
        [30.71754, 76.7011],
        16
      );
      mapInstance.current.scrollWheelZoom.disable();

      L.tileLayer("https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png", {
        maxZoom: 18,
        // attribution:
        //   'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      L.marker([30.71754, 76.7011], { icon: myIcon })
        .addTo(mapInstance.current)
        .bindPopup(
          '<a href="https://goo.gl/maps/RSPPUaGXxE3KCoNx7" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>'
        );
    }
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      <div
        ref={mapContainer}
        style={{ height: "100%", width: "100%", position: "relative" }}
      ></div>
    </div>
  );
}
