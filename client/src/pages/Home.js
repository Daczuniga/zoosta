import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div>
            <div className='header'>
            </div>
            <div className="navBar"> 
                <a className="signup" href="/SignUp">Sign Up</a>
                <a className="login" href="Login">Login</a> 
            </div>
        </div> 
    )
}

export default Home;