import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

export const AllTask = () => {

   const Data = useContext(AuthContext);
   const authData = Data.userData;
   console.log(authData)
  
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 h-80 rounded '>
        <div className='bg-red-400 py-2 px-4  mb-2 flex justify-between rounded '>
         <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed Task</h5>
             <h5 className='w-1/5'>Failed Task</h5>
            </div>

        <div  id='alltask' className='h-[80%] overflow-auto '>
            {authData.employees.map((elem ,idx)=>{
            return <div key={idx} className='bg-transparent border-3 border-emerald-600 py-2 px-4  mb-2 flex justify-between rounded '>
            <h2 className='w-1/5'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-blue-800'>{elem.taskNumber.newTask} </h3>
            <h5 className='w-1/5 text-yellow-300'>{elem.taskNumber.active} </h5>
            <h5 className='w-1/5 text-green-300'>{elem.taskNumber.completed} </h5>
            <h5 className='w-1/5 text-red-600'>{elem.taskNumber.failed} </h5>
        </div>
      
        
        })}
        </div>
        
     

    </div>
  )
}
export default AllTask
