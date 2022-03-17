// Bước 1 ; include thư viên http
import express from "express";
import homeRouter from "./routers/home";
import productRouter from "./routers/product";
import newRouter from "./routers/new";
import detailProductRouter from "./routers/detailProduct";
const app = express();

app.use(express.json());
app.use(homeRouter);
app.use("/api",productRouter);
app.use(newRouter);
app.use("/api",detailProductRouter);

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
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})