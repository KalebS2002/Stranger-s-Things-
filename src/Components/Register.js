import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Register = () => {
  console.log("Register is working!");
  return (
    <>
      <h2 id="logInHeader">Sign Up</h2>
      <div id="logInSection">
        <div id="inputSection">
          <input
            type="text"
            placeholder="enter username"
            className="input"
          ></input>
          <input
            type="text"
            placeholder="enter password"
            className="input"
          ></input>
          <button className="logInButtons" id="submitLogIn" type="submit">
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
