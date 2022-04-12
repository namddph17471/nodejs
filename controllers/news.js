import New from "../models/news"

export const list = async (request,response)=>{
    const order = request.query["_order"] ;
    const limit = +request.query.limit
    const cateNewId = request.query.cateNewId
    const populate = request.query["_expand"]
    try {
        const news = await New
      .find({})
      .limit(limit)
      .populate(populate)
      .sort({createdAt:order})
      .exec();
      if (cateNewId) {
          const newRelateds = await New.find({cateNewId:cateNewId}).limit(limit).exec()
            response.json({news,newRelateds})
      }else{
          response.json(news)
      }
    } catch (error) {
        response.status(400).json({
            message:"Không hiển thị được"
        })
    }
}
export const detail = async (request,response)=>{
    try {
        const order = request.query.order
        const limit = +request.query.limit ;
        const populate = request.query["_expand"]
        const news = await New
        .findOne({_id:request.params.id})
        .populate(populate)
        .exec();
        response.json(news)
    } catch (error) {
        response.status(400).json({
            message:"Không hiển thị được"
        })
    }
}
export const create = async (request,response)=>{
    try {
        const news = await New(request.body).save()
        response.json(news);
    } catch (error) {
        response.status(400).json({message:"Khong the them san pham"})
    }
}
export const remove = async (request,response)=>{
    try {
        const news = await New.findByIdAndDelete({_id:request.params.id}).exec()
        response.json(news)
    } catch (error) {
        response.status(400).json({
            message:"Không hiển thị được"
        })
    }
}
export const update = async (request,response)=>{
    try {
        const news = await New.findByIdAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json(news)
    } catch (error) {
        response.status(400).json({
            message:"Không hiển thị được"
        })
    }
}