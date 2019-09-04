import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

import { connect } from "react-redux";
import { getPosts } from "../../actions/postAction";

const board = (props) => {

  return (
    <Fragment>
      <div className="board__row">
        <span>
          {/* <button value='others' onClick={e => this.props.getPosts(e.target.value)}> Others </button> */}
          <Link to="/posts/others" onClick={e => {
            e.preventDefault()
            props.getPosts('others')
          }}> Stories </Link>
        </span>
        <span>
          <Link to="#" onClick={e => {
            e.preventDefault()
            props.getPosts('Advice')
          }}> advice </Link>
        </span>
        <span>
          <a href="#"> Q&A </a>
        </span>
      </div>
      <div className="board__row">
        <span>
          <a href="#"> discution </a>{" "}
        </span>
        <span>
          <a href="#"> highlights </a>{" "}
        </span>
        <span>
          <a href="#"> what you watching </a>{" "}
        </span>
      </div>
    </Fragment>
  );
};

export default connect(null, { getPosts })(board);
