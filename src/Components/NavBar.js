import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import Post from "./Posts";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <BrowserRouter>
      <div id="topOfPage">
        <nav>
          <aside>
            <h1 id="title">Stranger Things</h1>
          </aside>
          <Link to="/" className="options">
            Home
          </Link>
          <Link to="/posts" className="options">
            Posts ({Post.length})
          </Link>
          <Link to="/profile" className="options">
            Profile
          </Link>
          <Link to="/login" className="options">
            Login
          </Link>
          <Link to="/register" className="options">
            Register
          </Link>
        </nav>
      </div>
      <Route path="/" element={<div>Home</div>}></Route>

      <Route path="/posts" element={<div>Posts</div>}></Route>

      <Route path="/profile" element={<div>Profile</div>}></Route>

      <Route path="/login" element={<Login />}>
        <Login />
      </Route>

      <Route path="/register" element={<div>Register</div>}></Route>

      {/* <Post></Post> */}
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

export default NavBar;
