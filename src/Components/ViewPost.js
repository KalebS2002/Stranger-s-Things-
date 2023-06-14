import React, { useEffect } from "react";
import { useState, useParams } from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const postId = localStorage.postid;

const ViewPost = ({ post, setPost, currentPost, setCurrentPost }) => {
  //do I use another try/catch here to get post data or do i get it passed as a prop??
  console.log(currentPost);
  // setCurrentPost({
  //   title: "",
  //   username: "",
  //   description: "",
  //   price: "",
  //   location: "",
  //   willdeliver: "",
  // });
  let returnedPost = {
    title: "",
    username: "",
    description: "",
    price: "",
    location: "",
    willdeliver: "",
  };
  // console.log(returnedPost);
  //   title: "",
  //   username: "",
  //   description: "",
  //   price: "",
  //   location: "",
  //   willdeliver: "",

  console.log("Current Post:", currentPost);

  return (
    <div id="postView">
      <div className="postViewSection">
        <h2>Title: </h2>
      </div>
      <div className="postViewSection">
        <h3>Username: </h3>
      </div>
      <div className="postViewSection">
        <p>Description: </p>
      </div>
      <div className="postViewSection">
        <h3>Price:</h3>
      </div>
      <div className="postViewSection">
        <h4>Location: </h4>
      </div>
      <div className="postViewSection">
        <h4>Will Deliver: </h4>
      </div>
      {/* put messages in here somewhere below heading */}
    </div>
  );
};

export default ViewPost;
