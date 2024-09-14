"use client"

import { Button, Input, Typography } from '@material-tailwind/react'
import {  useRouter } from 'next/navigation';




import { useState } from 'react'


const PriceForm = ({ label, field, productid }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [price, setPrice] = useState(field);
    const router = useRouter();

    
    const handleUpdate = async () =>{
        try{
            await fetch(`http://localhost:3000/api/product/${productid}`,{
                method: "PUT",
                headers: {
                    "content-Type": "application/json",

                },
                body: JSON.stringify({price}),
            })
        }
        catch(error){
            console.log(error)
        }
        setIsEdit(false);
        setPrice(field);
        router.refresh();
    }

    return (
        <div>
            <form className=" flex flex-1 bg-red-100 p-8 ">
                <div className="mb-1 flex flex-col gap-6 flex-1 ">
                    <div className='flex justify-between items-center pb-2 border-b flex-1 '>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 ">
                            {label}
                        </Typography>
                        <Button size='sm' onClick={() => setIsEdit(!isEdit)}>Edit</Button>

                    </div>

                    {isEdit ? <div className='flex '>


                        <Input
                            size="lg"
                            value={price}
                            onChange={(e)=> setPrice(e.target.value)}
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white "
                            labelProps={{
                                className: "before:content-none after:content-none ",
                            }}
                        />
                        <Button className="rounded" onClick={handleUpdate}>
                            go
                        </Button>

                    </div>: ((field) ? <p className=' text-xl '>{field}</p>: <p className='text-xl italic'>{label} in empty</p>)
                    }



                </div>
            </form>

        </div>

    )
}

export default PriceForm