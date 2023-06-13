import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Post from "./Posts";
import Profile from "./Profile";
import NavBar from "./NavBar";
import Login from "./Login";

const Home = () => {
  // return <Login />;
  console.log(localStorage.token);
};

export default Home;
