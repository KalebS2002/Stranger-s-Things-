import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FetchMessages from "./Messages";
const USER_NAME = "Kaleb";

const Profile = ({ token, setToken }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("Profile is working!");
  // return <FetchMessages />;
  return (
    <div id="profileContainer">
      <div>
        <h1 id="profileTitle">Welcome {USER_NAME}</h1>
        <h3 id="profileTitle">Messages to me:</h3>
      </div>

      <div className="msgBlock">
        <h2>From</h2>
        <p>This is a message</p>
        <p>This is a post</p>
      </div>

      <div className="msgBlock">
        <h2>From</h2>
        <p>This is a message</p>
        <p>This is a post</p>
      </div>

      <div className="msgBlock">
        <h2>From</h2>
        <p>This is a message</p>
        <p>This is a post</p>
      </div>

      <div className="msgBlock">
        <h2>From</h2>
        <p>This is a message</p>
        <p>This is a post</p>
      </div>

      <div className="msgBlock">
        <h2>From</h2>
        <p>This is a message</p>
        <p>This is a post</p>
      </div>
    </div>
  );
};

export default Profile;
