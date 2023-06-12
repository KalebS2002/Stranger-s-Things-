import React from "react";
import ReactDOM from "react-dom/client";

const AddNewPost = ({ token, setToken }) => {
  const TOKEN_STRING_HERE = token;
  const COHORT_NAME = "2303-FTB-ET-WEB-AM";
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
  const makePost = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN_STRING_HERE}`,
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
  };
  return (
    <div id="addNewPostSection">
      <h1 id="addNewPostTitle">Add New Post</h1>
      <div id="addNewPostInputSection">
        <label>Title</label>
        <input type="text" className="addNewPostInput"></input>
        <label>Description</label>
        <input type="text" className="addNewPostInput"></input>
        <label>Price</label>
        <input type="text" className="addNewPostInput"></input>
        <label>Location</label>
        <input type="text" className="addNewPostInput"></input>
        <label htmlFor="willing to deliver?">
          <input id="addNewPostCheckbox" type="checkbox"></input> Willing to
          deliver?
        </label>
        <button id="addNewPostCreateButton">Create</button>
      </div>
    </div>
  );
};
export default AddNewPost;
