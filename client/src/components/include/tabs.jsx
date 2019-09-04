import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import defaultUser from "../../null.jpg";
const ProfileTab = ({ userInfo: { userInfo } }) => {
  return (
    <Fragment>
      <header className="header--profile">
        <div className="header--profile--pic">
          <img src={defaultUser} className="" alt="" />
        </div>
        <div className="header--profile--info">
          <div className="info--name">{userInfo.username}</div>
          <div className="info--stats">
            {" "}
            {userInfo.num_of_posts} {userInfo.num_of_goals}{" "}
          </div>
          <div className="info--bio"> {userInfo.bio}</div>
        </div>
      </header>
      <div className="profile--menu--bar">
        <NavLink to="/profile/" className="profile-tab-link">
          {" "}
          Post{" "}
        </NavLink>
        <NavLink to="/profile/goals/" className="profile-tab-link">
          Goals
        </NavLink>
        <NavLink to="/profile/stories/" className="profile-tab-link">
          {" "}
          Stories{" "}
        </NavLink>
        <NavLink to="/profile/like/" className="profile-tab-link">
          {" "}
          Like{" "}
        </NavLink>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo
});
export default connect(
  mapStateToProps,
  null
)(ProfileTab);
