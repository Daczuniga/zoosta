import React from "react";
import "./Home.css";
import Logo from "../../assets/logo_official.png";
import videoLogo from "../../assets/zoosta_1.mp4"


function Home() {
  return (
    <div className="main">
       
      <div className="Logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="logBar">
        <a className="button-52" role="button" href="/SignUp">
          Sign up
          </a>
        <a className="button-52" role="button" href="Login">
          Login
        </a>
      </div>
    </div>
  );
}

export default Home;
