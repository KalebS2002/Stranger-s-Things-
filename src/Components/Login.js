import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Posts from "./Posts";
import Profile from "./Profile";
// import LoginFunc from "./LoginFunc";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const TOKEN_STRING_HERE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgwYjE0YTUxMjQxMzAwMTQ0MTExZjEiLCJ1c2VybmFtZSI6ImthbGViUzIwMDIiLCJpYXQiOjE2ODYxNTU1OTR9.zDKJC2eufW-FIDCCHRlP7iJtF0Mu79Btoo2DyfFL3bk";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log("Login is working!");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(isLoggedIn);
  const [userAccount, setUserAccount] = useState({
    username: "",
    password: "",
    _id: "",
  });

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
      await setIsLoggedIn(true);
      console.log("isLogged in = " + isLoggedIn);
      await myData();
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  // LoginFunc();

  const myData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN_STRING_HERE}`,
        },
      });
      const result = await response.json();
      await setUserAccount(result.data);
      console.log("user data successfully retrieved! Look below!");
      console.log(userAccount);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  // myData();
  // console.log(LoginFunc().username);
  return (
    <>
      <h2 id="logInHeader">Log In</h2>
      <form id="loginForm">
        <div id="logInSection">
          <div id="inputSection">
            <label htmlFor="usernameInput">Enter Username</label>
            <input
              type="text"
              // placeholder="enter username"
              className="input"
              id="usernameInput"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                e.preventDefault();
                // console.log({ username });
              }}
            ></input>
            <label htmlFor="passwordInput">Enter Password</label>
            <input
              type="password"
              // placeholder="enter password"
              className="input"
              id="passwordInput"
              // value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                e.preventDefault();
                // console.log({ password });
              }}
            ></input>
            <button
              className="logInButtons"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                LoginFunc();
              }}
            >
              Submit
            </button>
            <button className="logInButtons" type="submit">
              New Here? Sign Up!
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
