import "../CommentsSection/commentssection.scss";

const CommentsForm = () => {
  return (
    <article className="comment-card comments__form">
      <div className="comment-card__left">
        <div className="comments__avatar global__avatar global__avatar--photo"></div>
      </div>
      <div className="comment-card__right">
        <form className="comments__form">
          <label className="comments__label" htmlFor="">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="comments__input global__input"
            name=""
            id=""
            placeholder="Add a new comment"
          ></textarea>
          <button className="comment__button global__button">COMMENT</button>
        </form>
      </div>
    </article>
  );
};

export default CommentsForm;
