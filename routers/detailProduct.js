const express = require("express");
const route = express.Router();

route.get("/product/:id",(request,respon)=>{
    respon.send(`
    <h1>Detail Product page </h1>
    ${request.params.id}
    `)
})
module.exports = route;