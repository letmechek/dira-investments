import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Location() {
  const center = [-12.9723621, 28.6477007]; // Coordinates for 227 Buteko Avenue, Town Centre, Ndola, Zambia

  return (
    <MapContainer center={center} zoom={16} style={{ height: "50vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      <Marker position={center}>
  <Popup>
    <h3>Location Details</h3>
    <p>227 Buteko Avenue, Town Centre, Ndola, Zambia</p>
  </Popup>
</Marker>
    </MapContainer>
  );
}
