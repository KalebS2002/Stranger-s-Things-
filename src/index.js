import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Render from "./App";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Render />);
