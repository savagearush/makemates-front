import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import profilePic from "./profilepic.png";
import shiv from "./shiv.jpg";
import "./Home.scss";

import UploadMedia from "./UploadMedia";
import MessageIcon from "@mui/icons-material/Message";
import LayersIcon from "@mui/icons-material/Layers";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import GroupIcon from "@mui/icons-material/Group";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";

const Home = () => {
  const handleUploadPhotos = () => {
    let overlay = document.getElementsByClassName("overlay")[0];
    let uploadMediaBox = document.getElementsByClassName("uploadBox__main")[0];
    document.body.style.overflow = "hidden";
    overlay.style.visibility = "visible";
    uploadMediaBox.style.top = "-1650px";
  };

  return (
    <Fragment>
      <div className="main-box">
        <div className="left">
          <div className="profileBox" style={{ textAlign: "center" }}>
            <img src={profilePic} alt="User Profile" width="200" height="200" />
            <br />
            <div className="userfullName">Arush Sharma</div>
          </div>
          <label htmlFor="Menu" className="menuText">
            Menu
          </label>
          <ul className="menuList">
            <Link to="/">
              <li>
                <RssFeedIcon /> Feed
              </li>
            </Link>
            <Link to="/">
              <li>
                <Diversity3Icon /> Friends
              </li>
            </Link>
            <Link to="/">
              <li>
                <GroupIcon /> Groups
              </li>
            </Link>
            <Link to="/">
              <li>
                <FavoriteIcon /> Likes
              </li>
            </Link>
            <Link to="/">
              <li>
                <SendIcon /> Shared
              </li>
            </Link>
            <Link to="/">
              <li>
                <LayersIcon /> Pages
              </li>
            </Link>
            <Link to="/">
              <li>
                <MessageIcon /> Messages
              </li>
            </Link>
          </ul>
        </div>
        <div className="middle">
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

          {/* Post 1 */}

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
          {/* Post 2 */}

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

          {/* Post 3 */}

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
        </div>
        <div className="right">
          <div className="friendText">
            <h4 align="center">Followers</h4>
          </div>
          <ul className="followersList">
            <li>
              <Link>Abhishek Yadav</Link>
            </li>
            <li>
              <Link to="">John Doe</Link>
            </li>
            <li>
              <Link to="">Rakesh Singh</Link>
            </li>
            <li>
              <Link to="">Harsh Shukla</Link>
            </li>
            <li>
              <Link to="">Vivek Shukla</Link>
            </li>
            <li>
              <Link to="">Vivek Prajapati</Link>
            </li>
            <li>
              <Link to="">Ayush Singh</Link>
            </li>
            <li>
              <Link to="">Satyendra Tiwari</Link>
            </li>
          </ul>
        </div>
      </div>
      <UploadMedia />
    </Fragment>
  );
};

export default Home;
