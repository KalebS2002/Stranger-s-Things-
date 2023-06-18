import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Profile = ({ username }) => {
  let user = username;
  return (
    <div id="profileContainer">
      <h2 className="profileTitle">Welcome {user}!</h2>
      <h4 className="profileTitle">Messages to me:</h4>

      <div className="msgBlock">
        <div className="postMsg">From: </div>
        <div className="msgUsername">Message:</div>
        <div className="postMsg">Post: </div>
      </div>
    </div>
  );
};
export default Profile;
