import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import "./videosection.scss";
import { useState } from "react";

const VideoSection = ({ currentVideo, formatDate, likeHandler }) => {
  const [like, setLike] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    if (!like) {
      likeHandler(e);
      setLike(true);
      console.log("success");
    } else {
      console.log("fail");
    }
  };
  return (
    <>
      <article className="description">
        <div className="description__card description__card--top">
          <h1 className="description__header">{currentVideo.title}</h1>
        </div>
        <div className="description__card description__card--middle">
          <div className="description__container description__container--left">
            <p className="description__author">By {currentVideo.channel}</p>
            <p className="description__date">
              {formatDate(currentVideo.timestamp)}
            </p>
          </div>
          <div className="description__container">
            <div className="description__counter">
              <img
                className="description__icon"
                src={viewsIcon}
                alt="views-icon"
              />
              <p className="description__viewcount">{currentVideo.views}</p>
            </div>
            <div className="description__counter">
              <img
                className={`description__icon ${
                  !like ? "" : "description__icon--liked"
                }`}
                src={likesIcon}
                alt="views-icon"
                onClick={clickHandler}
              />
              <p className="description__likecount">{currentVideo.likes}</p>
            </div>
          </div>
        </div>
        <div className="description__card">
          <p className="description__text">{currentVideo.description}</p>
        </div>
      </article>
    </>
  );
};

export default VideoSection;
