import "../Video/video.scss";

const Video = ({ currentVideo }) => {
  return (
    <div className="video-container">
      <video
        src={currentVideo.video}
        controls
        className="video"
        poster={currentVideo.image}
      ></video>
    </div>
  );
};

export default Video;
