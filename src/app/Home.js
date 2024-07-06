 "use client"
 import getAllProducts from '@/request';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export default function Home() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect (()=>{
    const  getData =async () =>{
      setLoading(true);
      try {
        const data = await getAllProducts()
        setProducts(data)
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }
    getData();
  },[])

  return (
    <div className=''>
      <p className='text-2xl font-bold text-center  my-5 sm:my-12 '>All Product</p>
        {loading?(
            <div className='flex items-center justify-center my-20 '><AiOutlineLoading3Quarters size={45} className='animate-spin'/></div>
        ):(
          <div className='w-4/5 grid sm:grid-cols-4 sm:m-20 gap-5'>
            {products.map((product)=>{
              return (
                <div className=''><ProductCard product={product}/></div>
              )
            })}
          </div>
        )}
    </div>
  )
}
