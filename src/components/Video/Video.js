import "../Video/video.scss";
import { API_KEY, BASE_URL } from "../../utils/API";

const Video = ({ video }) => {
  return (
    <div className="video-container">
      <video
        src={`${video.video}?api_key=${API_KEY}`}
        controls
        className="video"
        poster={video.image}
      ></video>
    </div>
  );
};

export default Video;
