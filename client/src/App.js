import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/base.css";
import Navbar from "./components/chuck/header";
import Home from "./components/feed/home";
// import Login from "./components/auth/loginpage";
// import Sign from "./components/auth/signuppage";
import { connect } from "react-redux";

//profile
// import {
//   Profile,
//   ProfileGoals,
//   ProfileLikes,
//   ProfileStories
// } from "./components/profile/prof";
// //post
// import CreatePost from "./components/post/postCreate";
// import NewPost from "./components/include/newPost";

// // auth
// import LoginPage from "./components/include/loginpage";
// import SignupPage from "./components/include/signuppage";
//import Profile from "./components/profile";
// import Setting from "./components/setting";
// import PostDetail from "./components/post/postDetail";
//import Home from "./components/feed/home";
import Routes from "./components/routing/Routes";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser, loadUserInfo } from "./actions/authAction";
//import Home from "./components/feed/home";

class App extends Component {
  //run this code everytime to get the user from the token
  componentDidMount() {
    store.dispatch(loadUser());
    store.dispatch(loadUserInfo());
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route exact={true} path="/login" component={Login} />
              <Route exact={true} path="/signUp" component={Sign} /> */}

              <Route component={Routes} />
            </Switch>
            {/* Feed */}
            {/* <Route exact={true} path="/" component={Home} /> */}
            {/* Auth  */}
            {/* <Route exact={true} path="/login" component={LoginPage} />
            <Route exact={true} path="/signup" component={SignupPage} /> */}
            {}
            {/* Profile */}
            {/* <Route exact={true} path="/profile" component={Profile} />
            <Route path="/profile/goals" component={ProfileGoals} />
            <Route path="/profile/stories/" component={ProfileStories} />
            <Route path="/profile/like" component={ProfileLikes} /> */}
            {/* Post */}
            {/* <Route path="/p/:id/" component={PostDetail} />
            <Route exact={true} path="/post/create" component={CreatePost} /> */}
            {/* Setting */}
            {/* <Route path="/setting/" component={Setting} /> */}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
