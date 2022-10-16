import "../CommentsSection/commentssection.scss";
import commentIcon from "../../assets/Icons/add_comment.svg";
import { isInputValid } from "../../utils/Helper";
import { useState } from "react";

const CommentsForm = ({ formSubmitHandler }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!comment) {
      setError("Please enter a comment.");
    } else {
      setError(false);
      formSubmitHandler(e, comment);
    }
  };

  return (
    <article className="comment-card">
      <div className="comment-card__left">
        <div className="comments__avatar global__avatar global__avatar--photo"></div>
      </div>
      <div className="comment-card__right">
        <form
          className="comments__form"
          id="commentsForm"
          onSubmit={submitHandler}
        >
          <label className="comments__label" htmlFor="addcomment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className={`comments__input global__input ${
              isInputValid(comment, 50) ? "" : "global__input--error"
            }`}
            name="addcomment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            id="addcomment"
            placeholder="Add a new comment"
          ></textarea>

          <div className="comments__button-wrapper">
            <img
              className="comments__icon"
              src={commentIcon}
              alt="comment-icon"
            />
            <button
              type="submit"
              form="commentsForm"
              className="comments__button global__button"
            >
              COMMENT
            </button>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    </article>
  );
};

export default CommentsForm;
