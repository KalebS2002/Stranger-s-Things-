import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Post from "./Posts";
import Profile from "./Profile";
// import LoginFunc from "./LoginFunc";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Login = () => {
  console.log("Login is working!");

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  let username = "kalebS2002";
  let password = "kaleb02";

  const LoginFunc = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
      const result = await response.json();
      console.log(result);
      console.log("Credentials are correct!");
      return result;
    } catch (err) {
      console.error(err);
    }
    // LoginFunc();
  };

  // console.log(LoginFunc().username);

  return (
    <>
      <h2 id="logInHeader">Log In</h2>
      <div id="logInSection">
        <div id="inputSection">
          <input
            type="text"
            placeholder="enter username"
            className="input"
            id="usernameInput"
            // value={username}
            // onChange={console.log("help")}
          ></input>
          <input
            type="text"
            placeholder="enter password"
            className="input"
            id="passwordInput"
            // value={password}
            // onChange={console.log("me")}
          ></input>
          <button
            className="logInButtons"
            id="submitLogIn"
            type="submit"
            // onClick={LoginFunc}
            // onClick={returnText}
          >
            Submit
          </button>
          <button className="logInButtons" id="submitLogIn" type="submit">
            New Here? Sign Up!
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
