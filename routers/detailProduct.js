import express from "express";
const detailProductRouter = express.Router();

detailProductRouter.get("/product/:id",(request,respon)=>{
    respon.send(`
    <h1>Detail Product page </h1>
    ${request.params.id}
    `)
})
export default detailProductRouter;