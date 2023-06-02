import React, { useEffect, useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';


const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch the profile data from an API or other data source
    // Set the fetched data to the state using setProfileData
    // Example: setProfileData(response.data);
  }, []);

  return (
    <div>
      {profileData && (
        <>
          <ProfileHeader name={profileData.name} profilePicture={profileData.profilePicture} />
          <ProfilePosts posts={profileData.posts} />
        </>
      )}
    </div>
  );
};

export default Profile;
