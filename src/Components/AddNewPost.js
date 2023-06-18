import React, { useState, useTransition } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect, useHistory } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Posts from "./Posts";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const AddNewPost = ({ isLoggedIn, setIsLoggedIn }) => {
  const COHORT_NAME = "2303-FTB-ET-WEB-AM";
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(true);
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
            title: title,
            description: description,
            price: price,
            willDeliver: willDeliver,
          },
        }),
      });
      const result = await response.json();
      console.log(result);
      history.push("/posts");
      alert("Post successfully created!");
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  let history = useHistory();

  return (
    <div id="addNewPostSection">
      <h1 id="addNewPostTitle">Add New Post</h1>
      <div id="addNewPostInputSection">
        <label>Title</label>
        <input
          type="text"
          className="addNewPostInput"
          onChange={(e) => {
            setTitle(e.target.value);
            e.preventDefault();
          }}
        ></input>
        <label>Description</label>
        <input
          type="text"
          className="addNewPostInput"
          onChange={(e) => {
            setDescription(e.target.value);
            e.preventDefault();
          }}
        ></input>
        <label>Price</label>
        <input
          type="text"
          className="addNewPostInput"
          onChange={(e) => {
            setPrice(e.target.value);
            e.preventDefault();
          }}
        ></input>
        <label>Location</label>
        <input type="text" className="addNewPostInput"></input>
        <label htmlFor="willing to deliver?">
          <input
            id="addNewPostCheckbox"
            type="checkbox"
            value={false}
            onClick={(e) => {
              setWillDeliver(true);
              //   e.preventDefault();
              console.log(willDeliver);
            }}
          ></input>{" "}
          Willing to deliver?
        </label>
        <button id="addNewPostCreateButton" onClick={makePost}>
          Create
        </button>
        <Link to="/profile">
          <button id="addNewPostCreateButton">Return</button>
        </Link>
      </div>
    </div>
  );
};
export default AddNewPost;
