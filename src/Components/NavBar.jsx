import React, { Fragment } from "react";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";
import "./NavBar.scss";
// Navigation Bar
const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="logo-box">
          <div className="logo">
            <Link to="/">MakeMates</Link>
          </div>
        </div>
        <div className="searchBox">
          <input
            type="text"
            name="search"
            className="search"
            placeholder="Search Here"
          />
        </div>
        <div className="navMenu">
          <ul className="menuList">
            <li>
              <Link to="/">
                <HomeRoundedIcon />
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <Person2RoundedIcon />
              </Link>
            </li>
            <li>
              <Link to="/messenger">
                <EmailRoundedIcon />
              </Link>
            </li>
            <li>
              <Link to="/notification">
                <NotificationsActiveRoundedIcon />
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <WidgetsRoundedIcon />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
