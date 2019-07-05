import React, { Component } from "react";
import "../css/home.css";
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
                  <h3> {"stories"} Filter By: </h3>
                </span>
                <span className="filter__radio" />
              </section>

              <section className="post-home">
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
                <span />
              </section>
            </dir>
            <div className="content-right">
              <section className="person" />
              <section className="header-ad">
                <span>
                  {" "}
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
