import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/authAction";
import "../css/nav.css";

function UserAuth(props) {
  return (
    <div className="navbar__bar__links">
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
      <ul>
        <li>
          <NavLink exact to="#" className="" onClick={props.onClick}>
            Log Out
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
function Guest() {
  return (
    <div className="navbar__bar__links">
      <ul>
        <li>
          <NavLink exact to="/signup" className="">
            Sign Up
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink exact to="/login" className="">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
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
            {this.props.auth.isAuthenticated ? (
              <UserAuth onClick={this.props.logout} />
            ) : (
              <Guest />
            )}
          </div>
        </div>
      </header>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth //state.auth.isAuthenticated,
});
export default connect(
  mapStateToProps,
  { logout }
)(HeaderNav);
