import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={process.env.PUBLIC_URL + "/Fragle.png"} alt="Google Logo" />
        <div className="search">
          <p className="searchName">Isaiah Francois</p>
          <div className="searchIcons">
            <FaMicrophone />
            <FaSearch className="searchIcon" />
          </div>
        </div>

        <div className="navbarEnd">
          <FaTh className="navbarBoxes" />
          <button className="navbarButton">Sign In</button>
        </div>
      </div>
      <div className="underSearchBorder">
        <div className="underSearch">
          <span>
            <FaSearch /> All
          </span>
          <span>
            <FaRegNewspaper /> News
          </span>
          <span>
            <FaRegImage /> Images
          </span>
          <span>
            <FaPlayCircle /> Videos
          </span>
          <span>
            <FaTag /> Shopping
          </span>
          <span>
            <FaEllipsisV /> More
          </span>

          <p>Settings</p>
          <p>Tools</p>
        </div>
      </div>
    </>
  );
}
