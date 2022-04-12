import CateProduct from '../models/cateProduct';
import Product from '../models/products'
export const listProduct = async (request,response)=>{
    const limit = +request.query.limit
    const cateProductId = request.query.cateProductId
    const populate = request.query["_expand"]
    const start = request.query["_start"]
    let sortOpt = {};
    if (request.query["_sort"]) {
        const sortArr = request.query["_sort"].split(",");
        const orderArr = (request.query["_order"] || "").split(",");
        sortArr.forEach((sort, index) => {
            sortOpt[sort] = orderArr[index] === "desc" ? -1 : 1;
        });
    }
    try {
      const product = await Product
      .find({})
      .limit(limit)
      .skip(start)
      .populate(populate)
      .sort(sortOpt)
      .exec();
      if (cateProductId) {
          const productRelated = await Product.find({cateProductId:cateProductId}).limit(limit).exec()
            response.json({product,productRelated})
      }else{
          response.json(product)
      }
    } catch (error) {
        response.status(400).json({message:"Lỗi không hiển thị được"})
    }
}
export const listProductDetail = async (request,response)=>{
    const order = request.query.order
    const limit = +request.query.limit ;
    const populate = request.query["_expand"]
    try {
        const product = await Product
        .findOne({_id:request.params.id})
        .populate(populate)
        .exec();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Lỗi không hiển thị được"})
    }
}
export const createProduct = async (request,response)=>{
    try {
        const product = await Product(request.body).save()
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Khong the them san pham"})
    }
}
export const deleteProduct = async (request,response)=>{
    try {
        const product = await Product.findOneAndDelete({_id:request.params.id}).exec();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Không xóa được"})
    }
}
export const updateProduct = async (request,response)=>{
    try {
        const product = await Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Không sửa  được"})
    }
}