import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaTh } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <img
        src={process.env.PUBLIC_URL + "/google-logo.png"}
        alt="Google Logo"
      />
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
  );
}
