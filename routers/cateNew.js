import express from "express";
import { createCateNew, deleteCateNew, listCateNew, listdetailCateNew, upadteCateNew } from "../controllers/cateNew";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
const cateNewRouter = express.Router();
cateNewRouter.get("/cateNew",listCateNew);
cateNewRouter.get("/cateNew/:id",listdetailCateNew);
cateNewRouter.put("/cateNew/:id/:userId",requiredSignin,isAuth,isAdmin,upadteCateNew);
cateNewRouter.delete("/cateNew/:id/:userId",requiredSignin,isAuth,isAdmin,deleteCateNew);
cateNewRouter.post("/cateNew/:userId",requiredSignin,isAuth,isAdmin,createCateNew);


cateNewRouter.param("userId",userById)
export default cateNewRouter