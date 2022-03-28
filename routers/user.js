import express from "express";
import { signin, signup } from "../controllers/auth";
const userRouter = express()

userRouter.post("/signup",signup)
userRouter.post("/signin",signin)
export default userRouter