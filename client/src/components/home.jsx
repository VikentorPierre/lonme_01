import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/home.css";
import Post from "./include/post";
import HomeBoard from "./include/boardCategory";
import UserAside from "./include/userAside";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(jsonData => {
        console.log(jsonData);
        this.setState({
          posts: jsonData
        });
      });
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
                <Post dataSource={this.state.posts} />
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
