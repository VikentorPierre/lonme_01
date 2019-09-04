import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import defaultUser from "../../null.jpg";

const userAside = ({ userInfo: { userInfo } }) => {
  return (
    <Fragment>
      <section className="user--aside">
        <div className="user--header">
          <div>
            <NavLink to="/profile/">
              <img src={defaultUser} className="default--user--img" alt="" />
            </NavLink>
            <NavLink to="/profile/">
              <h4> {userInfo.username} </h4>
            </NavLink>
            <h3> {userInfo.bio}</h3>
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
  userInfo: state.userInfo
});
export default connect(
  mapStateToProps,
  null
)(userAside);
