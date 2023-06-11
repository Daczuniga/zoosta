import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
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
      }
    }
  }
`;

export const SAVE_COMMENTS = gql`
  mutation saveComments($commentData: CommentInput!) {
    saveComments(commentData: $commentData) {
      _id
      username
      email
      savedComments {
      commentId
      commentText
      }
    }
  }
`;

  export const REMOVE_COMMENT = gql`
  mutation removeComment($commentId: ID!) {
    removeComment(commentId: $commentId) {
      _id
      username
      email
      removeComment {
      commentId
      commentText
        }
    }
  }
`;