import React, { useEffect, useState } from 'react';


const ProfileHeader = () => {
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   // Fetch user data using Axios
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get('https://api.example.com/user'); // Replace with your API endpoint
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  return (
    <div>
      <div>
          <h2>carine</h2>
          <img src="https://fastly.picsum.photos/id/445/1600/1600.jpg?hmac=iYt8N2Qg_cwPnbOPOwsWcql4g0PKW66W6Gj1rjrvyJY" alt="Profile" />
          {/* Display other user data */}
        </div>
    </div>
  );
};

export default ProfileHeader;
