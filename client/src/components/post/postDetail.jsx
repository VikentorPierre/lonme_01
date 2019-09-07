import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Comments, CommentArea } from "../include/comments";
import { connect } from "react-redux";
import { getPostDetail } from "../../actions/postAction";
import { addComment } from "../../actions/commentAction";
import "../../css/postDetail.css";
class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getPostDetail(this.props.match.params.id)
  }
  handleSubmit(e) {
    e.preventDefault()
    const { text } = this.state
    console.log(text);
    const newComment = {
      text: text,
      postId: this.props.post._id
    }
    this.props.addComment(newComment, this.props.history)
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
    console.log(this.props.post._id);

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
              <div className="post--detail__body" key={this.props.post['_id']}>
                <div className="post__body__title detail--title">
                  <h2>{this.props.post['title']}</h2>
                </div>
                <div className="post__body__des">

                  <h3>
                    {this.props.post['text']}
                  </h3>

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
            onSubmit={this.handleSubmit}
          />
        </div>
      </main>
    );
  }
}
const mapStateToProps = state => ({
  post: state.posts.post
})
export default connect(mapStateToProps, { getPostDetail, addComment })(PostDetail);
