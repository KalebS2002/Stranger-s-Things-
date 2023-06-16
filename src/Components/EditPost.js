import React, { useState } from "react";
import reactRouterDom from "react-router-dom";
import { Routes, Route, useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";
import Posts from "./Posts";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const EditPost = ({ currentPost, posts }) => {
  const updatePost = async ({
    title,
    description,
    price,
    location,
    willDeliver,
  }) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${currentPost._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            location,
            willDeliver,
          },
        }),
      });

      const result = await response.json();

      history.push("/posts");
      return result;
    } catch (ex) {
      console.log("error updating post");
    }
  };
  let history = useHistory();
  const [newTitle, setNewTitle] = useState(currentPost.title);
  const [newDescription, setNewDescription] = useState(currentPost.description);
  const [newLocation, setNewLocation] = useState(currentPost.location);
  const [newPrice, setNewPrice] = useState(currentPost.price);
  const [newWillDeliver, setNewWillDeliver] = useState(currentPost.willDeliver);

  async function editPost() {
    const updatedPost = {
      token: localStorage.token,
      title: newTitle,
      description: newDescription,
      location: newLocation,
      price: newPrice,
      willDeliver: newWillDeliver,
      _id: currentPost.postID,
    };
    await updatePost(updatedPost);
  }

  //   const redirect = (event) => {
  //     // useNavigate("/viewpost");
  //     // return <Posts />;
  //   };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        editPost();
      }}
    >
      <input
        type="text"
        placeholder={currentPost.title}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder={currentPost.description}
        onChange={(event) => setNewDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder={currentPost.location}
        onChange={(event) => setNewLocation(event.target.value)}
      />
      <input
        type="text"
        placeholder={currentPost.price}
        onChange={(event) => setNewPrice(event.target.value)}
      />
      <input
        type="checkbox"
        checked={newWillDeliver}
        onChange={(event) => newWillDeliver(event.target.checked)}
      />
      {/* <Link to="/posts"> */}
      <button type="submit">Edit Post</button>
      {/* </Link> */}
    </form>
  );
};

export default EditPost;
