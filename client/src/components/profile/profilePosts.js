import React, {  useState } from "react";
import "./profileHeader";
import { ADD_COMMENT } from "../../utils/mutations";
import {useQuery, useMutation} from "@apollo/client";
import {QUERY_ME} from '../../utils/queries';
import Auth from '../../utils/auth';

const ProfilePosts = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [commentText, setCommentText] = useState(""); // State for the comment input
  const [commentData, setCommentData] = useState([])
  const [addComment, { error }] = useMutation(ADD_COMMENT);
  console.log(commentData)
  console.log({error})
  const userData = data?.me || {}; 
  console.log(userData, "this")
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
    if (!token){
      return false;
    }
    
  
    try {
      const { data } = await addComment({
        variables: {
          commentData: {
            commentText: commentText,
          },
        },
      });
  
      setCommentData((prevData) => [...prevData, data.addComment]);
      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };
  
  if (loading) {
    return <h2>LOADING....</h2>
  }
  return (
    <div className="box">
      <h1>Leave A Comment</h1>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Enter your comment"
        />
        <button type="submit">Add Comment</button>
      </form>
      <table className="list">
        <tbody>
          {commentData.map((comment, index) => {
            return (
              <tr className="list" key={index}>               
                <td className="sb3">{comment.commentText}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePosts;










