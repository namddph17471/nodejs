import express from "express";
import { createCateProduct, deleteCateProduct, listdetailCateproduct, listCateProduct, upadteCateProduct } from "../controllers/cateProduct";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
const cateProductRouter = express.Router();
cateProductRouter.get("/cateProduct",listCateProduct);
cateProductRouter.get("/cateProduct/:id",listdetailCateproduct);
cateProductRouter.put("/cateProduct/:id",upadteCateProduct);
cateProductRouter.delete("/cateProduct/:id",deleteCateProduct);
cateProductRouter.post("/cateProduct/:userId",requiredSignin,isAuth,isAdmin,createCateProduct);


cateProductRouter.param("userId",userById)
export default cateProductRouter