import { Plus, X } from 'lucide-react'
import React from 'react'

const Header = ({adding, setAdding}) => {

  return (
    <div className="p-4 bg-white shadow-md border-b
    border-gray-200">
      <div className="flex justify-between">
        <h2 className={`test-2xl font-semibold text-gray-800 `}>ระบบจัดการเวรประจำจุด</h2>
        <button onClick={()=>setAdding((prev)=>!prev)} className={`flex item-center gap-2 rounded-md text-white p-2 hover:cursor-pointer  
          ${adding ?"bg-red-500 hover:bg-red-300" 
          :" bg-green-500 hover:bg-green-300 "}`}>
            {
              adding
              ? (<><X size={20}/>ยกเลิก </>)
              : (<><Plus size={20}/>เพิ่มจุดเวร </>)
            }
          
            </button>


      </div>
            {
              adding && 
               <div className='mt-2 text-sm text-amber-600 bg-amber-100 p-3 rounded-lg border'> 
               คลิกบนเเผนที่เพื่อเเสดงจุดเข้าเวร </div>
              
            }
      
      
      
      
      </div>
  )
}

export default Header