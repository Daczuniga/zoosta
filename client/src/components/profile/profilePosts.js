import React, { useState } from 'react';

const ProfilePost = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    subHeading: '',
    text: '',
  });

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleCreatePost = () => {
    if (newPost.title && newPost.subHeading && newPost.text) {
      const postId = posts.length + 1;
      const post = {
        id: postId,
        title: newPost.title,
        subHeading: newPost.subHeading,
        text: newPost.text,
        likes: 0,
        comments: [],
      };

      setPosts([...posts, post]);
      setNewPost({ title: '', subHeading: '', text: '' });
    }
  };

  const handleLikePost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  const handleAddComment = (postId, comment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] };
      }
      return post;
    });

    setPosts(updatedPosts);
  };
  
  if (loading) {
    return <h2>LOADING....</h2>
  }
  return (
    <div>
      {/* Render existing posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="post"
          style={{
            backgroundImage:
              "url('https://www.pngkit.com/png/detail/915-9159431_speechbubble-bubble-pixel-thoughbubble-pixelated-monochrome.png')",
          }}
        >
          <h2 className="post-title">{post.title}</h2>
          <h3 className="post-subheading">{post.subHeading}</h3>
          <p className="post-text">{post.text}</p>
          <div className="post-actions">
            <button
              className="like-button"
              onClick={() => handleLikePost(post.id)}
            >
              Like ({post.likes})
            </button>
            <button className="comment-button">Comment</button>
            {/* Render comments */}
            <ul className="comment-list">
              {post.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Create new post */}
      <div>
        <h2>Create New Post</h2>
        <input
          type="text"
          name="title"
          value={newPost.title}
          placeholder="Title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="subHeading"
          value={newPost.subHeading}
          placeholder="Subheading"
          onChange={handleInputChange}
        />
        <textarea
          name="text"
          value={newPost.text}
          placeholder="Text"
          onChange={handleInputChange}
        ></textarea>
        <button onClick={handleCreatePost}>Create Post</button>
      </div>
    </div>
  );
};

export default ProfilePost;
