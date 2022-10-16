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

    if (!videoId) {
      setCurrentVideo(data[0]);
    } else {
      updateVideo(videoId);
    }
  };

  //UPDATE VIDEO PAGE
  const updateVideo = async (videoId) => {
    const { data } = await axios.get(`${BASE_URL}${videoId}`);
    setCurrentVideo(data);
  };

  //NEW COMMENT
  const formSubmitHandler = async (e, comment) => {
    e.preventDefault();
    const { data } = await axios.post(`${BASE_URL}${videoId}/comments`, {
      comment: comment,
    });
    getVideos();
  };

  //LIKES
  const likeHandler = async (e) => {
    e.preventDefault();
    await axios.put(`${BASE_URL}${videoId}/likes`);
    getVideos();
  };

  useEffect(() => {
    getVideos();
  }, [videoId]);

  if (!currentVideo) {
    return <h2 className="loading">Loading. . .</h2>;
  }

  const formatDate = (timestamp) => {
    const videoDate = new Date(timestamp);
    return videoDate.toLocaleDateString();
  };
  return (
    <>
      <Video currentVideo={currentVideo} />
      <main className="main">
        <div className="section-wrapper">
          <VideoSection
            currentVideo={currentVideo}
            formatDate={formatDate}
            likeHandler={likeHandler}
          />
          <CommentsSection
            currentVideo={currentVideo}
            formatDate={formatDate}
            formSubmitHandler={formSubmitHandler}
          />
        </div>
        <SuggestionsSection videos={videos} videoId={videoId} />
      </main>
    </>
  );
};

export default HomePage;
