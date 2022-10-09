import uploadIcon from "../../../assets/Icons/upload.svg";
import "./uploadpage.scss";
import thumbnail from "../../../assets/Images/Upload-video-preview.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const isTitleValid = () => {
    if (title.length < 2 || title.length > 15) {
      return false;
    }
    return true;
  };

  const isDescriptionValid = () => {
    if (description.length < 5 || description.length > 30) {
      return false;
    }
    return true;
  };

  const formValidation = () => {
    if (!title || !description) {
      return false;
    }
    if (!isTitleValid()) {
      return false;
    }
    if (!isDescriptionValid()) {
      return false;
    }
    return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formValidation()) {
      alert("Upload was successful.");
      document.location = "/";
    } else {
      alert("Please fill in the form again.");
    }
  };

  return (
    <>
      <article className="upload">
        <h1 className="upload__header">Upload Video</h1>
        <form className="upload__form">
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
                isTitleValid() ? "" : "global__input--error"
              }`}
              name="title"
              placeholder="Add a title to your video"
              value={title}
              onChange={titleChangeHandler}
            />
            <label className="upload__label" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className={`upload__description global__input ${
                isDescriptionValid() ? "" : "global__input--error"
              }`}
              name="description"
              placeholder="Add a description to your video"
              value={description}
              onChange={descriptionChangeHandler}
            ></textarea>
          </div>
        </form>
        <div className="upload__container upload__container--bottom">
          <div className="upload__button-wrapper">
            <img className="upload__icon" src={uploadIcon} alt="upload-icon" />
            <button
              className="upload__button global__button"
              onClick={submitHandler}
            >
              PUBLISH
            </button>
          </div>
          <p onClick={() => navigate(-1)} className="upload__cancel">
            CANCEL
          </p>
        </div>
      </article>
    </>
  );
};

export default UploadPage;
