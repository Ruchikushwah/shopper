import mongoose from "mongoose"

const  Category1Schema = new mongoose.Schema({
    cat_title:{
        type:String,required:true
    },
    cat_description:{type:String,required:true},

},
{
    timestamps:true
})

//delete mongoose.models.Category1
 export default mongoose.models.Category1 || mongoose.model("Category1",Category1Schema);
 