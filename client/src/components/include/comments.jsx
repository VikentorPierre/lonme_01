import React from "react";
import "../../css/comments.css";

const Comments = props => {
  const { comment } = props;
  return <div className="comment__body">{comment}</div>;
};

const CommentArea = props => {
  //const { myName } = props;
  return (
    <div className="comment--input--wrap">
      <form action="#" className="comment--form" onSubmit={props.onSubmit}>
        <textarea
          type="text"
          name="text"
          className="comment--form__input"
          placeholder="enter your comment here "
          onChange={props.onChange}
          onClick={props.onClick}
          disabled={props.isDisabled}
        />
        <input className="" type="submit" value="submit" />
      </form>
    </div>
  );
};

export { Comments, CommentArea };
