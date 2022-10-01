import "./suggestion.scss";

const Suggestion = ({ video }) => {
  console.log(video);
  return (
    <>
      <article className="suggestions__card">
        <img
          className="suggestions__image"
          src={video.image}
          alt={video.title}
        />
        <div className="suggestions__details">
          <p className="suggestions__title">{video.title}</p>
          <div className="suggestions__author">{video.channel}</div>
        </div>
      </article>
      {/* <article className="suggestions__card">
        <img className="suggestions__image" src="" alt="" />
        <div className="suggestions__details">
          <p className="suggestions__title">
            Become a Travel Pro In One Easy Lesson
          </p>
          <div className="suggestions__author">Todd Welch</div>
        </div>
      </article>
      <article className="suggestions__card">
        <img className="suggestions__image" src="" alt="" />
        <div className="suggestions__details">
          <p className="suggestions__title">
            Become a Travel Pro In One Easy Lesson
          </p>
          <div className="suggestions__author">Todd Welch</div>
        </div>
      </article>
      <article className="suggestions__card">
        <img className="suggestions__image" src="" alt="" />
        <div className="suggestions__details">
          <p className="suggestions__title">
            Become a Travel Pro In One Easy Lesson
          </p>
          <div className="suggestions__author">Todd Welch</div>
        </div>
      </article>
      <article className="suggestions__card">
        <img className="suggestions__image" src="" alt="" />
        <div className="suggestions__details">
          <p className="suggestions__title">
            Become a Travel Pro In One Easy Lesson
          </p>
          <div className="suggestions__author">Todd Welch</div>
        </div>
      </article> */}
    </>
  );
};

export default Suggestion;
