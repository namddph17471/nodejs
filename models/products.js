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
    cateProduct:{
        type: ObjectId,
        ref:"CateProduct"
    }
},{timestamps:true})
export default mongoose.model('Product',productSchema) 