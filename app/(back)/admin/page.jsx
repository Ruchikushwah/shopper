import React from 'react'
import StaticCard from './components/static-card'

const page = () => {
  return (
    <div className='grid grid-cols-4  gap-5'>
      <StaticCard bg="indigo" title="total product" no={0}/>
      <StaticCard bg="pink" title="total Order" no={0}/>
      <StaticCard bg="yellow" title="total categories" no={0}/>
      <StaticCard bg="green" title="total customer" no={0}/>
    </div>
  )
}

export default page