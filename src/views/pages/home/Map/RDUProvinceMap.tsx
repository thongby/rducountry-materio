import React, { useRef } from 'react'
import { LayerGroup, LayersControl, MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import BaseMap from 'src/views/map/layer/BaseMap'
import Province from 'src/views/map/layer/ProvinceByName'
import ProvinceByHRegion from 'src/views/map/layer/ProvinceByHRegion'
import ProvinceByRegion from 'src/views/map/layer/ProvinceByRegion'
//import icon from "leaflet/dist/images/marker-icon.png";
//import iconShadow from "leaflet/dist/images/marker-shadow.png";

// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
// });

//L.Marker.prototype.options.icon = DefaultIcon;

export default function RDUProvinceMap() {
  const mapRef: any = useRef()

  return (
    <MapContainer
      ref={mapRef}
      style={{ width: '100%', height: '100vh' }}
      center={[13, 100]}
      zoom={6}
      scrollWheelZoom={false}
    >
      <LayersControl position='topright'>
        <BaseMap />

        <LayersControl.Overlay name='ข้อมูลรายจังหวัด' checked>
          <LayerGroup>
            <Province />
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name='ข้อมูลรายเขตสุขภาพ'>
          <LayerGroup>
            <ProvinceByHRegion/>
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name='ข้อมูลรายภาค'>
          <LayerGroup>
            <ProvinceByRegion/>
          </LayerGroup>
        </LayersControl.Overlay>

      </LayersControl>
    </MapContainer>
  )
}
