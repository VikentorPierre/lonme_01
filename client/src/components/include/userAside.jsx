import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import defaultUser from "../../null.jpg";

const userAside = props => {
  return (
    <Fragment>
      <section className="user--aside">
        <div className="user--header">
          <div>
            <NavLink to="/profile/">
              <img src={defaultUser} className="default--user--img" alt="" />
            </NavLink>
            <NavLink to="/profile/">
              <h4> mosdev </h4>
            </NavLink>
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

export default userAside;
