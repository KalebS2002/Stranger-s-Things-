import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Apps = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);
  return (
    <div>
      <h1>Strangers Things</h1>
      <nav>
        <Link to="/posts">Posts ({posts.length})</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      {/* <Routes>
        <Route path="/posts" element={<div>Posts</div>} />} />
        <Route path="/login" element={<div>Login</div>} />} />
        <Route path="/register" element={<div>Register</div>} />} />
      </Routes> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
