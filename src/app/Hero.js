import Image from 'next/image'
import React from 'react'


export default function Hero() {
  return (
    <div className='flex justify-center items-center gap-10 h-[calc(100vh-20vh)] mt-10 sm:px-44 px-10 '>
      <div className='sm:w-[50%]'>
        <h1 className='sm:text-6xl text-5xl font-bold uppercase'>mega sale <span className='text-rose-600'>Special</span> offer up to <span className='text-orange-400'>60%</span> off</h1>
        <p className='text-gray-800 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis est perspiciatis minus alias animi excepturi. Voluptatem repellat eveniet ad omnis suscipit nihil! Sint illum id quaerat, velit laboriosam nam!</p>
        <button className='bg-blue-600 mr-5'>Shop Now</button>
        <button>Explore More</button>
      </div>

      <Image className='w-[50%] sm:block hidden' src='/—Pngtree—shopping cart vector consumer online_5765763 (1).png' alt='shopping'  width={600} height={500} quality={100}/>
    </div>
  )
}
