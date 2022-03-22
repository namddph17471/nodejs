import mongoose from "mongoose";
const cateProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true})
export default mongoose.model("CateProduct",cateProductSchema)