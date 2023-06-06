import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

async function fetchData() {
  const returned = await fetch(`${BASE_URL}/posts`);
  const jsonData = await returned.json();
  console.log(Object.values(jsonData));
  return Object.values(jsonData);
}
fetchData();

// let help = fetchData();
// console.log(help);
// let postMsgs = Object.values(fetchData());
// console.log(postMsgs);

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
  // postMsgs;
};

export default Post;
