import React, { Fragment } from "react";
import profilePic from "./profilepic.png";
import "./profile.scss";
import shiv from "./shiv.jpg";
import SendIcon from "@mui/icons-material/Send";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import UploadMedia from "./UploadMedia";

const Profile = () => {
  const handleUploadPhotos = () => {
    let overlay = document.getElementsByClassName("overlay")[0];
    let uploadMediaBox = document.getElementsByClassName("uploadBox__main")[0];
    document.body.style.overflow = "hidden";
    overlay.style.visibility = "visible";
    uploadMediaBox.style.top = "-2150px";
  };

  return (
    <Fragment>
      <div className="profile__mainBox">
        <section className="left_sideBar">
          <div className="profileBox" style={{ textAlign: "center" }}>
            <img
              src={profilePic}
              alt="User Profile"
              width="200"
              height="200"
              style={{
                borderRadius: "100px",
                border: "3px solid rgba(0, 29, 110, 1) ",
                padding: "2px",
                marginBottom: "20px",
              }}
            />
            <br />
            <div className="userfullName" style={{ fontSize: "20px" }}>
              Arush Sharma
            </div>
          </div>

          <div className="introBox">
            <label htmlFor="Intro" style={{ font: "bolder 18px verdana" }}>
              Intro
            </label>
            <div style={{ marginTop: "20px", font: "normal 14px verdana" }}>
              A Sophomore Guy, Doing What it takes to achieve what He
              wants....😜
            </div>
            <button
              style={{
                backgroundColor: "whitesmoke",
                width: "300px",
                borderRadius: "20px",
                padding: "5px",
                borderStyle: "inset",
                border: "1px solid grey",
                marginLeft: "15px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Edit Intro
            </button>
          </div>

          <div className="hobbies">
            <label htmlFor="Intro" style={{ font: "bolder 18px verdana" }}>
              Hobbies
            </label>
            <div style={{ marginTop: "20px", font: "normal 14px verdana" }}>
              <button className="hobbiesBtn">✈️ Traveling</button>
              <button className="hobbiesBtn">🎯 Games</button>
              <button className="hobbiesBtn">👨‍💻 Coding</button>
              <button className="hobbiesBtn">💤 Sleeping</button>
              <button className="hobbiesBtn">🎶 Musics</button>
            </div>
            <button
              style={{
                backgroundColor: "whitesmoke",
                width: "300px",
                borderRadius: "20px",
                padding: "5px",
                borderStyle: "inset",
                border: "1px solid grey",
                marginLeft: "15px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Edit Hobbies
            </button>
          </div>

          <div className="selected__photos">
            <label htmlFor="Intro" style={{ font: "bolder 18px verdana" }}>
              Photos
            </label>
            <div id="profile__left__images">
              <img
                src="https://via.placeholder.com/300.png/09f/fff "
                alt="profileSideImage"
                width="100"
                height="100"
              />
              <img
                src="https://via.placeholder.com/300.png/09f/fff "
                alt="profileSideImage"
                width="100"
                height="100"
              />
              <img
                src="https://via.placeholder.com/300.png/09f/fff "
                alt="profileSideImage"
                width="100"
                height="100"
              />
              <img
                src="https://via.placeholder.com/300.png/09f/fff "
                alt="profileSideImage"
                width="100"
                height="100"
              />
              <img
                src="https://via.placeholder.com/300.png/09f/fff "
                alt="profileSideImage"
                width="100"
                height="100"
              />
              <img
                src="https://via.placeholder.com/300.png/09f/fff "
                alt="profileSideImage"
                width="100"
                height="100"
              />
            </div>
          </div>
        </section>
        <section className="right_sideBar">
          <div className="uploadBox">
            <span className="level1">
              <img
                src={profilePic}
                width="40"
                height="40"
                alt="userProfile"
                style={{
                  borderRadius: "30px",
                  verticalAlign: "middle",
                  marginRight: "20px",
                }}
              />
              <button className="mainUploadButton">
                What's on your mind ! Arush
              </button>
            </span>
            <div className="level2">
              <ul className="uploadBtn">
                <li>
                  <button id="uploadPhotos" onClick={handleUploadPhotos}>
                    Upload Photos
                  </button>
                </li>
                <li>
                  <button>Upload Videos</button>
                </li>
                <li>
                  <button>Simple Post</button>
                </li>
                <li>
                  <button>News Feed</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="post">
            <div className="post-head">
              <span className="avatar">
                <img
                  src={profilePic}
                  width="40"
                  height="40"
                  alt="userProfile"
                  style={{
                    borderRadius: "40px",
                    verticalAlign: "middle",
                    marginRight: "20px",
                  }}
                />
              </span>
              <span className="userInfo">
                <div style={{ fontSize: "14px" }}>Arush Sharma</div>
                <div style={{ fontSize: "12px" }}>12 Feb. 2023</div>
              </span>
            </div>
            <div className="media">
              <img src={shiv} alt="media" width="600" height="400" />
            </div>
            <div className="post-bottom">
              <span className="likeBtn">
                <FavoriteIcon /> 30 Like
              </span>
              <span className="commentBtn">
                <MapsUgcRoundedIcon /> 23 Comments
              </span>
              <span className="shareBtn">
                <SendIcon /> 13 Shares
              </span>
            </div>
          </div>

          <div className="post">
            <div className="post-head">
              <span className="avatar">
                <img
                  src={profilePic}
                  width="40"
                  height="40"
                  alt="userProfile"
                  style={{
                    borderRadius: "40px",
                    verticalAlign: "middle",
                    marginRight: "20px",
                  }}
                />
              </span>
              <span className="userInfo">
                <div style={{ fontSize: "14px" }}>Arush Sharma</div>
                <div style={{ fontSize: "12px" }}>12 Feb. 2023</div>
              </span>
            </div>
            <div className="media">
              <img src={shiv} alt="media" width="600" height="400" />
            </div>
            <div className="post-bottom">
              <span className="likeBtn">
                <FavoriteIcon /> 30 Like
              </span>
              <span className="commentBtn">
                <MapsUgcRoundedIcon /> 23 Comments
              </span>
              <span className="shareBtn">
                <SendIcon /> 13 Shares
              </span>
            </div>
          </div>
          <div className="post">
            <div className="post-head">
              <span className="avatar">
                <img
                  src={profilePic}
                  width="40"
                  height="40"
                  alt="userProfile"
                  style={{
                    borderRadius: "40px",
                    verticalAlign: "middle",
                    marginRight: "20px",
                  }}
                />
              </span>
              <span className="userInfo">
                <div style={{ fontSize: "14px" }}>Arush Sharma</div>
                <div style={{ fontSize: "12px" }}>12 Feb. 2023</div>
              </span>
            </div>
            <div className="media">
              <img src={shiv} alt="media" width="600" height="400" />
            </div>
            <div className="post-bottom">
              <span className="likeBtn">
                <FavoriteIcon /> 30 Like
              </span>
              <span className="commentBtn">
                <MapsUgcRoundedIcon /> 23 Comments
              </span>
              <span className="shareBtn">
                <SendIcon /> 13 Shares
              </span>
            </div>
          </div>

          <div className="post">
            <div className="post-head">
              <span className="avatar">
                <img
                  src={profilePic}
                  width="40"
                  height="40"
                  alt="userProfile"
                  style={{
                    borderRadius: "40px",
                    verticalAlign: "middle",
                    marginRight: "20px",
                  }}
                />
              </span>
              <span className="userInfo">
                <div style={{ fontSize: "14px" }}>Arush Sharma</div>
                <div style={{ fontSize: "12px" }}>12 Feb. 2023</div>
              </span>
            </div>
            <div className="media">
              <img src={shiv} alt="media" width="600" height="400" />
            </div>
            <div className="post-bottom">
              <span className="likeBtn">
                <FavoriteIcon /> 30 Like
              </span>
              <span className="commentBtn">
                <MapsUgcRoundedIcon /> 23 Comments
              </span>
              <span className="shareBtn">
                <SendIcon /> 13 Shares
              </span>
            </div>
          </div>
        </section>
      </div>
      <UploadMedia />
    </Fragment>
  );
};

export default Profile;
