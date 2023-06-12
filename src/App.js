import "./index.css";
import { useState } from "react";
import React from "react";
import Login from "./Components/Login";
import Posts from "./Components/Posts";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import NavBar from "./Components/NavBar";
import AddNewPost from "./Components/AddNewPost";
import {
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
// So, for example, to call for all posts the url would just need to be:
// `${BASE_URL}/posts`

//build out state here; use ternery operators;
//use useEffect() for conditional rendering
//{ if (isLoggedIn === true) ? <Posts/> : null}
const App = ({ token, setToken }) => {
  //will need to pass isLoggedIn to multipple comps
  //set validation of login inputs

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAccount, setUserAccount] = useState([]);
  // const [token, setToken] = useState("");
  console.log(isLoggedIn);

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
            {/* ({posts.length}) */}
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

      <Route
        path="/"
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        element={<Login />}
      ></Route>

      <Route
        path="/posts"
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        element={<div>Posts</div>}
      >
        <Posts />
      </Route>

      <Route
        path="/profile"
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        element={<Profile />}
      >
        <Profile token={token} setToken={setToken} />
      </Route>

      <Route path="/login" element={<Login />}>
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        {isLoggedIn ? <div>you are logged in</div> : null}
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      {/* {isLoggedIn ? <Posts /> : <NavBar />} */}

      {/* need to re-route to posts page if isLoggedIn === true */}
    </BrowserRouter>
  );
};

export default App;
