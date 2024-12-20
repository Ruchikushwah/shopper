import mongoose from "mongoose"
import Category1 from "./Category1";

const ProductsSchema = new mongoose.Schema({
    name:{type:String,required:true},
    slug:{type:String,required:true},
    category:{type:mongoose.Schema.Types.ObjectId,default:null,ref:Category1},
    price:{type:Number,default:null},
    discount_price:{type:Number,default:null},
    stock:{type:Number,default:null},
    description:{type:String,default:null},
    barcode:{type:String,default:null},
    image:{type:String,default:null},
    brand:{type:String,default:null},
    status:{type:Boolean,default:false},
    
})
//delete mongoose.models.products

export default mongoose.models.products || mongoose.model("products",ProductsSchema);