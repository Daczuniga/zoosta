import React, { useState, useEffect } from "react";
import "./Post.css";
import Picture from "../../assets/zoosta_1.mp4";
import creek1 from "../../assets/creek1.webp";

import { useMutation, useQuery } from "@apollo/client";
import { ADD_COMMENT, GET_ALL_COMMENTS } from "../../utils/mutations";
import ProfilePosts from "../profile/profilePosts";
import Map from "./Map.js";
import { QUERY_ME } from "../../utils/queries";

export default function Post() {
  const [commentData, setCommentData] = useState({
    commentText: "",
  });
  const [addComment, { error }] = useMutation(ADD_COMMENT);
  const { loading, data } = useQuery(QUERY_ME);
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);
  if (loading) {
    return <p>Loading...</p>;
  }

  const { comments,username, createdAt } = data.me || {};
  console.log(data)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addComment({
        variables: { commentData },
        refetchQueries: [{ query:  QUERY_ME }], // Pour rafraîchir les commentaires après l'ajout d'un nouveau commentaire
      });
      console.log("test data");
      console.log(data);
    } catch (err) {
      console.error(err);
    }

    setCommentData({
      commentText: "",
    });
  };

  return (
    <div className="post-area">
      <div className="create-post">
        <div className="form-post">
          <form onSubmit={handleFormSubmit}>
            <div>New post</div>
            <div>
              <textarea
                name="commentText"
                cols="30"
                rows="10"
                onChange={handleInputChange}
                value={commentData.commentText} // Ajout de la valeur du champ de texte du commentaire
                required
              ></textarea>
            </div>
            <div>
              <button type="submit">Send Post</button>
            </div>
          </form>
        </div>
      </div>
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <div className="post" key={comment._id}>
            <div className="bubble">
              <div className="image">
                <img src='https://picsum.photos/200/100' alt="foto" />
              </div>

              <div className="texts" >
                <h2>{comment.commentText}</h2>
                <p className="info">
                  <a className="author">{username}</a>
                  <time>{createdAt}</time>
                </p>
                
              </div>
            </div>
            <div>
              <Map />
            </div>
          </div>
        ))
      ) : (
        <p>No comments found.</p>
      )}

    </div>
    );
}