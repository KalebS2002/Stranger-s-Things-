import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar";
import Login from "./Login";
import Post from "./Posts";
import Register from "./Register";
import Profile from "./Profile";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Apps = () => {
  useEffect(() => {}, []);
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/posts`);
  //       const result = await response.json();
  //       const postData = result.data.posts;
  //       console.log(result, postData);

  //       setPosts(postData);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  return (
    <>
      <NavBar />
      {/* <div>
        <div className="allPosts">
          {posts.map((post) => (
            <div key={post._id}>
              Title: {post.title}
              Location: {post.location}
              Id: {post.id}
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Apps;
