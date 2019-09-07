import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postAction";
import { Link, match } from "react-router-dom";
import PropTypes from "prop-types";
import "../../css/post.css";
class Posts extends Component {
  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    //const { match: { params } } = this.props;
    this.props.getPosts();
    //console.log(this.props);

  }

  handleDeleteClick(id) {
    //this.props.deletePosts(id);
  }
  handleLink(post_id) {
    this.props.getPostDetail(post_id)

  }
  render() {
    const list = this.props.posts.posts.map(post => {
      return (
        <div className="post__body" key={post.id}>
          <div className="post__body__title ">
            <Link to="#"> {post.title} </Link>
          </div>
          <div className="post__body__des">
            <Link to={`/p/${post._id}/`}>
              <h3>{post.text}</h3>
            </Link>
          </div>
          <div className="post__subBody">
            <span>
              <Link className="poster--link"> mosdev </Link>
            </span>

            <Link className="post--comments--link">135 comments</Link>

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
  { getPosts }
)(Posts);
//component -> actions -> reducer -> store
//So what Brad did was hit click, pass the id to the actions, pass the payload in actions to the reducer, and then into the store
