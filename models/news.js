import mongoose,{ObjectId} from "mongoose";

const newSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    cateNewId:{
        type: ObjectId,
        ref:"CateNew",
        required:true
    }
},{timestamps:true})
export default mongoose.model("New",newSchema)