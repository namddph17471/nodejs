import CateNew from "../models/cateNew";
import New from "../models/news";

export const listCateNew = async(request,response)=>{
    try {
        const cateNew = await CateNew.find({}).exec();
        response.json(cateNew);
    } catch (error) {
        response.status(400).json({message:"Không hiển thị được"});
    }
}
export const createCateNew = async(request,response)=>{
    try {
        const cateNew = await CateNew(request.body).save();
        response.json(cateNew);
    } catch (error) {
        response.status(400).json({message:"Không thêm được"});
    }
}
export const listdetailCateNew = async(request,response)=>{
    try {
        const cateNew = await CateNew.findOne({_id:request.params.id}).exec();
        // const product = await Product.find({CateNew}).exec()
        // const product = await Product.find({CateNew}).select("-CateNew").exec()
        const news = await New.find({cateNewId:request.params.id}).populate("cateNewId").exec()

        response.json({cateNew,news});
    } catch (error) {
        response.status(400).json({message:"Lỗi Không hiển thị được"})
    }
}
export const upadteCateNew = async(request,response)=>{
    try {
        const cateNew = await CateNew.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec();
        response.json(cateNew);
    } catch (error) {
        response.status(400).json({message:"Lỗi Không cập nhật được"})
    }
}
export const deleteCateNew = async(request,response)=>{
    try {
        const cateNew = await CateNew.findOneAndDelete({_id:request.params.id}).exec();
        response.json(cateNew);
    } catch (error) {
        response.status(400).json({message:"Lỗi Không cập nhật được"})
    }
}