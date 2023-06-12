import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import AddNewPost from "./AddNewPost";
// const TOKEN_STRING_HERE =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgwYjE0YTUxMjQxMzAwMTQ0MTExZjEiLCJ1c2VybmFtZSI6ImthbGViUzIwMDIiLCJpYXQiOjE2ODYxNTU1OTR9.zDKJC2eufW-FIDCCHRlP7iJtF0Mu79Btoo2DyfFL3bk";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
// let help = fetchData();
// console.log(help);
// let postMsgs = Object.values(fetchData());
// console.log(postMsgs);

const Posts = ({ token, setToken }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("Post in working!");
  const [posts, setPosts] = useState([]);
  const [appState, setAppState] = useState();
  const [isAllPostsVisible, setAllPostsVisible] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        const postData = result.data.posts;
        console.log(result);

        setPosts(postData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  const makePost = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify({
          post: {
            title: "My favorite stuffed animal",
            description:
              "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
            price: "$480.00",
            willDeliver: true,
          },
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
    return <>{/* <div id="makePostSection"></div> */}</>;
  };
  const updatePost = async () => {
    try {
      // You will need to insert a variable into the fetch template literal
      // in order to make the POST_ID dynamic.
      // 5e8d1bd48829fb0017d2233b is just for demonstration.
      const response = await fetch(
        `${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`,
          },
          body: JSON.stringify({
            post: {
              title: "My favorite stuffed animal",
              description:
                "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
              price: "$480.00",
              location: "New York, NY",
              willDeliver: true,
            },
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  const deletePost = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  const postMessage = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/posts/5e8929ddd439160017553e06/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`,
          },
          body: JSON.stringify({
            message: {
              content: "Do you still have this?  Would you take $10 less?",
            },
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const swapPostDisplay = () => {
    setAllPostsVisible(false);
  };
  // turn line 147-166 into its own comp
  return isAllPostsVisible ? (
    <div id="postContainer">
      <div id="postHeading">
        <h1 id="postsTitle">Posts</h1>
        <input id="postsSearch" type="text" placeholder="search posts"></input>
        <button id="postButton" onClick={swapPostDisplay}>
          Add Post
        </button>
      </div>

      {posts.map((post) => (
        <div className="msgBlock" key={post._id}>
          <div className="postMsg">Title: {post.title}</div>
          <div className="msgUsername">UserName: {post.author.username}</div>
          <div className="postMsg">Location: {post.location}</div>
          <div className="postMsg">Price: {post.price}</div>
          {/* <div className="postMsg">Messages: {post.author.messages}</div> */}
          <button id="postsSendMessageButton">Send Message</button>
          {/* <div id="itemDes">Description: {post.description}</div> */}
        </div>
      ))}
    </div>
  ) : (
    <AddNewPost />
  );
};

export default Posts;
