import React, { useEffect } from "react";
import { useState } from "react";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const postId = localStorage.postid;

const ViewPosts = ({ posts, setPosts }) => {
  const retrievePostData = () => {
    console.log("this is coming from retrieve:", posts);

    //narrow down data that comes from posts to get data matching localStorage.postid.
    //maybe use .filter method...
  };
  retrievePostData();
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/posts`);
  //       const result = await response.json();
  //       const postData = result.data.posts;
  //       setPosts(postData);
  //       return result;
  //     } catch (err) {
  //       console.error(err);
  //     }
  //     fetchPosts();
  //   };

  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       try {
  //         const response = await fetch(`${BASE_URL}/posts`);
  //         const result = await response.json();
  //         const postData = result.data.posts;
  //         setPosts(postData);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     };
  //     fetchPosts();
  //   }, []);

  //   console.log(localStorage.postid);
  //   console.log(posts);
  return (
    <div id="postView">
      <div className="postViewSection">
        <h2>Title:</h2>
      </div>
      <div className="postViewSection">
        <h3>Username:</h3>
      </div>
      <div className="postViewSection">
        <p>Description:</p>
      </div>
      <div className="postViewSection">
        <h3>Price:</h3>
      </div>
      <div className="postViewSection">
        <h4>Location: </h4>
      </div>
      {/* put messages in here somewhere below heading */}
    </div>
  );
};
export default ViewPosts;
