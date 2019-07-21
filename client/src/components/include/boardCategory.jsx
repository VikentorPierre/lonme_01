import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const board = () => {
  return (
    <Fragment>
      <div className="board__row">
        <span>
          <a href="#"> Stories </a>
        </span>
        <span>
          <a href="#"> advice </a>
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

export default board;
