import express from "express";
const productRouter = express.Router();
productRouter.get("/product",(request,respon)=>{
    respon.send(`
    <h1>Product page </h1>
    `)
})

export default productRouter;