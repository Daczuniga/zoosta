import React, { useEffect, useState } from 'react';
import ProfileHeader from './profileHeader';
import ProfilePosts from './profilePosts';
import "./profile.css"




const Profile = () => {
  

  useEffect(() => {
    // Fetch the profile data from an API or other data source
    // Set the fetched data to the state using setProfileData
    // Example: setProfileData(response.data);
  }, []);

  return (
    <div>
      <ProfileHeader  />
      <ProfilePosts />
    </div>
  );
};

export default Profile;
//how to use mobx or redux to organize the code and separate the page logic 