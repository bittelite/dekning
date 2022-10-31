import { useState, useEffect, Children } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 4);
  return null;
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 64, lng: 10 });

  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer center={center} zoom={20} style={{ height: '500px', paddingBottom: '20px' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
}
