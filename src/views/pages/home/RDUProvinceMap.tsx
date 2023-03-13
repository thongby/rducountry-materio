import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
//import icon from "leaflet/dist/images/marker-icon.png";
//import iconShadow from "leaflet/dist/images/marker-shadow.png";

// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
// });

//L.Marker.prototype.options.icon = DefaultIcon;

export default function RDUProvinceMap() {
  return (
    <MapContainer style={{ height: "800px" }} center={[13, 100]} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[17.007780000000025, 99.82300000000004]}>
        <Popup>
          จังหวัด A <br /> RDU Province
        </Popup>
      </Marker>
      <Marker position={[15.11481, 104.32938]}>
        <Popup>
          จังหวัด B <br /> RDU Province
        </Popup>
      </Marker>
      <Marker position={[9.14011, 99.33311]}>
        <Popup>
          จังหวัด C <br /> RDU Province
        </Popup>
      </Marker>
      <Marker position={[16.433812, 103.506484]}>
        <Popup>
          จังหวัด D <br /> RDU Province
        </Popup>
      </Marker>
      <Marker position={[15.40857, 100.02794]}>
        <Popup>
          จังหวัด E <br /> RDU Province
        </Popup>
      </Marker>
    </MapContainer>
  );
}

//export default SummaryCard;
