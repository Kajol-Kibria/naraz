import { getCategory, getProduct } from '@/request'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {IoHeart, IoStar } from 'react-icons/io5';
export default async function ProductDetails({params}) {
        const id = params.id;
        const product = await getProduct(id);
        const related = await getCategory(product.category);
        const rate = Math.round(product.rating.rate);
        const rateArray = new Array(rate).fill(0);
        
  return (
    <div className='sm:px-44 px-10 sm:py-44 py-28'>
        <div className='sm:flex items-center justify-between'>
         <div className='sm:w-[40%]'><Image src={product.image} alt='image' width={400} height={300}/></div>
         <div className='sm:w-[60%]'>
          <h1 className='text-2xl font-bold'>{product.title}</h1>
          <div className='sm:w-[27%]'>
          <div className='flex gap-2 items-center my-4'>
            <p className='flex gap-1'>{rateArray.map(()=>{
            return <IoStar key={Math.random()} className='text-orange-500'/>
          })}</p>
          <div className='flex items-center gap-1'>(<p>{product.rating.count}</p> <p> Reviews</p>) </div>
          
          </div>
          <hr/>
          </div>
          <div >
          <p className='text-gray-900 text-4xl font-bold py-4'>${product.price}</p>
          <p className='my-4 sm:w-[70%]'>{product.description}</p>
          <p className='my-1'>Category: {product.category}</p>
          <p className='my-1'>Tag: Shop.kibria</p>
          <button className='bg-indigo-500 text-white py-2 w-44 rounded mt-4'>Add to cart</button>
         </div>
         </div>
        </div>
        <div className='sm:mt-28 mt-8'>
          <h1 className='font-bold text-2xl'>Related Products</h1>
          <div className='grid sm:grid-cols-4 grid-cols-1 justify-center items-center'>
            {related.map((a)=>{
              return <div key={a.id} className='w-[80%]'>
                <Link href={`./${a.id}`}><Image src={a.image} alt='image' width={100} height={100} className='w-[40%] h-[250px] object-contain mx-auto'/></Link>
                <Link href={`./${a.id}`}><p className='truncate hover:cursor-pointer hover:underline text-xl '>{a.title}</p></Link>
                <p className='flex gap-1 text-orange-400 my-2'>{(new Array(Math.round(a.rating.rate)).fill(0)).map(()=>{
                  return <IoStar key={Math.random()}/>
                })}</p>
                <div className='flex items-center gap-3 '>
                <p className='text-base line-through text-gray-700'>{`$${(a.price + 15).toFixed(2)}`}</p>
                <p className='text-xl font-bold'>${a.price}</p>
                </div>
                <div className='flex gap-6 items-center mt-4'>
                <button className='bg-indigo-500 text-white py-2 w-44 rounded'>Add to cart</button>
                <button className='p-1 h-10 bg-rose-500  text-white rounded'><IoHeart size={30}/></button>
                </div>
              </div>
            })}
          </div>
        </div>
    </div>
  )
}
