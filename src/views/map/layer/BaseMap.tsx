import React from 'react'
import { TileLayer, LayersControl } from 'react-leaflet'

type Props = {}

const BaseMap = (props: Props) => {
  return (
    <>
      <LayersControl.BaseLayer name='ภาพถ่ายภูเขา'>
        <TileLayer url='https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png' />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer name='ภาพถ่ายดาวเทียม'>
        <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer name='ภาพปกติ' checked>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </LayersControl.BaseLayer>
    </>
  )
}

export default BaseMap
