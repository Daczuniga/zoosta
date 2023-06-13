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

 
    addComment: async (parent, { commentData }, context) => {
      if (context.user) {
        // Create a new comment and associate it with the user
        const comment = await Comment.create(commentData);
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { comments: {_id: comment._id, commentText: comment.commentText }} },
          { new: true }
        );

        return comment;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    saveComments: async (parent, { commentIds }, context) => {
      if (context.user) {
        // Save the specified comments to the user's profile
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedComments: { $each: commentIds } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

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





















