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
            <section className="header-ad">
              <span />
            </section>

            <section className="board">
              <div className="board__row">
                <span />
                <span />
                <span />
              </div>
              <div className="board__row">
                <span />
                <span />
                <span />
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
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
