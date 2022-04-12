import express from "express";
import { create, detail, list, remove, update } from "../controllers/news";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
const newRouter = express.Router();
newRouter.get("/news",list)
newRouter.get("/news/:id",detail)
newRouter.delete("/news/:id/:userId",requiredSignin,isAuth,isAdmin,remove)
newRouter.put("/news/:id/:userId",requiredSignin,isAuth,isAdmin,update)
newRouter.post("/news/:userId",requiredSignin,isAuth,isAdmin,create)

newRouter.param("userId",userById)
export default  newRouter;