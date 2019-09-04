import React, { Component } from "react";
import "../../css/postCreate.css";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../../actions/postAction";
class PostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
      tag: "",
      error: null
    };
    this.handleFormOnSubmit = this.handleFormOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  handleFormOnSubmit(e) {
    e.preventDefault();


    const { text, title, tag } = this.state;
    // // new Post
    const newPost = {
      text,
      title,
      tag
    };
    this.props.createPost(newPost, this.props.history);
    //this.props.registerNewUser(newUser, this.props.history);
  }

  render() {
    return (
      <main className="mainContent newPost">
        <div className="mainContent__wrap">
          <div className="mainContent__wrap__content create--post--content ">
            <div className="inner--container--post">
              <div className="inner--post--create">
                <header>
                  <h3> post </h3>
                </header>
                <form className="post--create--form" onSubmit={this.handleFormOnSubmit}>
                  <div>
                    <textarea
                      type="textarea"
                      className="post--create__title"
                      placeholder="Title (optional)"
                      name="title"
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div>
                    <textarea
                      className="post--create__body"
                      type="textarea"
                      name="text"
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="post--create__footer">
                    <select className="post--create__tag" name="tag" id="" onChange={this.handleOnChange}>
                      <option> pick a tag </option>
                      <option value="Story"> Story </option>
                      <option value="Advice"> Advice</option>
                      <option value="others"> Other </option>
                    </select>
                    <input className="submit--post" type="submit" value="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };
}
// const mapStateToProps = state => ({
//   auth: state.auth //state.auth.isAuthenticated,
// });
// PostCreate.propTypes = {
//   //createPost: PropTypes.func.isRequired,
//   auth: PropTypes.bool
// };
//export default postCreate;
export default connect(
  null,
  { createPost }
)(PostCreate);
