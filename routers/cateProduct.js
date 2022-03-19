import express from "express";
import { createCateProduct, deleteCateProduct, detailCateproduct, listCateProduct, upadteCateProduct } from "../controllers/cateProduct";
import { updateProduct } from "../controllers/products";
const cateProductRouter = express.Router();
cateProductRouter.get("/cateProduct",listCateProduct);
cateProductRouter.get("/cateProduct/:id",detailCateproduct);
cateProductRouter.put("/cateProduct/:id",upadteCateProduct);
cateProductRouter.delete("/cateProduct/:id",deleteCateProduct);
cateProductRouter.post("/cateProduct",createCateProduct);
export default cateProductRouter