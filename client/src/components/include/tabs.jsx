import React from "react";
import { NavLink } from "react-router-dom";
const ProfileTab = () => {
  return (
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
  );
};

export default ProfileTab;
