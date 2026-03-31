import React from 'react'

const FailedTask = ({data}) => {
    return (
  <div className='shrink-0 h-full basis-[350px] bg-green-400 p-5 rounded-xl '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm '>{data.category}</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
           <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
  <div className='flex justify-between mt-4 '>
                <button className='bg-red-500 py-1 px-2 text-sm w-full'>Failed</button>

            </div>
        </div>
    )
}

export default FailedTask