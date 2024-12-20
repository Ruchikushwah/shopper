import DbConnect from "@/utils/dbConnect";
import { ProductForm } from "../_components/productform";
import { redirect } from "next/navigation";
import products from "@/models/Product";
import slugify from "slugify";


const page = () => {



    const handleProductCreate = async (name)=>{
        "use server";
        DbConnect();

        let data = await products.create({name, slug:slugify(name)});
        redirect("/admin/products");
    }
  return (
    <div className=" flex flex-1 justify-center">
    <ProductForm handleProductCreate={handleProductCreate}/>
    </div>
  )
}

export default page