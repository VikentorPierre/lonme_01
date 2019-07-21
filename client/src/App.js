import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/header";
import Home from "./components/home";
import {
  Profile,
  ProfileGoals,
  ProfileLikes,
  ProfileStories
} from "./components/prof";
//import Profile from "./components/profile";
import Setting from "./components/setting";
import PostDetail from "./components/postDetail";

import "./css/base.css";
//import "./css/main.css";

//import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/profile" component={Profile} />
          <Route path="/profile/goals" component={ProfileGoals} />
          <Route path="/profile/stories/" component={ProfileStories} />
          <Route path="/profile/like" component={ProfileLikes} />
          <Route path="/setting/" component={Setting} />
          <Route path="/p/:id/" component={PostDetail} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

//
