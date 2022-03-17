import express from "express";
const detailProductRouter = express.Router();
const products = [
    {id:1,name:"Vô thủy"},
    {id:2,name:"Từ"}
]
detailProductRouter.get("/products/:id",(request,respon)=>{
    const product = products.find(item => item.id == +request.params.id);
    respon.json(product)
})
export default detailProductRouter;