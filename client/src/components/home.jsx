import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/home.css";
import defaultUser from "../null.jpg";
// stories, advice, Q&A,
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="mainContent">
        <div className="mainContent__wrap">
          <div className="mainContent__wrap__content">
            <dir className="content-left">
              <section className="board">
                <div className="board__row">
                  <span>
                    <a href="#"> Stories </a>
                  </span>
                  <span>
                    <a href="#"> advice </a>
                  </span>
                  <span>
                    {" "}
                    <a href="#"> Q&A </a>
                  </span>
                </div>
                <div className="board__row">
                  <span>
                    {" "}
                    <a href="#"> discution </a>{" "}
                  </span>
                  <span>
                    {" "}
                    <a href="#"> highlights </a>{" "}
                  </span>
                  <span>
                    {" "}
                    <a href="#"> what you watching </a>{" "}
                  </span>
                </div>
              </section>
              <section className="filter">
                <span className="filter__text">
                  <h3> {"stories:"} </h3>
                </span>
                <span className="filter__radio" />
              </section>

              <section className="post-home">
                <span>
                  <NavLink to="/setting/">
                    <div />
                  </NavLink>
                </span>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </section>
            </dir>
            <div className="content-right">
              <section className="user--aside">
                <div className="user--header">
                  <div>
                    <NavLink to="/profile/">
                      <img
                        src={defaultUser}
                        className="default--user--img"
                        alt=""
                      />
                    </NavLink>
                    <NavLink to="/profile/">
                      {" "}
                      <h4> mosdev </h4>{" "}
                    </NavLink>
                  </div>
                </div>
              </section>
              <section className="header-ad">
                <span>
                  <strong> AD</strong>{" "}
                </span>
              </section>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
