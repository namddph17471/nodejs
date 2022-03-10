const express = require("express");
const route = express.Router();
route.get("/",(request,respon)=>{
    respon.send(`
    <h1>Home page </h1>
    `)
})

module.exports = route;