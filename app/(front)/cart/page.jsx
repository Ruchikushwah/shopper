import React from 'react'
import Heading from '../components/heading'
import { CartList } from './_components/cartlist'
import { PriceBreak } from './_components/priceBreke'
import CouponForm from './_components/couponForm'

const page = () => {
  return (

    <>
    <Heading color="bg-black" title="my cart" subtitle="manage  your cart  by adding some products"/>
    <div className='px[5%] flex flex-1 gap-4 mt-5'>
        <div className='w-9/12 ml-10'>
        <CartList />
        </div>
        <div className='w-3/12 mr-6'>
        <PriceBreak/>
        <CouponForm/>
        </div>
    </div>
    </>
  )
}

export default page