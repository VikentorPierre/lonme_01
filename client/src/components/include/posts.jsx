import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, deletePosts } from "../../actions/postAction";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "../../css/post.css";
class Posts extends Component {
  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getPosts();
  }

  handleDeleteClick(id) {
    this.props.deletePosts(id);
  }
  render() {
    const list = this.props.posts.posts.map(post => {
      return (
        <div className="post__body" key={post.id}>
          <div className="post__body__title ">
            <NavLink to="#"> {post.title} </NavLink>
          </div>
          <div className="post__body__des">
            <NavLink to="/p/yesitworks/">
              <h3>{post.body}</h3>
            </NavLink>
          </div>
          <div className="post__subBody">
            <span>
              <NavLink className="poster--link"> mosdev </NavLink>
            </span>

            <NavLink className="post--comments--link">135 comments</NavLink>

            <button
              className="post--saved--btn"
              onClick={this.handleDeleteClick.bind(this, post.id)}
            >
              Save
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="post--content">
        <h1>{list} </h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts
  //posts: state.posts.items
});
// connect take two parameter first is the store state, second is a list of action
export default connect(
  mapStateToProps,
  { getPosts, deletePosts }
)(Posts);
//component -> actions -> reducer -> store
//So what Brad did was hit click, pass the id to the actions, pass the payload in actions to the reducer, and then into the store
