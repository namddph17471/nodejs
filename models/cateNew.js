import mongoose from "mongoose";
const cateNewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps:true})
export default mongoose.model("CateNew",cateNewSchema)