//MODULES
import { useState } from "react";
//DATA
import videoDetails from "./assets/Data/video-details.json";
//STYLES
import "./styles/global.scss";
//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
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

  return (
    <>
      <Navbar />
      <VideoSection video={currentVideo} />
      <CommentsSection video={currentVideo} />
      <SuggestionsSection
        video={currentVideo}
        suggestedVideoClickHandler={suggestedVideoClickHandler}
      />
    </>
  );
};

export default App;
