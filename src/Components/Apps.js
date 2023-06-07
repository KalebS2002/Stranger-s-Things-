import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar";
import Login from "./Login";
import Post from "./Posts";
import Register from "./Register";
import Profile from "./Profile";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const TOKEN_STRING_HERE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgwYjE0YTUxMjQxMzAwMTQ0MTExZjEiLCJ1c2VybmFtZSI6ImthbGViUzIwMDIiLCJpYXQiOjE2ODYxNTU1OTR9.zDKJC2eufW-FIDCCHRlP7iJtF0Mu79Btoo2DyfFL3bk";

const Apps = () => {
  return <NavBar />;
};

export default Apps;
