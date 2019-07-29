import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/post.css";
const Post = props => {
  const { dataSource, onClick } = props;
  const list = dataSource.map((id, title, body) => {
    return (
      <div className="post__body" key={id}>
        <div className="post__body__title ">
          <NavLink to="#"> {title} </NavLink>
        </div>
        <div className="post__body__des">
          <NavLink to="/p/yesitworks/">
            <h3>{body}</h3>
          </NavLink>
        </div>
        <div className="post__subBody">
          <span>
            <NavLink className="poster--link"> mosdev </NavLink>
          </span>

          <NavLink className="post--comments--link">135 comments</NavLink>

          <button className="post--saved--btn" onClick={onClick.bind(id)}>
            Save
          </button>
        </div>
      </div>
    );
  });
  return <div className="post--content">{list}</div>;
};
export default Post;
