"use client"

import { CategoriesList } from "../../components/categories-list"
import Heading from "../../components/heading"
import ProductSection from "../../product-section"

const page = ({params}) => {
  const {category_slug}=params;
  return (
    <div>
      <Heading color="bg-orange-700" title={category_slug} subtitle="total 0 products found"/>
   
      
      <div className='flex flex-1 px-[5%] my-5 gap-20'>
        <div className='w-3/12 py-5'>
          <CategoriesList/>
        </div>
        <div className='w-9/12 '>
          <ProductSection/>
        </div>
      </div>
      

    </div>
  )
}

export default page