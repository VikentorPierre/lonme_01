import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/post.css";
const Post = props => {
  const { dataSource } = props;
  const list = dataSource.map(item => {
    return (
      <div className="post__body" key={item.id}>
        <div className="post__body__title ">
          <NavLink to="#"> {item.title} </NavLink>
        </div>
        <div className="post__body__des">
          <NavLink to="/p/yesitworks/">
            <h3>{item.body}</h3>
          </NavLink>
        </div>
        <div className="post__subBody">
          <span>
            <NavLink className="poster--link"> mosdev </NavLink>
          </span>

          <NavLink className="post--comments--link">135 comments</NavLink>

          <button className="post--saved--btn">Save</button>
        </div>
      </div>
    );
  });
  return <div className="post--content">{list}</div>;
};
export default Post;

{
  /* <div className="post__body">
<div className="post__body__title ">
  <NavLink> My Title is this he it is </NavLink>{" "}
</div>
<div className="post__body__des">
  <NavLink to="/p/yesitworks/">
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
</div> */
}
