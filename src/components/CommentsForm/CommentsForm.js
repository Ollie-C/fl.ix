import "../CommentsSection/commentssection.scss";
import commentIcon from "../../assets/Icons/add_comment.svg";
import { isInputValid } from "../../utils/Helper";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../../utils/API";
import axios from "axios";

const CommentsForm = ({ video }) => {
  //CURRENT COMMENT
  const [comment, setComment] = useState("");
  const [newComment, setNewComment] = useState([]);

  const { videoId } = useParams();

  const postComment = async () => {
    const videos = await axios.post(
      `${BASE_URL}videos/${videoId || video.id}/comments?api_key=${API_KEY}`,
      newComment
    );
  };

  const commentChangeHandler = (event) => {
    setComment(event.target.value);
    setNewComment({ name: "test", comment: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!comment) {
      alert("Your comment is blank.");
      return false;
    }
    console.log(newComment);
    postComment();
  };

  return (
    <article className="comment-card">
      <div className="comment-card__left">
        <div className="comments__avatar global__avatar global__avatar--photo"></div>
      </div>
      <div className="comment-card__right">
        <form className="comments__form" onSubmit={submitHandler}>
          <label className="comments__label" htmlFor="addcomment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className={`comments__input global__input ${
              isInputValid(comment, 2, 50) ? "" : "global__input--error"
            }`}
            name="addcomment"
            value={comment}
            onChange={commentChangeHandler}
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
