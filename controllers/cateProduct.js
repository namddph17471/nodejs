import CateProduct from "../models/cateProduct";
import Product from "../models/products";

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
export const listdetailCateproduct = async(request,response)=>{
    try {
        const cateProduct = await CateProduct.findOne({_id:request.params.id}).exec();
        // const product = await Product.find({cateProduct}).exec()
        // const product = await Product.find({cateProduct}).select("-cateProduct").exec()
        const product = await Product.find({cateProduct}).populate("cateProduct").exec()

        response.json({cateProduct,product});
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