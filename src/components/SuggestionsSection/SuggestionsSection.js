import "./suggestionssection.scss";
import Suggestion from "../Suggestion/Suggestion.js";
// import VideoShorts from "../../assets/Data/videos.json";

const SuggestionsSection = () => {
  //   const [currentVideo, setCurrentVideo] = useState(VideoShorts[0]);
  return (
    <section className="suggestions">
      <p className="suggestions__header">NEXT VIDEOS</p>
      <ul className="suggestions__list">
        <Suggestion />
      </ul>
    </section>
  );
};

export default SuggestionsSection;
