import { NextResponse } from 'next/server';
import {writeFile} from "fs/promises";
import React from 'react' 
 export async function POST(request){

 
const formData = await request.formData();
const file = formData.get("image");
if(!file){


  return NextResponse.json({success:false,message:"no file provided"});
}
const bytes = await file.arrayBuffer();
const buffer = Buffer.from(bytes);

 try{
    await writeFile(`./public/productImage/${file.name}`,buffer);
    return NextResponse.json({success:true, message:"file uplaoded successfully"});
 }
 catch(error){
return NextResponse.json({success:false, message:"error uploading file:" + error.message});
 }
 }