// Bước 1 ; include thư viên http
import express from "express";
import mongoose from "mongoose";
import homeRouter from "./routers/home";
import productRouter from "./routers/product";
import newRouter from "./routers/new";
import cateProductRouter from "./routers/cateProduct";
import userRouter from "./routers/user";
import cors from 'cors';
import authRouter from "./routers/auth";
import cateNewRouter from "./routers/cateNew";
const app = express();

app.use(express.json());
app.use(cors())
app.use(homeRouter);
app.use("/api",productRouter);
app.use("/api",cateProductRouter)
app.use("/api",authRouter);
app.use("/api",newRouter);
app.use("/api",userRouter);
app.use("/api",cateNewRouter)
mongoose.connect('mongodb://localhost:27017/web16307');
const port = 3001;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})