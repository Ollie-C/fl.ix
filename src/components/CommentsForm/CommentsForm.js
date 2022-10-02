import "../CommentsSection/commentssection.scss";
import commentIcon from "../../assets/Icons/add_comment.svg";

const CommentsForm = () => {
  return (
    <article className="comment-card comments__form">
      <div className="comment-card__left">
        <div className="comments__avatar global__avatar global__avatar--photo"></div>
      </div>
      <div className="comment-card__right">
        <form className="comments__form">
          <label className="comments__label" htmlFor="addcomment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="comments__input global__input"
            name="addcomment"
            id="addcomment"
            placeholder="Add a new comment"
          ></textarea>

          <div className="comments__button-wrapper">
            <img
              className="comments__icon"
              src={commentIcon}
              alt="comment-icon"
            />
            <button className="comments__button global__button">COMMENT</button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default CommentsForm;
