import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation saveComment($input: commentInput) {
    saveComment(input: $input) {
      
      _id
      username
      savedComments {
        commentText
        date
        
      }
    }
  }
`;

export const REMOVE_Comment = gql`
  mutation removecOMMENT($commentId: String!) {
    removeBook(bookId: $commentId) {
      _id
      username
      bookCount
      savedComments {
       commentText
       date
      }
    }
  }
`;