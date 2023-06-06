import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Render from "./App";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const token =
  "eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9";

// const testURL =
//   "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts";

// async function fetchData() {
//   const returned = await fetch(`${BASE_URL}/posts`);
//   const jsonData = await returned.json();
//   console.log(jsonData);
// }

// fetchData();
// async function fetchData() {
//   const response = await fetch(testURL);
//   const data = await response.text();
//   console.log(data);
// }

// fetchData();

// const someFunction = async (token) => {
//   try {
//     const response = await fetch(`${BASE_URL}/someEndPoint`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         /* whatever things you need to send to the API */
//       }),
//     });
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.error(err);
//   }
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Render />);
