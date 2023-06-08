import React from "react";
import "./Home.css";
import Logo from "../../assets/zoosta2.png";


function Home() {
  return (
    <div className="main">
       
      <div className="Logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="logBar">
        <a className="signup" href="/SignUp">
          Sign Up
        </a>
        <a className="login" href="Login">
          Login
        </a>
      </div>
    </div>
  );
}

export default Home;
