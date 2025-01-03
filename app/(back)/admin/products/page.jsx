import React from 'react'
import { ProductCalling } from './_components/productCalling'

import products from '@/models/Product'
import Link from 'next/link';

const page = async () => {

  const product = await products.find({});
  return (
    <div>
      <div className='flex flex-1 justify-between items-center mb-4'>
        <h2 className='text-2xl text-pink-700 font-semibold '>Manage Product</h2>

        < Link href='/admin/products/create'>
          <button className='bg-blue-800 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded'>
            Add New products
          </button>
        </Link>


      </div>
      <ProductCalling data={product} />
    </div>
  )
}

export default page