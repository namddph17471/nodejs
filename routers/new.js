const express = require("express");
const route = express.Router();
route.get("/news",(request,respon)=>{
    respon.send(`
    <h1>News page </h1>
    `)
})

module.exports = route;