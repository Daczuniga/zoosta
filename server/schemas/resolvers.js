const { AuthenticationError } = require('apollo-server-express');
const { User, Comment } = require('../models');
const { signToken } = require('../utils/auth');
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, {email, password}) => {
      console.log(email)
      const user = await User.findOne({ email });
      console.log(user)
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      console.log(token)
      return { token, user };
    },
    //move to saveComment
    // saveComment: async (parent, { commentData }, context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { savedComments: commentData } },
    //       { new: true }
    //     );
    //     return updatedUser;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },

    
    //Like comment *************   MUST TEST BEFORE PUSH   **************

    likeComment: async (parent, { commentId }, context) => {
      if (context.user) {
        try {
          // Find the user and check if the comment is already liked
          const user = await User.findById(context.user._id);
          const isLiked = user.savedComments.includes(commentId);
    
          // Update the user's liked comments based on the presence of the commentId
          if (isLiked) {
            // If the comment is already liked, remove it from the savedComments array
          //   user.savedComments = user.savedComments.filter(id => id !== commentId);
          // } else {
          //   // If the comment is not liked, add it to the savedComments array
          //   user.savedComments.push(commentId);
          }
    
          // Save the updated user data
          const updatedUser = await user.save();
          return updatedUser;
        } catch (error) {
          throw new Error('Something went wrong while liking the comment');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    

    //SignOut   ********************  MUST TEST BEFORE PUSH  *******************
   
   
   //             *************PULLED FROM CHATGPT*******************
    // const signOut = {
    //   Mutation: {
    //     logout: (parent, args, context) => {
    //       if (context.user) {
    //         // Perform any necessary actions to log out the user
    //         // For example, clearing the authentication token or session
    
    //         // Return a success message or boolean indicating successful logout
    //         return true;
    //       }
    //       throw new AuthenticationError('You need to be logged in!');
    //     },
    //   },
    // },


    removeComment: async (parent, { commentId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedComments: { commentId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};


module.exports = resolvers;





















