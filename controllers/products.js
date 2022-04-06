import Product from '../models/products'
export const listProduct = async (request,response)=>{
    const limit = +request.query.limit ;
    const populate = request.query.expand
    const sortBy = request.query.sortBy;
    const order = request.query.order ? request.query.order : 'asc';
    const page = +request.query.page 
    try {
      const product = await Product.find({}).limit(limit).sort({createdAt:order}).skip((page-1)*limit).exec();
      response.json(product)
    } catch (error) {
        response.status(400).json({message:"Lỗi không hiển thị được"})
    }
}
export const listProductDetail = async (request,response)=>{
    try {
        const product = await Product.findOne({_id:request.params.id}).exec();
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