import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import sensors from "./sensors";

export default function Heatmap() {
  useEffect(() => {
    var map = L.map("map").setView([35.1693422, 33.3697631], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const points = sensors
      ? sensors.map((p) => {
          return [p[0], p[1]];
        })
      : [];

    L.heatLayer(points).addTo(map);
  }, []);

  return <div id="map" style={{ height: "300px", width: "60%", border: "transprent", borderRdius: "20px", margin: "10% 1em" }}></div>;
}
