import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Comments, CommentArea } from "./include/comments";
import "../css/postDetail.css";
class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { isDisabled: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleClick(e) {
    e.preventDefault();
    //this.setState({ isDisabled: !this.isDisabled });
    console.log(this.state);
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
            <section className="post--detail__comment">
              <Comments comment="this is a comment" />
              <Comments comment="this is a comment" />
              <Comments comment="this is a comment" />
              <Comments comment="this is a comment" />
              <Comments comment="this is a comment" />
              <Comments comment="this is a comment" />
              <Comments comment="this is a comment" />
              <Comments comment="this is a comment" />
            </section>
          </div>
          <CommentArea
            onChange={this.handleChange}
            onClick={this.handleClick}
            isDisabled={this.isDisabled}
          />
          {/* <div className="bottom" /> */}
        </div>
      </main>
    );
  }
}

export default PostDetail;
//<h1>{this.props.match.params.id}</h1>
