import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import Tab from "./include/tabs";

import "../css/profile.css";
class Profile extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }
  render() {
    return (
      <main className="mainContent">
        <div className="mainContent__wrap">
          <div className="mainContent__wrap__content extraContent">
            <header className="header--profile" />
            <Tab />
            {/* <div className="profile--menu--bar">
              <NavLink to="#"> Post </NavLink>
              <NavLink to="#"> Goals </NavLink>
              <NavLink to="#"> Stories </NavLink>
              <NavLink to="#"> Like </NavLink>
            </div> */}
            <section className="profile--content" />
          </div>
        </div>
      </main>
    );
  }
}

export default Profile;
