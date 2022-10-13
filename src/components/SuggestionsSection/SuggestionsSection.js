import "./suggestionssection.scss";
import Suggestion from "../Suggestion/Suggestion.js";
import { useParams } from "react-router-dom";

const SuggestionsSection = ({ videos }) => {
  const { videoId } = useParams();

  const filteredVideos = videos.filter((video) => {
    return video.id !== videoId;
  });
  return (
    <section className="suggestions">
      <p className="suggestions__header">NEXT VIDEOS</p>
      <ul>
        {filteredVideos.map((video) => {
          return <Suggestion key={video.id} video={video} />;
        })}
      </ul>
    </section>
  );
};

export default SuggestionsSection;
