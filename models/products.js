import mongoose from "mongoose"
import category1 from "./category1"

const ProductsSchema = new mongoose.Schema({
    name:{type:String,required:true},
    slug:{type:String,required:true},
    category:{type:mongoose.Schema.Types.ObjectId,default:null,ref:category1},
    price:{type:Number,default:null},
    discount_price:{type:Number,default:null},
    stock:{type:Number,default:null},
    description:{type:String,default:null},
    barcode:{type:String,default:null},
    image:{type:String,default:null},
    brand:{type:String,default:null},
})

// delete mongoose.models.products

export default mongoose.models.products || mongoose.model("products",ProductsSchema);