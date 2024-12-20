"use client"

import { Button } from "@material-tailwind/react"
import { useRouter } from "next/navigation"

const PublishButton = ({className, isDisable, productid}) => {
 
  const router = useRouter();

  const handlePublish = async() =>{
    await fetch(`http://localhost:3000/api/product/${productid}/published`,{
      method:"PUT",

    })
    router.refresh();
    
  }
  return (
    <div>
        <Button disabled={isDisable} className={className} onClick={handlePublish}>Publish Product </Button>
    </div>
  )
}

export default PublishButton