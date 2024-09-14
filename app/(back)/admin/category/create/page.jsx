import DbConnect from '@/utils/dbConnect'
import { CategoryForm } from './_components/categoryform';
import { redirect } from 'next/navigation';
import category1 from '@/models/category1';



const page = () => {

  const handleInsertCategory = async (cat_title,cat_description) =>{
    "use server"
    DbConnect();
    let data = await category1.create({cat_title,cat_description})

    redirect("/admin/category")
  }

  return(
    <div className=' flex flex-1 justify-center'>
      <CategoryForm handleInsertCategory = {handleInsertCategory}/>

    </div>
  )
 
}

export default page