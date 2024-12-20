import React from 'react'
import { ProductCard } from './product-card'
import Products from '@/models/Product';

const ProductSection = async ({ searchTerm }) => {

let query = (searchTerm ? {status:true, category:searchTerm} : {status:true})
  let products = await Products.find(query);
  return (
    <div className='grid gap-5 grid-cols-2 md:grid-cols-4'>

      {
      (products.length >0) ?
      products.map((products, index) => <ProductCard data={products} key={index} />) :
    <h2>no product found</h2>


      }
    </div>
  )
}

export default ProductSection