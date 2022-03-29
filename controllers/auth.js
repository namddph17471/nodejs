import User from '../models/users'

export const signup = async (request, response)=>{
    const {email, name, password} = request.body
    try {
        const exitUser = await User.findOne({email}).exec()
        if (exitUser) {
            response.json({
                message:"Email đã tồn tại"
            })
        }
        const user = await User({email,password, name}).save()
        response.json({
            user:{
                _id:user.id,
                name:user.name,
                email:user.email
            }
        })
    } catch (error) {
        response.status(400).json({
            message:"Lỗi"
        })
    }
}
export const signin = async (request,response)=>{
    const {email,  password} = request.body
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            response.status(400).json({
                message: "email không tồn tại"
            })
        }
        if(!user.authenticate(password)){
            response.status(400).json({
                message: "Sai mật khẩu"
            })
        }
        response.json({
            user:{
                _id:user.id,
                name:user.name,
                email:user.email,
                role:user.role
            }
        })
    } catch (error) {
        
    }
}