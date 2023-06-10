import React from 'react';
import './Login-SignUp.css';

export default function SignUp() {
    return (
        <form className="signUp">
            <h2>Sign Up</h2>
            <input type ='text' placeholder="First Name" />
            <input type ='text' placeholder="Last Name" />
            <input type ='text' placeholder="Email" />
            <input type ='password' placeholder="Password" />
            <button className='button'>Sign Up</button>
        </form>
    )
}
