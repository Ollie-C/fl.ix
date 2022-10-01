import "./suggestion.scss";

const Suggestion = ({ video, suggestedVideoClickHandler }) => {
  return (
    <>
      <article
        className="suggestions__card"
        onClick={() => {
          suggestedVideoClickHandler(video.id);
        }}
      >
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
    </>
  );
};

export default Suggestion;
