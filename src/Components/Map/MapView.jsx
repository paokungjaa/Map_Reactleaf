import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'

import { useMap, useMapEvents } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css'
import Layers from "./Layers";
import useDutyStore from '../../store/UseDutyStore';
import { Marker, Popup, Tooltip } from 'react-leaflet';


const ClickToAdd = ({adding,onPick})=>{
   useMapEvents({
    click(e){
    //console.log(e.latlng)
    //map.flyTo(e.latlng,14)
    if(adding){
    onPick(e.latlng.lat,e.latlng.lng);}



    },
  })
  return;
}

export const MapView = ({adding,onPick}) => {
  const center = [13,100]
  const locations = useDutyStore((s)=>s.locations)
  return (
    <div className="flex-1 bg-white shadow-lg border-l border-gray-200 ">

      <MapContainer className="h-full" 
      center={center} 
      zoom={7} scrollWheelZoom={true}>

       <ClickToAdd adding ={adding} onPick={onPick}/> 
        {
          locations.map((item)=>{

            return <Marker key={item.id} position ={[item.lat,item.lng]} >
              <Popup> 
                <div className='text-2md'>{item.name}</div>
                <div className='text-2md'>{item.lat.toFixed(6)}</div>
                <div className='text-2md'>{item.lng.toFixed(6)}</div>
              </Popup>
              <Tooltip direction="top">
                {item.name}
              </Tooltip>
               </Marker>

          })
        }

        <Layers/>

      </MapContainer>


    </div>
  )
}
