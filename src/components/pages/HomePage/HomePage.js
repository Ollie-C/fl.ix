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
  const [videoList, setVideoList] = useState(null);
  // Current video details
  const [videoDetails, setVideoDetails] = useState(null);

  // // const currentVideoId = videoId == null ? hardcodedId : videos[0].id;

  // GET list of videos
  const getVideos = async () => {
    const videos = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${API_KEY}`
    );

    const videosData = videos.data;
    setVideoList(videos.data);
    const video = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${videosData[0].id}${API_KEY}`
    );

    setVideoDetails(video.data);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (!videoDetails) {
    return <h2 className="loading">Loading. . .</h2>;
  }
  //Handlers
  const suggestedVideoClickHandler = (videoId) => {
    const updatedVideo = videoList.find((video) => video.id === videoId);
    setVideoDetails(updatedVideo);
  };

  const formatDate = (timestamp) => {
    const videoDate = new Date(timestamp);
    return videoDate.toLocaleDateString();
  };
  return (
    <>
      <Video video={videoDetails} />
      <main className="main">
        <div className="section-wrapper">
          <VideoSection video={videoDetails} formatDate={formatDate} />
          <CommentsSection video={videoDetails} formatDate={formatDate} />
        </div>
        <SuggestionsSection
          video={videoDetails}
          suggestedVideoClickHandler={suggestedVideoClickHandler}
        />
      </main>
    </>
  );
};

export default HomePage;
