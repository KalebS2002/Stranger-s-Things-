import React from "react";
import { useState } from "react";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const token = localStorage.token;
const postId = localStorage.postid;

const SendMessage = ({ currentPost }) => {
  const postId = currentPost._id;
  const [message, setMessage] = useState({ content: "" });

  const createMessage = async ({ postId, token, message }) => {
    console.log("post id:", postId, "token:", token, message);
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: "testy",
          },
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      console.log("error creating message");
    }
  };

  async function addMessage() {
    await createMessage({ postId, token, message });
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addMessage();
      }}
    >
      <input
        type="text"
        placeholder="Enter Message"
        onChange={(event) => setMessage({ content: event.target.value })}
      />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default SendMessage;
