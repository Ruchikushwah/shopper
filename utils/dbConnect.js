import mongoose from "mongoose";

export default function DbConnect(){
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("connected to mongoDB");

    }
    catch(err){
        console.error("failed to connect to MongoDB",err);
    }

}