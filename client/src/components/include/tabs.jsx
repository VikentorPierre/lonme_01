import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import defaultUser from "../../null.jpg";
const ProfileTab = ({ profile_meta: { profile_meta } }) => {
  return (
    <Fragment>
      <header className="header--profile">
        <div className="header--profile--pic">
          <img src={defaultUser} className="" alt="" />
        </div>
        <div className="header--profile--info">
          <div className="info--name">{profile_meta.username}</div>
          <div className="info--stats">
            {" "}
            {profile_meta.num_of_posts} {profile_meta.num_of_goals}{" "}
          </div>
          <div className="info--bio"> {profile_meta.bio}</div>
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
  profile_meta: state.profile_meta
});
export default connect(
  mapStateToProps,
  null
)(ProfileTab);
