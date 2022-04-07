import express from "express";
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
const productRouter = express.Router();

productRouter.get("/products",listProduct)
productRouter.get("/products/:id",listProductDetail)
productRouter.post("/products/:userId",requiredSignin,isAuth,isAdmin, createProduct)
productRouter.delete("/products/:id/:userId",requiredSignin,isAuth,isAdmin,deleteProduct)
productRouter.put("/products/:id/:userId",requiredSignin,isAuth,isAdmin,updateProduct)


productRouter.param("userId",userById)
export default productRouter;