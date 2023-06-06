import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar";
import Login from "./Login";
import Post from "./Posts";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const posts = () => {};

const Apps = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);

  return (
    <div>
      <NavBar />
      <div>
        {/* <Login /> */}
        {/* <Posts /> */}
      </div>
    </div>
  );
};

export default Apps;
