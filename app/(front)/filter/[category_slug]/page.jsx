"use client"

import Category1 from "@/models/Category1"
import { CategoriesList } from "../../components/categories-list"
import Heading from "../../components/heading"
import ProductSection from "../../product-section"

const page =  async({params}) => {
  const {category_slug}=params;
  let categoriesDetails = await Category1.findById(ategory_slug)
  let categories = await Category1.find({});

  return (
    <div>
      <Heading color="bg-orange-700" title={`your search term "$(categoriesDetails.cat_title}"`} subtitle="total 0 products found"/>
   
      
      <div className='flex flex-1 px-[5%] my-5 gap-20'>
        <div className='w-3/12 py-5'>
          <CategoriesList data={categories}/>
        </div>
        <div className='w-9/12 '>
          <ProductSection searchTerm ={category_slug}/>
        </div>
      </div>
      

    </div>
  )
}

export default page