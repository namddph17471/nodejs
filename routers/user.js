import express from "express";
import { getOneUser, getUser, removeUser, updateInfo, userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
const userRouter = express()

userRouter.get("/users",getUser)
userRouter.get("/users/:id",getOneUser)
userRouter.delete("/users/:id/:userId",requiredSignin,isAuth,isAdmin,removeUser)
userRouter.put("/users/:id/:userId",requiredSignin,isAuth,updateInfo)
userRouter.param("userId",userById)
export default userRouter