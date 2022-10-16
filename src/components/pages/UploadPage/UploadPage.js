//IMAGES
import uploadIcon from "../../../assets/Icons/upload.svg";
import thumbnail from "../../../assets/Images/Upload-video-preview.jpg";
//STYLE
import "./uploadpage.scss";
//MODULES
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//HELPER
import { isInputValid, isFormValid } from "../../../utils/Helper";
//UTILS & HELPERS
import { BASE_URL } from "../../../utils/API";

const UploadPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const formSubmitHandler = async (e, title, description) => {
    e.preventDefault();
    const { data } = await axios.post(`${BASE_URL}videos`, {
      title: title,
      description: description,
    });
  };

  const submitHandler = (e) => {
    if (!isFormValid(title, description)) {
      setError("Please fill in all fields.");
    }
    setError(false);
    formSubmitHandler(e, title, description);
    alert("Upload was successful.");
    navigate("/");
  };

  return (
    <>
      <article className="upload">
        <h1 className="upload__header">Upload Video</h1>
        <form className="upload__form" id="uploadform" onSubmit={submitHandler}>
          <div className="upload__container upload__container--top">
            <label className="upload__label" htmlFor="thumbnail">
              VIDEO THUMBNAIL
            </label>
            <img
              src={thumbnail}
              alt="img"
              className="upload__thumbnail"
              name="thumbnail"
            />
          </div>
          <div className="upload__container upload__container--middle">
            <label className="upload__label" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              type="text"
              className={`upload__title global__input ${
                isInputValid(title, 15) ? "" : "global__input--error"
              }`}
              name="title"
              placeholder="Add a title to your video"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="upload__label" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className={`upload__description global__input ${
                isInputValid(description, 30) ? "" : "global__input--error"
              }`}
              name="description"
              placeholder="Add a description to your video"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </form>
        <div className="upload__container upload__container--bottom">
          <div className="upload__button-wrapper">
            <img className="upload__icon" src={uploadIcon} alt="upload-icon" />
            <button
              className="upload__button global__button"
              type="submit"
              form="uploadform"
              // disabled={!isFormValid(title, description)}
            >
              PUBLISH
            </button>
          </div>
          <p onClick={() => navigate(-1)} className="upload__cancel">
            CANCEL
          </p>
        </div>
        {error && <p>{error}</p>}
      </article>
    </>
  );
};

export default UploadPage;
