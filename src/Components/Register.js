import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const TOKEN_STRING_HERE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgwYjE0YTUxMjQxMzAwMTQ0MTExZjEiLCJ1c2VybmFtZSI6ImthbGViUzIwMDIiLCJpYXQiOjE2ODYxNTU1OTR9.zDKJC2eufW-FIDCCHRlP7iJtF0Mu79Btoo2DyfFL3bk";

const Register = () => {
  // console.log("Register is working!");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
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
      // You can log ▲▲▲ the result
      // here ▼▼▼ to view the json object before returning it
      console.log(result);
      const newToken = result.data.token;
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  // const handleSubmit = (event) => {
  //   // event.preventDeafault();
  //   console.log(username);
  //   console.log(password);
  //   setUsername(username);
  //   setPassword(password);
  // };

  const handleChange = (event) => setUsername(event.target.value);

  return (
    <>
      <h2 id="logInHeader">Sign Up</h2>

      <div id="logInSection">
        <div id="inputSection">
          <input
            type="text"
            placeholder="enter username"
            className="input"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              e.preventDefault();
            }}
          ></input>

          <input
            type="text"
            placeholder="enter password"
            className="input"
            min={6}
            onChange={(e) => {
              setPassword(e.target.value);
              e.preventDefault();
            }}
          ></input>

          <input
            type="text"
            placeholder="re-enter password"
            className="input"
            min={6}
          ></input>

          <button
            className="logInButtons"
            id="submitLogIn"
            type="submit"
            onClick={registerUser}
          >
            Submit
          </button>

          <button className="logInButtons" id="submitLogIn" type="submit">
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
