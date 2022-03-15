import express from "express";
const newRouter = express.Router();
newRouter.get("/news",(request,respon)=>{
    respon.send(`
    <h1>News page </h1>
    `)
})

export default  newRouter;