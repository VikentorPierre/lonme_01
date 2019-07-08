import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./components/header";
import Home from "./components/home";
import Profile from "./components/profile";
import Setting from "./components/setting";
import PostDetail from "./components/postDetail";

import "./css/base.css";
//import "./css/main.css";

//import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/" component={Profile} />
        <Route exact path="/setting/" component={Setting} />
        <Route exact path="/p/:id/" component={PostDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
