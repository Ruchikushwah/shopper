"use client"
import { Card, CardBody } from '@material-tailwind/react'
import React from 'react'

const StaticCard = ({title, no, bg}) => {
  return (
    <Card color={bg} variant='gradient'>
        <CardBody>
            <h5 className='text-2xl font-bold'>{no}+</h5>
            <p className='text-lg'>{title}</p>

        </CardBody>
    </Card>
  )
}

export default StaticCard