const products = [
    {id:1,name:"Vô thủy"},
    {id:2,name:"Từ"}
]
export const listProduct = (request,respon)=>{
    respon.json(products)
    
}
export const listProductDetail = (request,respon)=>{
    const product = products.find(item => item.id == +request.params.id);
    respon.json(product)
}
export const createProduct = (request,respon)=>{
    products.push(request.body)
    respon.json(products)
}
export const deleteProduct = (request,respon)=>{
    const newProducts = products.filter(item => item.id !== +request.params.id);
    respon.json(newProducts)
}
export const updateProduct = (request,respon)=>{
    respon.json( products.map(item => item.id === +request.params.id ? request.body:item))
}