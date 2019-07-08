import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/postDetail.css";
class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="mainContent">
        <div className="mainContent__wrap__detail">
          <div className="mainContent__wrap__content detail">
            <section className="detailView-post">
              <div className="post--detail__body">
                <div className="post__body__title detail--title">
                  <NavLink> My Title is this he it is </NavLink>{" "}
                </div>
                <div className="post__body__des">
                  <NavLink to="/p/yesitworks/">
                    <h3>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Rerum impedit officiis, tempora a repellat dignissimos
                      illum nostrum
                    </h3>
                  </NavLink>
                </div>
              </div>
              <div className="post__subBody detail--subbody">
                <span>
                  <NavLink className="poster--link"> mosdev </NavLink>{" "}
                </span>

                <NavLink className="post--comments--link">135 comments</NavLink>

                <button className="post--saved--btn">Save</button>
              </div>
            </section>
            <section className="post--detail__comment" />
          </div>
          <div className="bottom" />
        </div>
      </main>
    );
  }
}

export default PostDetail;
//<h1>{this.props.match.params.id}</h1>
