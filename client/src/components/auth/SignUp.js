import React from 'react';
import './Login-SignUp.css';

export default function SignUp() {
    return (
        <form className="signUp">
            <h2>Sign Up</h2>
            <input type ='text' placeholder="usarname" />
            <input type ='password' placeholder="password" />
            <button className='button'>Sign Up</button>
        </form>
    )
}