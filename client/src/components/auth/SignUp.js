import React, { useState,useEffect } from "react";
import "./Login-SignUp.css";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function SignUp() {

  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, {error}] = useMutation(ADD_USER);
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

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
   

    
    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <form className="signUp" onSubmit={handleFormSubmit}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="username" name="username"  onChange={handleInputChange} />
      <input type="text" placeholder="email" name="email"   onChange={handleInputChange}/>
      <input type="password" placeholder="password" name="password"   onChange={handleInputChange}/>

      <button className="button" type="submit">Sign Up</button>
    </form>
  );

}
