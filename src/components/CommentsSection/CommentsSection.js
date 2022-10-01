import CommentsForm from "../CommentsForm/CommentsForm.js";
// import Comments from "../Comments/Comments.js";
import "../CommentsSection/commentssection.scss";

const CommentsSection = ({ video }) => {
  return (
    <section className="comments">
      <p className="comments__count">3 comments</p>
      <CommentsForm />
      {/* <Comments /> */}
    </section>
  );
};

export default CommentsSection;
