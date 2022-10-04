import uploadIcon from "../../../assets/Icons/upload.svg";

const UploadPage = () => {
  return (
    <>
      <h1>Upload Video</h1>
      <form className="comments__form">
        <label htmlFor="">VIDEO THUMBNAIL</label>
        <img src="" alt="img" srcset="" />
        <label htmlFor="">TITLE YOUR VIDEO</label>
        <input type="text" className="global__input" />
        <label className="" htmlFor="">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          className="global__input"
          name="addcomment"
          id="addcomment"
          placeholder="Add a new comment"
        ></textarea>

        <div className="comments__button-wrapper">
          <img className="comments__icon" src={uploadIcon} alt="comment-icon" />
          <button className="comments__button global__button">PUBLISH</button>
        </div>
      </form>
    </>
  );
};

export default UploadPage;
