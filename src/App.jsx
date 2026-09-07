import Header from './Components/Layout/Header'
import LocationList from './Components/Location/LocationList'
import { MapView } from './Components/Map/MapView'
import PersonalList from './Components/People/PersonalList'
import './index.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useDutyStore from './store/UseDutyStore'
import AddLocation from './Components/Location/AddLocation'

const App = () => {
  const [adding,setAdding] = useState(false)
 const fetchAll = useDutyStore((state)=>state.fetchAll) 
  const [pending,setPending] = useState(0)
  
  useEffect(()=>{
    fetchAll()
   

  },[])

const onPick = (lat,lng) =>{
  setPending({lat: lat,lng: lng,});

};



  return (
    <div className="flex h-screen bg-gray-100">
      <PersonalList />

      <div className="flex flex-col flex-1">
        <Header adding={adding} setAdding={setAdding} />

         <div className="flex flex-1 overflow-hidden">

        <MapView adding={adding} onPick={onPick}/>
        <LocationList />

         </div>
      </div>

      {
        pending && (<AddLocation
        lat={pending.lat}
        lng={pending.lng}
        setAdding={setAdding}
        setPending={setPending}

        />
     )}




    </div>
  )
}

export default App