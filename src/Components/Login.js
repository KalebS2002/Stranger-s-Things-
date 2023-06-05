import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Login = () => {
  console.log("export worked!");
  return (
    <>
      <h2 id="logInHeader">Log In</h2>
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
          <button id="submitLogIn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
