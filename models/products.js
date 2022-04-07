import mongoose ,{ObjectId}from "mongoose";
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        number:true
    },
    image:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    cateProductId:{
        type: ObjectId,
        ref:"CateProduct",
        required:true
    }
},{timestamps:true})
export default mongoose.model('Product',productSchema) 