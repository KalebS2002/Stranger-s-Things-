import "./index.css";
import React from "react";
import Apps from "./Components/Apps";
import login from "./Components/Login";
import Login from "./Components/Login";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
// So, for example, to call for all posts the url would just need to be:
// `${BASE_URL}/posts`

function Render() {
  return <Apps></Apps>;
}

export default Render;
