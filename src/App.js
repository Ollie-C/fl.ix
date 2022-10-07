//MODULES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
//DATA
import videoDetails from "./assets/Data/video-details.json";
//STYLES
import "./styles/global.scss";
//COMPONENTS
import HomePage from "./components/pages/HomePage/HomePage";
import UploadPage from "./components/pages/UploadPage/UploadPage";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

const App = () => {
  //Handlers
  // const suggestedVideoClickHandler = (videoId) => {
  //   const updatedVideo = videoDetails.find((video) => video.id === videoId);
  //   setCurrentVideo(updatedVideo);
  // };

  // const formatDate = (timestamp) => {
  //   const videoDate = new Date(timestamp);
  //   return videoDate.toLocaleDateString();
  // };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
