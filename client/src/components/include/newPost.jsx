import React, { Component } from "react";
import CreatePostComp from "../chuck/newPost";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: null
    };
  }
  render() {
    return (
      <main className="mainContent">
        <div className="mainContent__wrap">
          <div className="mainContent__wrap__content create--post--content ">
            <CreatePostComp />
          </div>
        </div>
      </main>
    );
  }
}

export default NewPost;
