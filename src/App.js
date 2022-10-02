//MODULES
import { useState } from "react";
//DATA
import videoDetails from "./assets/Data/video-details.json";
//STYLES
import "./styles/global.scss";
//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Video from "./components/Video/Video";
import VideoSection from "./components/VideoSection/VideoSection";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import SuggestionsSection from "./components/SuggestionsSection/SuggestionsSection";

const App = () => {
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
      <Navbar />
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

export default App;
