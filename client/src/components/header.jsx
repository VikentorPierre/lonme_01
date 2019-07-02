import React, { Component } from "react";
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
            <a href="#">
              <h1>LoneMe</h1>
            </a>
          </div>
          <div className="navbar__bar__links">
            <ul>
              <li>
                <a href="#"> action1</a>
              </li>
            </ul>
            <ul>
              <li>
                {" "}
                <a href="#"> action2</a>
              </li>
            </ul>
            <ul>
              <li>
                {" "}
                <a href="#"> action3</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderNav;
