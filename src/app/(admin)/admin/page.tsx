import React from 'react'

const page = async () => {
  
  return (
    <section className='grid h-screen grid-cols-3 grid-rows-3 gap-5'>
      <div className='bg-gray-100 w-full p-2 rounded-lg h-full'>
        <p></p>
      </div>
      <div className='bg-gray-100 rounded-lg w-full h-full'></div>
      <div className='bg-gray-100 rounded-lg w-full h-full'></div>
      <div className='bg-gray-100 rounded-lg col-span-2 row-span-2 w-full h-full'></div>
      <div className='bg-gray-100 rounded-lg row-span-2 w-full h-full'></div>
    </section>
  )
}

export default page