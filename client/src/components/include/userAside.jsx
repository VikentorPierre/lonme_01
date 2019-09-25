import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import defaultUser from "../../null.jpg";

const userAside = ({ profile_meta: { profile_meta } }) => {
  return (
    <Fragment>
      <section className="user--aside">
        <div className="user--header">
          <div>
            <NavLink to="/profile/">
              <img src={defaultUser} className="default--user--img" alt="" />
            </NavLink>
            <NavLink to="/profile/">
              <h4> {profile_meta.username} </h4>
            </NavLink>
            <h3> {profile_meta.bio}</h3>
          </div>
        </div>
      </section>
      <section className="header-ad">
        <span>
          <strong> AD</strong>
        </span>
      </section>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  profile_meta: state.profile_meta
});
export default connect(
  mapStateToProps,
  null
)(userAside);
