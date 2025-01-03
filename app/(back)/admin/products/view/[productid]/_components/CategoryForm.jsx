"use client"
import { Button, Option, Select, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react'

export default function CategoryForm ({label, field, productid, data, cat_id}) {

    const [isEdit, setIsEdit] = useState(false);
    const [category, setCategory] = useState(field);

    const router = useRouter();

    const handleUpdate = async () => {
        try{
          await fetch(`http://localhost:3000/api/product/${productid}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({category}),
          })
        }
        catch(error){
          console.log(error)
        }

        setIsEdit(false);
        setCategory(field);
        router.refresh();
  
    }

  return (
    <form className="mt-8 mb-2 flex-1 bg-gray-200 p-5 rounded-lg">
    <div className="mb-1 flex flex-col gap-6">
      <div className="flex justify-between items-center pb-2 border-b">
      <Typography variant="h6" color="blue-gray" className="-mb-3 flex-1">
        {label}
      </Typography>
      <Button size="sm" onClick={() => setIsEdit(!isEdit)}>Edit</Button>
      </div>
     {
        isEdit ? <div className="flex">
        <Select label={label} value={cat_id} onChange={(val) => setCategory(val)}
          className="rounded-none flex-1 bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        >
            {
                data.map((category, i) => (
                    <Option value={category._id}>{category.cat_title}</Option>
                ))
            }
            
        </Select>
          <Button className="rounded-none w-auto" onClick={handleUpdate}>
            Go
          </Button>
        </div> : ((field) ? <p className="text-xl">{field}</p> : <p className="text-xl italic">{label} in empty</p>)
     }
      </div>
      </form>
  )
}