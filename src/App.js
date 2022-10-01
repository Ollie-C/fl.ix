//MODULES
import { useState } from "react";
//DATA
import VideoDetails from "./assets/Data/video-details.json";
//STYLES
import "./styles/styles.scss";
//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import VideoSection from "./components/VideoSection/VideoSection";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import SuggestionsSection from "./components/SuggestionsSection/SuggestionsSection";

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(VideoDetails[0]);
  return (
    <>
      <Navbar />
      <VideoSection video={currentVideo} />
      <CommentsSection video={currentVideo} />
      <SuggestionsSection video={currentVideo} />
    </>
  );
};

export default App;
