import React, { useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    //destructuring
    const { email, password } = login;
    try {
      
      const url = process.env.BACKEND
      const res = await fetch(url+"user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.ok) {
        window.alert("Logged in SuccessFully");
        window.location.href = "/aboutus";
        console.log("Logged in SuccessFully");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 id="heading">WELCOME TO THE ROAD-VOICE</h2>
      <div class="boxo">
        <form className="login-form">
          <div class="logb">
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={login.email}
            onChange={handleInputs}
            required
          /><br />
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={login.password}
            name="password"
            onChange={handleInputs}
            required
          /><br />
          <button type="button" onClick={PostData}>
            Log In
          </button>
          </div>
        </form>
        <div className="divider">
          <span className="line"></span>
          <span className="or">OR</span>
          <span className="line"></span>
        </div>
        <div className="signup-link">
          Don't have an account? <NavLink to="/loginsingup">Sign up</NavLink>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
