import express from "express";

const homeRouter = express.Router();
homeRouter.get("/",(request,respon)=>{
    respon.send(`
    <div style="text-align:center">
    <h1>Home page </h1>
    <a href="/api/products">Product</a>
    </div>
    `)
})
export default homeRouter