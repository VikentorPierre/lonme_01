import React, { Component } from "react";
//import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "../css/home.css";
import Post from "./include/posts";
import HomeBoard from "./include/boardCategory";
import UserAside from "./include/userAside";
class Home extends Component {
  // static propTypes = {
  //   getPosts: PropTypes.func.isRequired,
  //   post: PropTypes.object.isRequired,
  //   isAuthenticated: PropTypes.bool
  // };

  componentDidMount() {}
  handleDeleteClick(id) {
    this.props.deletePosts(id);
  }
  render() {
    return (
      <main className="mainContent">
        <div className="mainContent__wrap">
          <div className="mainContent__wrap__content">
            <div className="content-left">
              <section className="board">
                <HomeBoard />
              </section>
              <section className="filter">
                <span className="filter__text">
                  <h3> {"stories:"} </h3>
                </span>
                <span className="filter__radio" />
              </section>

              <section className="post-home">
                <Post />
              </section>
            </div>
            <div className="content-right">
              <UserAside />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
