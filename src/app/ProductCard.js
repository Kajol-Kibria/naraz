import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoHeart, IoStar } from 'react-icons/io5';

export default function ProductCard({product}) {
  const rat = Math.round(product.rating.rate);
  const ratingArray = new Array(rat).fill(0);
  return (
    <div>
            <div className=''>
            <Link href={`./product/product-details/${product.id}`}><Image src={product.image} alt='image' width={200} height={150} className='w-[60%] h-[300px] object-contain mx-auto mt-16'/></Link>
                <div className='px-8 space-y-2 mt-8 w-[90vw] sm:w-96 '>
                <p className='text-gray-500 '>{product.category}</p>
                <Link href={`./product/product-details/${product.id}`}><p className='truncate hover:cursor-pointer hover:underline text-xl '>{product.title}</p></Link>
                <p className='flex gap-1 text-orange-400 '>{ratingArray.map(()=>{
                  return <IoStar/>
                })}</p>
                <div className='flex items-center gap-3 '>
                <p className='text-base line-through text-gray-700'>{`$${(product.price + 15).toFixed(2)}`}</p>
                <p className='text-xl font-bold'>${product.price}</p>
                </div>
                <div className='flex gap-6 items-center '>
                <button className='bg-indigo-500 text-white py-2 w-44 rounded'>Add to cart</button>
                <button className='p-1 h-10 bg-rose-500  text-white rounded'><IoHeart size={30}/></button>
                </div>
                </div>
            </div>
    </div>
  )
}
