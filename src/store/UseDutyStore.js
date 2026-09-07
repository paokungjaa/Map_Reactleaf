import { create } from "zustand";
import { api } from "../lib/api";

const Dutystore = (set, get) =>({
   personnel:[],
   locations:[],
   assignments:[],
   selectedLocationId:null,
   

 fetchAll: async()=>{
 try{
  const personnel = await api.get('/personnel');
  const locations = await api.get('/locations')
  set({
   personnel:personnel,
   locations:locations
  })
 }
 catch(error)
{
 console.error(error)
} 
},
addLocation: async(lat,lng,name)=>{
  try {
    const res = await api.post('/locations',
      {
        name:name,
        lat:Number(lat),
        lng:Number(lng),
        maxCapacity:5
      }
    );
    await get().fetchAll()//เข้าถึง state ใน global

  }
  catch(error){
    console.log("Add location error", error)
  }
 
  
},
});
const useDutyStore = create(Dutystore);


export default useDutyStore