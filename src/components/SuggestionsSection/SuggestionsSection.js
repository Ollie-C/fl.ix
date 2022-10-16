import "./suggestionssection.scss";
import Suggestion from "../Suggestion/Suggestion.js";

const SuggestionsSection = ({ videos, videoId }) => {
  const filteredVideos = videos.filter((video) => video.id !== videoId);
  return (
    <section className="suggestions">
      <p className="suggestions__header">NEXT VIDEOS</p>
      <ul>
        {filteredVideos.map((video) => (
          <Suggestion key={video.id} video={video} />
        ))}
        ;
      </ul>
    </section>
  );
};

export default SuggestionsSection;
