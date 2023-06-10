import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import Register from "./Register";
import Post from "./Posts";
import Profile from "./Profile";
import Home from "./Home";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavBar = () =>
  // { isLoggedIn, setIsLoggedIn }
  {
    // const [posts, setPosts] = useState([]);

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
              Posts
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
