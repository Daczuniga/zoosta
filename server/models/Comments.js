const{Schema,model}=require("mongoose")


const commentSchema= new Schema(
    {
        commentText:{
            type:String, 
            minlength: 1,
            maxLength: 200
        },
        
    },

    {
        toJSON: {
            getters:true
                },
                id: false
    },
    
    
);
const Comments=model("Comments",commentSchema)
module.exports=Comments;


