import "./video.scss";

const Video = ({ video }) => {
  return (
    <div className="video-container">
      <video
        src={video.video}
        controls
        className="video"
        poster={video.image}
      ></video>
    </div>
  );
};

export default Video;
