import "../CommentsSection/commentssection.scss";

const Comment = ({ comment }) => {
  return (
    <article className="comment-card">
      <div className="comment-card__left">
        <div className="comments__avatar global__avatar"></div>
      </div>
      <div className="comment-card__right">
        <div className="name-wrapper">
          <p className="comments__name">{comment.name}</p>
          <p className="comments__date">FIX ME</p>
        </div>
        <p className="comments__text">{comment.comment}</p>
      </div>
    </article>
  );
};

export default Comment;
