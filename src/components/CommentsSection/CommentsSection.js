import CommentsForm from "../CommentsForm/CommentsForm.js";
import Comment from "../Comment/Comment.js";
import "../CommentsSection/commentssection.scss";

const CommentsSection = ({ video, formatDate }) => {
  const comments = video.comments;
  const commentCount = video.comments.length + " comments"; //to add condition for s on comments
  return (
    <section className="comments">
      <p className="comments__count">{commentCount}</p>
      <CommentsForm />
      {comments.map((comment) => {
        return (
          <Comment key={comment.id} comment={comment} formatDate={formatDate} />
        );
      })}
    </section>
  );
};

export default CommentsSection;
