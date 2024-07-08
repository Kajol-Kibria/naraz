import React from 'react'
import { FaStoreAlt } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import Link from 'next/link';




export default function Navbar() {
  return (
    <div className='flex justify-between sm:px-44 px-10 py-8 shadow-md top-0 fixed w-[100%] bg-white'>
      
      <Link href='/'><div className='flex items-center gap-2 cursor-pointer'>
        <FaStoreAlt className='text-orange-600 text-3xl'/>
        <span className='text-xl font-bold'>Naraz</span>
      </div></Link>
      <div className='flex items-center sm:gap-10 gap-4 text-2xl font-bold '>
        <FiSearch/>
        <GoHeart/>
        <LuShoppingBag/>

       
          <button className='bg-blue-500 py-1 sm:px-3 px-1 sm:text-sm text-xs text-white rounded-md'>Sign In</button>
        
        
      
      </div>
      
    </div>
  )
}
