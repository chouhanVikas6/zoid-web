"use client";
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  useEffect(() => {
    const map = L.map('map', {
      center: [34.0, -118.34],
      zoom: 12,
      zoomControl: false,    // Disable zoom buttons
      attributionControl: false,  // Remove attribution label
    });

    L.tileLayer('https://www.openstreetmap.org/?mlat=28.509922844726677&mlon=77.3739744574581#map=16/28.5099/77.3739', {
      maxZoom: 19,
    }).addTo(map);

    return () => { map.remove(); };
  }, []);

  return (
    <div id="map" className="w-full h-[500px]"></div>
  );
}
