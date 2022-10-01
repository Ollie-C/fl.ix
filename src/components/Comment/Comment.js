import "../CommentsSection/commentssection.scss";

const Comment = () => {
  return (
    <article className="comment-card">
      <div className="comment-card__left">
        <div className="comments__avatar global__avatar"></div>
      </div>
      <div className="comment-card__right">
        <div className="name-wrapper">
          <p className="comments__name">Michael Lyons</p>
          <p className="comments__date">08/09/2021</p>
        </div>
        <p className="comments__text">
          They BLEW the ROOF off at their last event, once everyone started
          figuring out they were going. This is still simply the greatest
          opening of an event I have EVER witnessed.
        </p>
      </div>
    </article>
  );
};

export default Comment;
