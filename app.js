// Bước 1 ; include thư viên http
import express from "express";
import mongoose from "mongoose";
import homeRouter from "./routers/home";
import productRouter from "./routers/product";
import newRouter from "./routers/new";
import cateProductRouter from "./routers/cateProduct";
import userRouter from "./routers/user";
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors())
app.use(homeRouter);
app.use("/api",productRouter);
app.use("/api",cateProductRouter)
app.use("/api",userRouter);
app.use(newRouter);
mongoose.connect('mongodb://localhost:27017/web16307');
const port = 3001;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})