import React from 'react'

import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css'
import { LayersControl,Marker } from 'react-leaflet'
const Layer = () => {
  return (
    <LayersControl position="topright">
        <LayersControl.BaseLayer name ="OSM" checked>
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      
        </LayersControl.BaseLayer>


         <LayersControl.BaseLayer name ="world map" >
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      
        </LayersControl.BaseLayer>

        <LayersControl.Overlay name ="test">
          <Marker position={[13,101]} checked>

          </Marker>
        </LayersControl.Overlay>
     
        
        
        
        </LayersControl>
  )
}

export default Layer