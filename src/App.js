import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Users from "./Components/Users/Users";
import User from "./Components/User/User";
import UserPosts from "./Components/UserPosts/UserPosts";
import Post from "./Components/Post/Post";
import Albums from "./Components/Albums/Albums";
import Photos from "./Components/Photos/Photos";
export default function App() {
  return (
    <div style={{maxHeight:"100vh"}}>

    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/user/:id">
            <User></User>
          </Route>
          <Route exact path="/posts/:id">
          <UserPosts></UserPosts>
          </Route>
          <Route exact path="/post/:id">
          <Post></Post>
          </Route>
          <Route exact path="/user/:userid/albums">
         <Albums></Albums>
          </Route>
          <Route exact path="/album/:albumid/photos">
         <Photos></Photos>
          </Route>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

        </Switch>
      </div>
    </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}



