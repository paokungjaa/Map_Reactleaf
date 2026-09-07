import React from 'react'
import useDutyStore from '../../store/UseDutyStore'
import { User } from 'lucide-react';
import { Clock } from 'lucide-react';
const PersonalList = () => {

  const personnel = useDutyStore((state) => state.personnel);
  const onDrag = (e,personId)=>{
    e.dataTransfer.setData('text/plain', personId)
  };
  return (
    <div className="w-80 bg-white overflow-y-auto ">
      <div className="p-6 border-b border-gray-200">

        <div className="flex item-center gap-3 mb-2" >
          <User className="text-blue-500" size={28} />
          <h2 className="text-2xl font bold text-gray-800">รายชื่อเจ้าหน้าที่</h2>
        </div>
        <p className="text-sm text-gray-500">ลากไปยังจุด</p>
      </div>

      <div>
        {personnel.map((person) => {
          return <div key={person.id} 
          
          draggable onDragStart={(e)=>onDrag(e,person.id)}
              
          className="flex item-center gap-3 p-3 bg-blue-100 border border-blue-300 rounded-lg cursor-pointer hover:shadow-md
       hover:scale-103 overflow-x-hidden">
            <div className="text-3xl">
              {person.avatar}
            </div>
            <div className='flex-1'>
              <div className='font-semibold text-gray-800'>{person.name}</div>
              <div className='text-xs text-gray-500'>{person.position}</div>

            </div>
            <div className="text-gray-500 pt-2 ">
              <Clock />
            </div>
          </div>
        })}


      </div>
    </div>
  )
}

export default PersonalList

