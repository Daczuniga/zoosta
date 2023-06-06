import React from 'react';
import './Login-SignUp.css';

export default function LogIn() {
    return (
        <form className="Login">
            <h2>Login</h2>
            <input type ='text' placeholder="usarname" />
            <input type ='password' placeholder="password" />
            <button>Login</button>
        </form>
    )
}