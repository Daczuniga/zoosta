import React, { useEffect, useState } from 'react';
import './profile.css';
import { getSavedUser, clearLocalStorage } from '../../utils/localStorage';

const ProfileHeader = () => {
  const [userData, setUserData] = useState(getSavedUser);

  const handleSignOut = () => {
    // Clear user data from local storage or perform any other sign out actions
    clearLocalStorage();
    setUserData(null); // Reset the user data state
  };

  return (
    <div>
      <div>
        <button className='signoutBtn' onClick={handleSignOut}>Sign out</button>
        <h2>{userData ? userData.username : 'Guest'}</h2>
        <img className='profilePicture' src="https://fastly.picsum.photos/id/445/1600/1600.jpg?hmac=iYt8N2Qg_cwPnbOPOwsWcql4g0PKW66W6Gj1rjrvyJY" alt="Profile" />
        {/* Display other user data */}
        <ul className="list">
          <li>78 Likes</li>
          <li>158 Posts</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileHeader;
