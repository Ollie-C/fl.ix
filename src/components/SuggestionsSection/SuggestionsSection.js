import "./suggestionssection.scss";
import Suggestion from "../Suggestion/Suggestion.js";
import sideVideos from "../../assets/Data/videos.json";

const SuggestionsSection = ({ video, suggestedVideoClickHandler }) => {
  const filteredVideos = sideVideos.filter((sideVideo) => {
    return sideVideo.id !== video.id;
  });
  return (
    <section className="suggestions">
      <p className="suggestions__header">NEXT VIDEOS</p>
      <ul className="suggestions__list">
        {filteredVideos.map((video) => {
          return (
            <Suggestion
              key={video.id}
              video={video}
              suggestedVideoClickHandler={suggestedVideoClickHandler}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default SuggestionsSection;
