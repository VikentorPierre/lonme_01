import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/base.css";
import Navbar from "./components/chuck/header";
import Home from "./components/feed/home";
import { connect } from "react-redux";

import Routes from "./components/routing/Routes";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser, getProfileMeta } from "./actions/authAction";
//import Home from "./components/feed/home";

class App extends Component {
  //run this code everytime to get the user from the token
  componentDidMount() {
    store.dispatch(loadUser());
    store.dispatch(getProfileMeta());
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={window.location.pathname || ''} >
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route component={Routes} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
