const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({

  
  reactionBody:{
      type: String,
      required: true,
      maxLength: 280,
  },
  username:{
      type: String,
      required: true
  },
  

},
{
  timestamps: true,
  
}
)
const commentSchema = new mongoose.Schema({

    commentText: {
        type: String,
        // required: true,
        minLength: 1,
      maxLength: 280,

    },

    username: {
        type: String,
        // required: true,
    },

    reactions: [
      { 
  type: reactionSchema

      }
  ],

},
{timestamps: true}

)


const Comment = mongoose.model("Comment", commentSchema);
const Reaction = mongoose.model("Reaction", reactionSchema);

commentSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

module.exports = {Comment, Reaction};









