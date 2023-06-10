import React from 'react';
import '../styles/Login-SignUp.css';

export default function SignUp() {
    return (
        <form className="signUp">
            <h2>Sign Up</h2>
            <input type ='text' placeholder="usarname" />
            <input type ='password' placeholder="password" />
            <button>Sign Up</button>
        </form>
    )
}