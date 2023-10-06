import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //some fancy firebase login shiitttt
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    // do some fancy firebase register shiitttt
    auth
      .createUserWithEmailAndPassword(email, password) // Corrected function name
      .then((auth) => {
        // It's successfully created user with email and password

        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message)); // Corrected "message" property
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png"
          alt=""
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By Sigining-in you agree to Amazon's Clone conditions of Use & sale.
          please see our Policy Notice , our Cookies Notice and our Interest
          Based ads Notice.{" "}
        </p>
        <button onClick={register} className="login_registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
