import React from 'react'

const Heading = ({color,title,subtitle}) => {
    return (
        <div className={`flex flex-1 flex-col gap-2 ${color} text-white py-8 px-[8%]`}>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p className='text-xs font-light'>{subtitle}</p>
        </div>
    )
}

export default Heading