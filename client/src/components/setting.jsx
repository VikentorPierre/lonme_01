import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Setting extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }
  render() {
    return (
      <main className="mainContent">
        <div className="mainContent__wrap">
          <div className="mainContent__wrap__content extraContent">
            <header className="header--profile">
              <h1> Setting Page </h1>
            </header>
            <div className="profile--menu--bar">
              <NavLink to="#">Edit Profile</NavLink>
              <NavLink to="#">Privacy & Security</NavLink>
              <NavLink to="#">Change Password</NavLink>
            </div>
            <section className="profile--content" />
          </div>
        </div>
      </main>
    );
  }
}

export default Setting;
