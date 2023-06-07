import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";

const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// let help = fetchData();
// console.log(help);
// let postMsgs = Object.values(fetchData());
// console.log(postMsgs);

const Post = () => {
  console.log("Post in working!");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        const postData = result.data.posts;
        console.log(result, postData);

        setPosts(postData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    // <div id="postContainer">
    //   <div className="msgBlock">
    //     <h2>From:</h2>
    //     <p>This is a message</p>
    //     <p>This is a post</p>
    //   </div>
    // </div>

    <div id="postContainer">
      {posts.map((post) => (
        <div className="msgBlock" key={post._id}>
          <div className="h">Title: {post.title}</div>
          <div className="h">UserName: {post.username}</div>
          <div className="h">Location: {post.location}</div>
          <div className="h">Price: {post.price}</div>
          {/* <div id="itemDes">Description: {post.description}</div> */}
        </div>
      ))}
    </div>
  );
};

export default Post;
