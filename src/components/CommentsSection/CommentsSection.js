import CommentsForm from "../CommentsForm/CommentsForm.js";
import Comment from "../Comment/Comment.js";
import "../CommentsSection/commentssection.scss";

const CommentsSection = ({ video }) => {
  const comments = video.comments;
  return (
    <section className="comments">
      <p className="comments__count">3 comments</p>
      <CommentsForm />
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </section>
  );
};

export default CommentsSection;
