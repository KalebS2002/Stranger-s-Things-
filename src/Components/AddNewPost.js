import React from "react";
import ReactDOM from "react-dom/client";

const AddNewPost = () => {
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
