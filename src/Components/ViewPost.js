import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useParams } from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const postId = localStorage.postid;
const token = localStorage.token;

const ViewPost = ({ post, currentPost, setCurrentPost }) => {
  //do I use another try/catch here to get post data or do i get it passed as a prop??
  console.log(currentPost);

  const postId = currentPost._id;
  console.log("Post id:", postId);

  const deletePost = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      alert("deleted post.");
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="postView" key={currentPost._id}>
      <Link to="/posts">
        <button id="viewPostReturnButton">Return</button>
      </Link>
      <div className="postViewSection">
        <h2 id="viewPostTitle">Title: {currentPost.title}</h2>
      </div>
      <div className="postViewSection">
        <p>Username: {currentPost.author.username}</p>
      </div>
      <div className="postViewSection">
        <p>Description: {currentPost.description}</p>
      </div>
      <div className="postViewSection">
        <p>Price: {currentPost.price}</p>
      </div>
      <div className="postViewSection">
        <p>Location: {currentPost.location}</p>
      </div>
      <div className="postViewSection">
        <p>Will Deliver: {currentPost.willDeliver} </p>
      </div>
      {/* put messages in here somewhere below heading */}
      <div id="viewPostButtonSection">
        <Link to="/posts">
          <button id="viewPostDeleteButton" onClick={deletePost}>
            Delete
          </button>
        </Link>
        <Link to="/editpost">
          <button id="viewPostEditButton">Edit</button>
        </Link>
        <Link to="/postmessage">
          <button id="viewPostMessageButton">Message</button>
        </Link>
        <p>(must be original user's post to edit or delete)</p>
      </div>
      <div id="viewPostMessagesSection">
        <h2 id="viewPostMessagesTitle">Messages about this post:</h2>
        <p>{currentPost.messages}</p>
      </div>
    </div>
  );
};

export default ViewPost;
