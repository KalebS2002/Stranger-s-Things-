import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Register = () => {
  console.log("Register is working!");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDeafault();
    setUsername("");
    setPassword("");
  };

  const handleChange = (event) => setUsername(event.target.value);

  return (
    <>
      <h2 id="logInHeader">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div id="logInSection">
          <div id="inputSection">
            <label className="label" htmlFor="username">
              <input
                type="text"
                placeholder="enter username"
                className="input"
                value={username}
                onChange={handleChange}
              ></input>
            </label>

            <label className="label" htmlFor="password">
              <input
                type="text"
                placeholder="enter password"
                className="input"
                value={password}
                onChange={handleChange}
              ></input>
            </label>
            <label className="label" htmlFor="password">
              <input
                type="text"
                placeholder="re-enter password"
                className="input"
              ></input>
            </label>
            <button className="logInButtons" id="submitLogIn" type="submit">
              Submit
            </button>
            <button
              className="logInButtons"
              id="submitLogIn"
              type="submit"
              onSubmit={handleSubmit}
            >
              Log In
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
