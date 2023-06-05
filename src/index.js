import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Apps = () => {
  //   const [posts, setPosts] = useState([]);
  //   useEffect(() => {}, []);
  return (
    <div>
      <h1>Strangers Things</h1>
      {/* <nav>
        <Link to="/posts">Posts ({posts.length})</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/posts" element={<div>Posts</div>} />} />
        <Route path="/login" element={<div>Login</div>} />} />
        <Route path="/register" element={<div>Register</div>} />} />
      </Routes> */}
    </div>
  );
};
// async function fetchUrl() {
//   const response = await fetch(`${BASE_URL}/posts`);
//   // waits until the request completes...
//   console.log(response);
// }

// export default fetchUrl;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
