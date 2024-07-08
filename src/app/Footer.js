import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaStoreAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='w-[80%] mx-auto'>
        <div className='sm:flex justify-between gap-10 mb-7 sm:mt-28 mt-20'>
        <div className='text-lg text-gray-600 space-y-3 sm:w-[25%] mb-10'>
        <Link href='/'><div className='flex items-center gap-2 cursor-pointer'>
        <FaStoreAlt className='text-orange-600 text-3xl'/>
        <span className='text-xl font-bold text-black'>Naraz</span>
      </div></Link>
            <p className='text-sm font-bold'>Naraz is the top ecommerce website in the country.</p>
            <p className='text-sm font-bold'>01402874542</p>
            <p className='text-sm font-bold'>kajolkibria95@gmail.com</p>
        </div>
        <div className='text-lg text-gray-600 space-y-3 sm:w-[25%] mb-10'>
            <h1 className='text-xl font-bold text-black'>Information</h1>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'>About us</p>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'>Privacy Policy</p>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'>Return Policy</p>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'>Dropshiping</p>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'>Shipping Policy</p>
        </div>
        <div className='text-lg text-gray-600 space-y-3 sm:w-[25%] mb-10'>
            <h1 className='text-xl font-bold text-black'>Account</h1>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'>Dashboard</p>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'>My orders</p>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'>Account Details</p>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'>Track Orders</p>
        </div>
        <div className='text-lg text-gray-600 space-y-3 sm:w-[25%] mb-10'>
            <h1 className='text-xl font-bold text-black'>Shop</h1>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'>Affiliate</p>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'>Best Sellers</p>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'> Latest Products</p>
            <p className='text-sm font-bold cursor-pointer hover:text-gray-900 hover:ml-1 transition-all duration-200'> Sale Products</p>
        </div>
        </div>
        <hr/>
        <div className='flex justify-between items-center py-7'>
        <p className='sm:text-sm text-xs'>Copyright kajolkibria 2024</p>
        <Image src='/pay.png' alt='pay' width={300} height={100} className='w-[25%]'/>
        </div>
    </div>
  )
}
