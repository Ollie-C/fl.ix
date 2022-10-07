import uploadIcon from "../../../assets/Icons/upload.svg";
import "./uploadpage.scss";
import thumbnail from "../../../assets/Images/Upload-video-preview.jpg";
import { useState } from "react";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const isFormValid = () => {
    if (!title || !description) {
      alert("Please enter a title and description");
      return false;
    }
    return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Success");
  };
  return (
    <>
      <article className="upload">
        <h1 className="upload__header">Upload Video</h1>
        <form className="upload__form" onSubmit={submitHandler}>
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
              className="upload__title global__input"
              name="title"
              placeholder="Add a title to your video"
              value={title}
              onChange={titleChangeHandler}
            />
            <label className="upload__label" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__description global__input"
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
            <button className="upload__button global__button">PUBLISH</button>
          </div>
          <p className="upload__cancel">CANCEL</p>
        </div>
      </article>
    </>
  );
};

export default UploadPage;
