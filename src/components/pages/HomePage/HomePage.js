//MODULES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
//DATA
import videoDetails from "../../../assets/Data/video-details.json";
//STYLES
import "../../../styles/global.scss";
//COMPONENTS
import Video from "../../Video/Video";
import VideoSection from "../../VideoSection/VideoSection";
import CommentsSection from "../../CommentsSection/CommentsSection";
import SuggestionsSection from "../../SuggestionsSection/SuggestionsSection";

const HomePage = () => {
  //Video data
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

  //Handlers
  const suggestedVideoClickHandler = (videoId) => {
    const updatedVideo = videoDetails.find((video) => video.id === videoId);
    setCurrentVideo(updatedVideo);
  };

  const formatDate = (timestamp) => {
    const videoDate = new Date(timestamp);
    return videoDate.toLocaleDateString();
  };
  return (
    <>
      <Video video={currentVideo} />
      <main className="main">
        <div className="section-wrapper">
          <VideoSection video={currentVideo} formatDate={formatDate} />
          <CommentsSection video={currentVideo} formatDate={formatDate} />
        </div>
        <SuggestionsSection
          video={currentVideo}
          suggestedVideoClickHandler={suggestedVideoClickHandler}
        />
      </main>
    </>
  );
};

export default HomePage;
