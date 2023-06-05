import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const posts = () => {};

const Apps = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <div>
        <h1 id="title">Strangers Things</h1>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/posts">Posts ({posts.length})</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/posts" element={<div>Posts</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<div>Register</div>} />
      </div>

      {/* Maybe something like this...
      
      <Posts></Posts>
      <Profile></Profile>
      <Login></Login>
      <Profile></Profile> 
      etc...
    
      
      */}
    </BrowserRouter>
  );
};

export default Apps;
