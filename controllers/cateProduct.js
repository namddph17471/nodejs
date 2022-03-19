import { response } from "express";
import { request } from "express";
import CateProduct from "../models/cateProduct";
export const listCateProduct = async(request,response)=>{
    try {
        const cateProduct = await CateProduct.find({}).exec();
        response.json(cateProduct);
    } catch (error) {
        response.status(400).json({message:"Không hiển thị được"});
    }
}
export const createCateProduct = async(request,response)=>{
    try {
        const cateProduct = await CateProduct(request.body).save();
        response.json(cateProduct);
    } catch (error) {
        response.status(400).json({message:"Không thêm được"});
    }
}
export const detailCateproduct = async(request,response)=>{
    try {
        const cateProduct = await CateProduct.find({_id:request.params.id}).exec();
        response.json(cateProduct);
    } catch (error) {
        response.status(400).json({message:"Lỗi Không hiển thị được"})
    }
}
export const upadteCateProduct = async(request,response)=>{
    try {
        const cateProduct = await CateProduct.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec();
        response.json(cateProduct);
    } catch (error) {
        response.status(400).json({message:"Lỗi Không cập nhật được"})
    }
}
export const deleteCateProduct = async(request,response)=>{
    try {
        const cateProduct = await CateProduct.findOneAndDelete({_id:request.params.id}).exec();
        response.json(cateProduct);
    } catch (error) {
        response.status(400).json({message:"Lỗi Không cập nhật được"})
    }
}