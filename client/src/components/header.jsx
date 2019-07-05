import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="navbar">
        <div className="navbar__bar">
          <div className="navbar__bar__logo">
            <NavLink exact to="/">
              <h1>LoneMe</h1>
            </NavLink>
          </div>
          <div className="navbar__bar__links">
            <ul>
              <li>
                <a href="#"> action1</a>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink exact to="/setting/" className="">
                  Setting
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink exact to="/profile/" className="">
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderNav;
