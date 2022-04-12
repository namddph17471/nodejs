
import User from '../models/users'

export const userById = async (request,response,next,id)=>{
    try {
        const user = await User.findById(id).exec()
        if (!user) {
            return response.status(400).json({
                message:"User không tồn tại"
            })
        }
        request.profile = user;
        request.profile.password = undefined;
        next()
    } catch (error) {
        
    }
}
export const getUser = async (request,response)=>{
    try {
        const user = await User.find({}).exec()
        response.json(user)
    } catch (error) {
        response.status(400).json({
            message:"Không lấy được danh sách User"
        })
    }
}
export const getOneUser = async (request,response)=>{
    try {
        const user = await User.findOne({_id:request.params.id}).exec()
        response.json(user)
    } catch (error) {
        response.status(400).json({
            message:"Không lấy được danh sách User"
        })
    }
}
export const updateInfo = async (request,response)=>{
    try {
        const user = await User.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec();
        response.json(user);
    } catch (error) {
        response.status(400).json({message:"Không sửa  được"})
    }
}
export const removeUser = async (request,response)=>{
    try {
        const user = await User.findOneAndDelete({_id:request.params.id}).exec()
        response.json(user)
    } catch (error) {
        response.status(400).json({
            message:"Không xóa được"
        })
    }
}