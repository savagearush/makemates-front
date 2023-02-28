import { Fragment } from "react";

const UploadMedia = () => {
  const handleMediaUpload = () => {
    document.getElementById("uploadFile").click();
  };

  const handlePostBtn = () => {
    console.log("Working");
  };

  const closeUploadMedia = () => {
    let overlay = document.getElementsByClassName("overlay")[0];
    let uploadMediaBox = document.getElementsByClassName("uploadBox__main")[0];
    document.body.style.overflow = "auto";
    overlay.style.visibility = "hidden";
    uploadMediaBox.style.top = "-10000px";
  };

  return (
    <Fragment>
      <div className="overlay" onClick={closeUploadMedia}>
        {/* Upload Main Box */}
      </div>
      <div className="uploadBox__main">
        <div className="head">Create New Post</div>
        <div className="postBox">
          <textarea
            id="post_textarea"
            placeholder="What's on your mind ...... "
            autoFocus={true}
          ></textarea>
          <button className="uploadMediaBox" onClick={handleMediaUpload}>
            <input type="file" name="uploadMedia" hidden id="uploadFile" /> +
            Add Photos
          </button>
          <button className="postBtn" onClick={handlePostBtn}>
            Post
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default UploadMedia;
