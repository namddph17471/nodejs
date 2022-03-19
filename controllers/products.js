import Product from '../models/products'
// const products = [
//     {id:1,name:"Vô thủy"},
//     {id:2,name:"Từ"}
// ]
export const listProduct = async (request,response)=>{
    // response.json(products)
    try {
      const product = await Product.find({}).exec();
      response.json(product)
    } catch (error) {
        response.status(400).json({message:"Lỗi không hiển thị được"})
    }
}
export const listProductDetail = async (request,response)=>{
    // const product = products.find(item => item.id == +request.params.id);
    // respon.json(product)
    try {
        const product = await Product.findOne({_id:request.params.id}).exec();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Lỗi không hiển thị được"})
    }
}
export const createProduct = async (request,response)=>{
    // products.push(request.body)
    // response.json(products)
    try {
        const product = await Product(request.body).save()
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Khong the them san pham"})
    }
}
export const deleteProduct = async (request,response)=>{
    // const newProducts = products.filter(item => item.id !== +request.params.id);
    // respon.json(newProducts)
    try {
        const product = await Product.findOneAndDelete({_id:request.params.id}).exec();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Không xóa được"})
    }
}
export const updateProduct = async (request,response)=>{
    // respon.json( products.map(item => item.id === +request.params.id ? request.body:item))
    try {
        const product = await Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Không sửa  được"})
    }
}