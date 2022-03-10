// Bước 1 ; include thư viên http
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

app.get("/",(request,respon)=>{
    respon.send(`
    <h1>Home page </h1>
    `)
})
// Khỏi tạo server
// const server = http.createServer((request,respon)=>{
//     if (request.url === "/") {
//         // console.log("Home Page");
//         respon.setHeader("Content-Type","text/html");// 
//         respon.write("<h1>Home page </h1>");// hiện thị ra màn hình
//         respon.end  //kết thúc
//     };
//     if (request.url === "/product") {
//         // console.log("Product Page");
//         respon.setHeader("Content-Type","text/html");
//         respon.write("<h1>Product page</h1>");
//         respon.end  //kết thúc
//     };
//     if (request.url === "/news") {
//         // console.log("Product Page");
//         respon.setHeader("Content-Type","text/html");
//         respon.write("<h1>New page</h1>");
//         respon.end  //kết thúc
//     };
// });
//bước 3: lắng nghe cổng thực thi
const port = 3001;
server.listen(port,()=>{
    console.log(`server is running on ${port}`);
})