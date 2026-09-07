import React, { useState } from 'react'
import useDutyStore from '../../store/UseDutyStore'

const AddLocation = ({lat,lng,setAdding,setPending}) => {
 const [name,setName] = useState("")
 const [error,setError] = useState("")
 const addLocation = useDutyStore((s)=>s.addLocation)

 const hdlAddLocation = async()=>{
    if(!name.trim()){
    setError("You must enter the name")
    return
  }
  setError("")
 await addLocation(lat,lng,name);
  setPending(false);
  setAdding(null);
 };
 const hdlCancel = ()=>{
  setPending(false)
  setAdding(null)
 }
  



  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
       <div className='bg-white p-6 rounded-2xl shadow-2xl w-96'>
        <h3 className='text-xs text-gray-500 mb-2'>เพิ่มจุดเข้าเวร</h3>
        <div className='text-xs pb-2'>Lat: {lat.toFixed(6)}, Lng: {lng.toFixed(6)}</div>
        <input className=' w-full border border-gray-300 rounded-ms px-4 py-1 focus:outline-none focus:ring-purple-500 focus:ring-2' 
        placeholder='Input Name' autoFocus 
        onChange={(e)=>{setName(e.target.value) 
          if(error) setError("")
        }}/>
        {
          error &&(<div className='text-red-500 text-sm pd-1'>{error}</div>)
        }
        <div className='flex gap-4 pt-2'>
            <button className='flex-1 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600'
            onClick={hdlAddLocation}
            
            
            >
              
              Save
              
              </button>
            <button className='flex-1 bg-gray-200 rounded-md hover:bg-gray-300'
            onClick={hdlCancel}>Cancel</button>
        </div>
       </div>


    </div>
  )
}

export default AddLocation