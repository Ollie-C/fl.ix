//MODULES
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
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
  const API_KEY = "?api_key=05b216db-6e48-4f54-9825-e00c61ac41a6";
  const { videoId } = useParams();
  //State
  // Video list
  const [videos, setVideos] = useState(null);
  // Current video details
  const [currentVideo, setCurrentVideo] = useState(null);

  const hardcodedId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const currentVideoId = videoId == null ? hardcodedId : videos[0].id;

  // GET list of videos
  const getVideos = async () => {
    const videoList = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${API_KEY}`
    );
    console.log("videos:");
    console.log(videoList.data);
    setVideos(videoList.data);
  };
  // GET individual video details
  const getCurrentVideo = async () => {
    const videos = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${currentVideoId}${API_KEY}`
    );
    console.log("currentVideo:");
    console.log(videos.data);
    setCurrentVideo(videos.data);
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    getCurrentVideo();
  }, []);

  if (!currentVideo) {
    return <p>Loading</p>;
  }
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
