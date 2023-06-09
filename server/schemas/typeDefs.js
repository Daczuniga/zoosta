const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    savedComments: [Comments]
  }
  type Comments {
    commentId: ID!
    commentText: String
  }
  type Auth {
    token: ID!
    user: User
  }
  input CommentInput {
    text: [String]
    commentId: String!
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveComments(commentData: CommentInput!): User
    removeComment(commentId: ID!): User
  }
`;
module.exports = typeDefs;

