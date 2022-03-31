import express from "express";
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";
import { userById } from "../controllers/user";
const productRouter = express.Router();

productRouter.get("/products",listProduct)
productRouter.get("/products/:id",listProductDetail)
productRouter.post("/products/:userId",createProduct)
productRouter.delete("/products/:id",deleteProduct)
productRouter.put("/products/:id",updateProduct)


productRouter.param("userId",userById)
export default productRouter;