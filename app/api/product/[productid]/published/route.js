import DbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export  async function PUT(request, {params}){
    const productid = params.productid;
    DbConnect();
    const publishedProduct = await productid.findByIdAndUpdate(productid,{status:true})
    return NextResponse.json({"msg":"product published  successfully"});
}