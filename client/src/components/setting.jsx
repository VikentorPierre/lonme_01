import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/setting.css";

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
              <a href="#edit">Edit Profile</a>
              <a href="#privacy">Privacy & Security</a>
              <a href="#password">Change Password</a>
            </div>
            {/* <section className="profile--content"> */}
            <div id="edit" />
            <div id="privacy" />
            <div id="password" />
            {/* </section> */}
          </div>
        </div>
      </main>
    );
  }
}

export default Setting;
