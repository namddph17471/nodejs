import express from "express";
const newRouter = express.Router();
newRouter.get("/news",(request,respon)=>{
    respon.send(`
    <div style="text-align:center">
    <h1>New page </h1>
    </div>
    `)
})

export default  newRouter;