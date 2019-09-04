import React from "react";
//import "../../css/newPost.css";
const newPostComp = props => {
  return (
    <div className="inner--post">
      <div className="inner--post--create">
        <form onSubmit={props.onSubmit} className="post--create--form">
          <input
            type="text"
            className="post--create__title"
            placeholder="Title (optional)"
            onChange={props.onChange}
          />
          <span className="post--creat__body">
            <textarea type="textarea" className="" onChange={props.onChange} />
          </span>
          <span>
            <input type="submit" value="submit" />
          </span>
        </form>
      </div>
    </div>
  );
};

export default newPostComp;
