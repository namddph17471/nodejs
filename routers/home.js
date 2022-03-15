import express from "express";

const homeRouter = express.Router();
homeRouter.get("/",(request,respon)=>{
    respon.send(`
    <h1>Home page </h1>
    `)
})
export default homeRouter