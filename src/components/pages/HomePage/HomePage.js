//MODULES
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//UTILS & HELPERS
import { BASE_URL } from "../../../utils/API";
//STYLES
import "../../../styles/global.scss";
//COMPONENTS
import Video from "../../Video/Video";
import VideoSection from "../../VideoSection/VideoSection";
import CommentsSection from "../../CommentsSection/CommentsSection";
import SuggestionsSection from "../../SuggestionsSection/SuggestionsSection";

const HomePage = () => {
  const [videos, setVideos] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  const { videoId } = useParams();

  const getVideos = async () => {
    const { data } = await axios.get(`${BASE_URL}videos/`);
    setVideos(data);

    const current = data.find((video) => {
      return video.id === videoId;
    });
    setCurrentVideo(current || data[0]);

    // setVideoList(videosList);
    // // Use ID to GET individual video details
    // const video = await axios.get(
    //   `${BASE_URL}videos/${videoId || videosList[0].id}?api_key=${API_KEY}`
    // );
  };

  // //Update video upon clicking suggested video from list
  // const updateVideo = async (videoId) => {
  //   const updatedVideo = await axios.get(
  //     `${BASE_URL}videos/${videoId}/?api_key=${API_KEY}`
  // //   );

  //   setVideoDetails(updatedVideo.data);

  useEffect(() => {
    getVideos();
  }, [videoId]);

  if (!currentVideo) {
    return <h2 className="loading">Loading. . .</h2>;
  }
  // //Handlers
  // const suggestedVideoClickHandler = (videoId) => {
  //   console.log("not using");
  //   // updateVideo(videoId);
  // };

  const formatDate = (timestamp) => {
    const videoDate = new Date(timestamp);
    return videoDate.toLocaleDateString();
  };
  return (
    <>
      <Video currentVideo={currentVideo} />
      <main className="main">
        <div className="section-wrapper">
          <VideoSection currentVideo={currentVideo} formatDate={formatDate} />
          <CommentsSection
            currentVideo={currentVideo}
            formatDate={formatDate}
          />
        </div>
        <SuggestionsSection videos={videos} />
      </main>
    </>
  );
};

export default HomePage;
