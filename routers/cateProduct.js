import express from "express";
import { createCateProduct, deleteCateProduct, listdetailCateproduct, listCateProduct, upadteCateProduct } from "../controllers/cateProduct";
const cateProductRouter = express.Router();
cateProductRouter.get("/cateProduct",listCateProduct);
cateProductRouter.get("/cateProduct/:id",listdetailCateproduct);
cateProductRouter.put("/cateProduct/:id",upadteCateProduct);
cateProductRouter.delete("/cateProduct/:id",deleteCateProduct);
cateProductRouter.post("/cateProduct",createCateProduct);
export default cateProductRouter