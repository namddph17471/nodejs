import mongoose from "mongoose";
import {createHmac} from 'crypto'
const userSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true})
userSchema.methods = {
    authenticate(password){ //123456
        return this.password == this.encrytPassword(password);
    },
    encrytPassword(password){
        if(!password) return 
        try {
            return createHmac("sha256", "abcs").update(password).digest("hex");
        } catch (error) {
            console.log(error)
        }
    }
}
userSchema.pre("save", function(next){
    this.password = this.encrytPassword(this.password);
    next()
})

export default mongoose.model("User",userSchema)