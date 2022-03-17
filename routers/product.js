import express from "express";
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";
const productRouter = express.Router();

productRouter.get("/products",listProduct)
productRouter.get("/products/:id",listProductDetail)
productRouter.post("/products",createProduct)
productRouter.delete("/products/:id",deleteProduct)
productRouter.put("/products/:id",updateProduct)
export default productRouter;