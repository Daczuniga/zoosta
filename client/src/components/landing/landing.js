import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Landing = () => {
  const history = useHistory();

  useEffect(() => {
    // Wait for the video to finish playing
    const videoElement = document.getElementById('landing-video');
    videoElement.addEventListener('ended', redirectToHome);

    return () => {
      // Cleanup: Remove the event listener
      videoElement.removeEventListener('ended', redirectToHome);
    };
  }, []);

  const redirectToHome = () => {
    history.push('/home');
  };

  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <video id="landing-video" autoPlay muted>
        <source src="/client/src/assets/zoosta_1.mp4" type="video/mp4" />
        {/* Add additional video sources as needed for different formats */}
      </video>
    </div>
  );
};

export default Landing;