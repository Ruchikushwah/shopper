"use client"

import { Button, Input } from '@material-tailwind/react'
import { formatDynamicAPIAccesses } from 'next/dist/server/app-render/dynamic-rendering'
import React from 'react'

const CouponForm = () => {
  return (
    
        <form action="" className='flex gap-2 border mt-5 p-5 w-full' method='post'>
        
        <Input type='text' placeholder='enter coupon code'/>
        <Button type='submit' className='bg-black text-white px-3 py-2'>Go</Button>

        </form>
       
  )
}

export default CouponForm