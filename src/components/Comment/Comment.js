import "../CommentsSection/commentssection.scss";
import deleteIcon from "../../assets/Icons/delete.svg";

const Comment = ({ comment, formatDate }) => {
  return (
    <article className="comment-card">
      <div className="comment-card__left">
        <div className="comments__avatar global__avatar"></div>
      </div>
      <div className="comment-card__right">
        <div className="name-wrapper">
          <p className="comments__name">{comment.name}</p>
          <p className="comments__date">{formatDate(comment.timestamp)}</p>
        </div>
        <p className="comments__text">{comment.comment}</p>
        <img
          className="comments__delete"
          src={deleteIcon}
          alt="delete-comment"
          onClick={() => alert("No idea")}
        />
      </div>
    </article>
  );
};

export default Comment;
