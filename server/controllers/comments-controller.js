const Comments= require("../models")



const commentController= {
    async getComments(req,res){
        try{
            const commentData= await Comments.find()
            res.json(commentData)
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    },
    async createComment(req, res){
        try{
            const commentData=await Comment.create(req.body)
            commentData=await Comment.findOneAndUpdate({$push:{commentText:commentData}})
            res.json({message:"thought successfuly created"})
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }
}
module.exports= commentController;