//MODULES
import { useState } from "react";
//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import VideoSection from "./components/VideoSection/VideoSection";
//DATA
import VideoDetails from "./assets/Data/video-details.json";
//STYLES
import "./styles/styles.scss";

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(VideoDetails[0]);
  return (
    <>
      <Navbar />
      <VideoSection video={currentVideo} />
    </>
  );
};

export default App;
