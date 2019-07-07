import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/post.css";
const Post = () => {
  return (
    <div className="post--content">
      <div className="post__body">
        <div className="post__body__title ">
          <NavLink> My Title is this he it is </NavLink>{" "}
        </div>
        <div className="post__body__des">
          <NavLink>
            <h3>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              impedit officiis, tempora a repellat dignissimos illum nostrum
            </h3>
          </NavLink>
        </div>
        <div className="post__subBody">
          <span>
            <NavLink className="poster--link"> mosdev </NavLink>{" "}
          </span>

          <NavLink className="post--comments--link">135 comments</NavLink>

          <button className="post--saved--btn">Save</button>
        </div>
      </div>
      {/* <div className="post__tail" /> */}
    </div>
  );
};

export default Post;

// my first Post Title Yes Yep
