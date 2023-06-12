import React, {useState, useEffect} from 'react';
import './Login-SignUp.css';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';
import { saveUser } from '../../utils/localStorage';



export default function LogIn() {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
   
  
    const [login, { error }] = useMutation(LOGIN_USER);
  
    useEffect(() => {
      if (error) {
        console.log(error);
      } 
    }, [error]);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      try {
        const { data } = await login({
          variables: { ...userFormData },
        });
  
        console.log(data);
        Auth.login(data.login.token);
        saveUser(data.login.user)
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setUserFormData({
        email: '',
        password: '',
      });
    };
    return (
        <form className="Login" onSubmit={handleFormSubmit}>
            <h2>Login</h2>
            <input type ='text' placeholder="email" onChange={handleInputChange} name="email"/>
            <input type ='password' placeholder="password" onChange={handleInputChange} name="password" />
            <button className='button' type="submit">Login</button>
        </form>
    )
}