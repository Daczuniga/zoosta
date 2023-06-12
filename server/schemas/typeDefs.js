const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    comments: [Comments]
    savedComments: [Comments]
  }
  type Comments {
    _id: ID!
    commentText: String
  }
  type Auth {
    token: ID!
    user: User
  }
  input CommentInput {
   commentText: String!
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentData: CommentInput!): Comments
    saveComments(commentData: CommentInput!): User
    removeComment(commentId: ID!): User
  }
`;
module.exports = typeDefs;









