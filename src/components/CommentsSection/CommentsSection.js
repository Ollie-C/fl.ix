import CommentsForm from "../CommentsForm/CommentsForm.js";
import Comment from "../Comment/Comment.js";
import "../CommentsSection/commentssection.scss";

const CommentsSection = ({ currentVideo, formatDate }) => {
  // const comments = [...currentVideo.comments].reverse();
  const comments = currentVideo.comments;
  const commentCount = comments.length + " Comments"; //to add condition for s on comments

  return (
    <section className="comments">
      <p className="comments__count">{commentCount}</p>
      <CommentsForm currentVideo={currentVideo} />
      {comments.map((comment) => {
        return (
          <Comment key={comment.id} comment={comment} formatDate={formatDate} />
        );
      })}
    </section>
  );
};

export default CommentsSection;
