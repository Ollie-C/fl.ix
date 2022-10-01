import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import Video from "../Video/Video.js";
import "./videosection.scss";

const VideoSection = ({ video }) => {
  // let videoDate = new Date(video.timestamp);

  return (
    <>
      <Video video={video} />
      <section className="content">
        <article className="description">
          <div className="description__card">
            <h1 className="description__header">{video.title}</h1>
          </div>
          <div className="description__card description__card--middle">
            <div className="description__container description__container--left">
              <p className="description__author">By {video.channel}</p>
              <p className="description__date">FIX THIS</p>
            </div>
            <div className="description__container">
              <div className="description__counter">
                <img
                  className="description__icon"
                  src={viewsIcon}
                  alt="views-icon"
                />
                <p className="description__viewcount">{video.views}</p>
              </div>
              <div className="description__counter">
                <img
                  className="description__icon"
                  src={likesIcon}
                  alt="views-icon"
                />
                <p className="description__likecount">{video.likes}</p>
              </div>
            </div>
          </div>
          <div className="description__card">
            <p className="description__text">{video.description}</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default VideoSection;
