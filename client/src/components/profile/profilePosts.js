import React, { useEffect, useState } from 'react';
import "./profileHeader"



const ProfilePosts = () => {
  const BubbleComment = ({ comment }) => {
    // return (
    //   <div className="bubble-comment">
    //     <div className="bubble-comment-content">{comment}</div>
    //   </div>
    // );

    
  };

  return (
    <div className='box'>
      
      <h1>Posts</h1>
      <div className="sb1">I'm speech bubble</div>
      <div className="sb2">I'm speech bubble</div>
      <div className="sb2">I'm speech bubble</div>
      <div className="sb4">I'm speech bubble</div>
      
      {/* Render other profile components */}
      {/* <ProfilePosts posts={posts} /> */}
      
    </div>
  );
};

export default ProfilePosts;
