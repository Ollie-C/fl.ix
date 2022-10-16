import { NavLink } from "react-router-dom";
import "./suggestion.scss";

const Suggestion = ({ video }) => {
  return (
    <>
      <NavLink className="suggestions__link" to={`/videos/${video.id}`}>
        <article
          className="suggestions__card"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
      </NavLink>
    </>
  );
};

export default Suggestion;
