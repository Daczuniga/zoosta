
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Landing = () => {
const history = useHistory();

useEffect(() => {
const videoDuration = 5000; // 5 seconds in milliseconds
const timer = setTimeout(() => {
history.push('/homepage');
}, videoDuration);

}, [history]);

return (
<div>
<h1>Welcome to the Landing Page</h1>
<video autoPlay controls>
<source src={require('../../assets/zoosta_1.mp4').default} type="video/mp4" />
</video>
</div>
);
};

export default Landing;