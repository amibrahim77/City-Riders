import React, {useContext, useState } from "react";
import "./Login.css";
import { FaGithub, FaYCombinator, FaGoogle } from "react-icons/fa";
import {
    githubLogin,
    googleLogIn,
    yahooLogin,
    customEmailPassReg,
    userLoginWithCustomEmail,
  } from "./LoginSec";
import { userContext } from "../Header/Header";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  let history = useHistory(); 
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [logInUser, setLogInUser] = useContext(userContext);
 

  
    const [classAdd, setClassAdd] = useState(false);
    const [userData, setUserData] = useState({
      email: "",
      password: "",
    });
    const [user, setUser] = useState({
      isSignedIn: false,
      name: "",
      email: "",
      photo: "",
      password: "",
      error: "",
      success: "",
    });
  
    //Google Sign  in system is
    const handleGoogleSignIn = () => {
      googleLogIn()
      .then(res=>{
        setLogInUser(res)
        history.replace(from);
      } )
      
    };
  
    //   gitHub signIn system
    const handleGithubSignIn = () => {
      githubLogin()
      .then(res=>{
        setLogInUser(res)
        history.replace(from);
      } )
    };
 
    //Yahoo login method
    const handleYahooSignIn = () => {
      yahooLogin()
      .then(res=>{
        setLogInUser(res)
        history.replace(from);
      } )
    };
  
    //varify system
    const handleChange = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      let valid = true;
  
      if (name === "email") {
        valid = /\S+@\S+\.\S+/.test(value);
      }
      if (name === "password") {
        valid = /^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/.test(value);
      }
      if (name === "name") {
        valid = true;
      }
      if (valid) {
        let newUser = { ...userData };
        newUser[name] = value;
        setUserData(newUser);
      }
  
      e.preventDefault();
    };

  
    //Custom reg system.
    const createUser = (e) => {
      customEmailPassReg(userData.email, userData.password)
      .then((res) =>{
        setUser(res)
        history.replace(from);
      }
      
      );
      e.preventDefault();
    };
  
    //New user Loggin
    const newUserLoggin = (e) => {
      userLoginWithCustomEmail(userData.email, userData.password).then((res) =>{
        setUser(res)
        setLogInUser(res)
        history.replace(from);
       
      }
   

      );
      e.preventDefault();
    };
    return (
        <div className='loginMain'>
        <div
          className={`container box ${classAdd ? "right-panel-active" : ""}`}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form action="">
              <h1>Create Account</h1>
              <div className="social-container">
                <a onClick={handleGithubSignIn} className="social">
                  <FaGithub></FaGithub>
                </a>
                <a onClick={handleYahooSignIn} className="social">
                  <FaYCombinator />
                </a>
                <a onClick={handleGoogleSignIn} className="social">
                  <FaGoogle></FaGoogle>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input
                type="text"
                onBlur={handleChange}
                name="name"
                placeholder="Name"
              />
              <input
                type="email"
                onBlur={handleChange}
                name="email"
                placeholder="Email"
              />
              <input
                type="password"
                onBlur={handleChange}
                name="password"
                placeholder="Password"
              />
              {user.isSignedIn && (
                <p style={{ color: "green" }}>{user.success}</p>
              )}
              {user.isSignedIn === false && (
                <p style={{ color: "red" }}>{user.error}</p>
              )}
              <button onClick={createUser}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="">
              <h1>Sign in</h1>
              <div className="social-container">
         
                <a onClick={handleGoogleSignIn} className="social">
                  <FaGoogle></FaGoogle>
                </a>
              </div>
              <span>or use your account</span>
              <input
                type="email"
                name="email"
                onBlur={handleChange}
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                onBlur={handleChange}
                placeholder="Password"
              />
              <a>Forgot your password?</a>
              {user.isSignedIn && (
                <p style={{ color: "green" }}>{user.logSuccess}</p>
              )}
              {user.isSignedIn === false && (
                <p style={{ color: "sky color" }}>{user.logError}</p>
              )}

              <button onClick={newUserLoggin}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" onClick={() => setClassAdd(!classAdd)}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Welcome</h1>
                <p>Please enter your email and password</p>
  
                <button onClick={() => setClassAdd(!classAdd)} className="ghost">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;