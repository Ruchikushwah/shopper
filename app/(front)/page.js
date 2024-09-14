"use client"
import React from 'react'
import { Banner } from './components/banner'
import { CategoriesList } from './components/categories-list'
import ProductSection from './product-section'
import DbConnect from '@/utils/dbConnect'
import category1 from '@/models/category1'


const page =  async() => {
  DbConnect();
  let categories = await category1.find({});
  return (
    <div>
   
      <Banner/>
      <div className='flex flex-1 px-[5%] my-5 gap-20'>
        <div className='w-3/12 py-5'>
          <CategoriesList   data={categories}/>
        </div>
        <div className='w-9/12 '>
          <ProductSection/>
        </div>
      </div>
      

    </div>
  )
}

export default page