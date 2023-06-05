import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileHeader = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data using Axios
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://api.example.com/user'); // Replace with your API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.profilePicture} alt="Profile" />
          {/* Display other user data */}
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
