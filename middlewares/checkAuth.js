import expressJwt from 'express-jwt'

export const requiredSignin = expressJwt({
    secret:"123456",
    algorithms:["HS256"],
    requestProperty: "auth"
})
export const isAuth = (request,response,next)=>{
    
    if (!(request.profile._id == request.auth._id)) {
        return response.status(400).json({
            message:"Bạn không có quyền truy cập"
        })
    }
    next()
}
export const isAdmin = (request,response,next)=>{
    if(request.profile.role == 0 ){
        response.status(400).json({
            message:"Bạn không phải Admin"
        })
    }
    next()
}