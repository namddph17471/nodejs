import express from "express";
const productRouter = express.Router();
const products = [
    {id:1,name:"Vô thủy"},
    {id:2,name:"Từ"}
]
productRouter.get("/products",(request,respon)=>{
    respon.json(products)
    
})
productRouter.post("/products",(request,respon)=>{
    products.push(request.body)
    respon.json(products)
})
productRouter.delete("/products/:id",(request,respon)=>{
    const newProducts = products.filter(item => item.id !== +request.params.id);
    respon.json(newProducts)
})
productRouter.put("/products/:id",(request,respon)=>{
    respon.json( products.map(item => item.id === +request.params.id ? request.body:item))
})
export default productRouter;