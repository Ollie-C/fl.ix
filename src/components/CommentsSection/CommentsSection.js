import CommentsForm from "../CommentsForm/CommentsForm.js";
import Comment from "../Comment/Comment.js";
import "../CommentsSection/commentssection.scss";

const CommentsSection = ({ video }) => {
  return (
    <section className="comments">
      <p className="comments__count">3 comments</p>
      <CommentsForm />
      <Comment />
    </section>
  );
};

export default CommentsSection;
