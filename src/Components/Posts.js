import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Post = () => {
  console.log("Post in working!");
  return (
    <div id="postContainer">
      <div className="msgBlock">
        <h2>From:</h2>
        <p>This is a message</p>
        <p>This is a post</p>
      </div>
    </div>
  );
};

export default Post;
