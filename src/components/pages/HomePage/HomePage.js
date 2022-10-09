//MODULES
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//UTILS & HELPERS
import { API_KEY, BASE_URL } from "../../../utils/API";
//DATA
// import videoDetails from "../../../assets/Data/video-details.json";
//STYLES
import "../../../styles/global.scss";
//COMPONENTS
import Video from "../../Video/Video";
import VideoSection from "../../VideoSection/VideoSection";
import CommentsSection from "../../CommentsSection/CommentsSection";
import SuggestionsSection from "../../SuggestionsSection/SuggestionsSection";

const HomePage = () => {
  // Video list - state
  const [videoList, setVideoList] = useState(null);
  // Current video details state
  const [videoDetails, setVideoDetails] = useState(null);

  // Rerender based on id

  const { videoId } = useParams();

  // GET list of videos
  const getVideos = async () => {
    // GET ID from list
    const videos = await axios.get(`${BASE_URL}videos/?api_key=${API_KEY}`);
    const videosList = videos.data;
    setVideoList(videosList);
    // Use ID to GET individual video details
    const video = await axios.get(
      `${BASE_URL}videos/${videoId || videosList[0].id}?api_key=${API_KEY}`
    );
    setVideoDetails(video.data);
  };

  //Update video upon clicking suggested video from list
  const updateVideo = async (videoId) => {
    const updatedVideo = await axios.get(
      `${BASE_URL}videos/${videoId}/?api_key=${API_KEY}`
    );

    setVideoDetails(updatedVideo.data);
  };

  useEffect(() => {
    getVideos();
  }, [videoId]);

  if (!videoDetails) {
    return <h2 className="loading">Loading. . .</h2>;
  }
  //Handlers
  const suggestedVideoClickHandler = (videoId) => {
    updateVideo(videoId);
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
