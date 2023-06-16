import "./index.css";
import { useState } from "react";
import React from "react";
import Login from "./Components/Login";
import Posts from "./Components/Posts";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import NavBar from "./Components/NavBar";
import AddNewPost from "./Components/AddNewPost";
import PostMessagePage from "./Components/PostMessage";
import ViewPost from "./Components/ViewPost";

import {
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import EditPost from "./Components/EditPost";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
// So, for example, to call for all posts the url would just need to be:
// `${BASE_URL}/posts`

//build out state here; use ternery operators;
//use useEffect() for conditional rendering
//{ if (isLoggedIn === true) ? <Posts/> : null}
const App = () => {
  //will need to pass isLoggedIn to multipple comps
  //set validation of login inputs

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userAccount, setUserAccount] = useState([]);
  // const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({});

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
    alert("You have logged out.");
  };

  return (
    <BrowserRouter>
      <div id="topOfPage">
        <nav>
          <aside>
            <h1 id="title">Stranger Things</h1>
          </aside>
          <Link to="/home" className="options">
            {isLoggedIn ? "Home" : null}
          </Link>
          <Link to="/posts" className="options">
            {isLoggedIn ? "Posts" : null}
          </Link>
          <Link to="/profile" className="options">
            {isLoggedIn ? "Profile" : null}
          </Link>
          <Link to="/login" className="options">
            {isLoggedIn ? null : "Login"}
          </Link>
          <Link to="/register" className="options">
            {isLoggedIn ? (
              <button id="logoutButton" onClick={logout}>
                Log Out
              </button>
            ) : (
              "Register"
            )}
          </Link>
        </nav>
      </div>

      <Route path="/viewpost">
        <ViewPost
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          posts={posts}
          setPosts={setPosts}
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
        />
      </Route>

      <Route path="/editpost">
        <EditPost
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          // posts={posts}
          // setPosts={setPosts}
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
        />
      </Route>

      <Route path="/posts">
        <Posts
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
        />
      </Route>

      <Route path="/profile">
        <Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </Route>

      <Route
        path="/addnewposts"
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      ></Route>

      <Route path="/login">
        <Login
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
        />
        {isLoggedIn ? <p>you are logged in</p> : null}
      </Route>

      <Route path="/register">
        <Register />
      </Route>
    </BrowserRouter>
  );
};

export default App;
