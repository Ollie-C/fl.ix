import { useState } from "react";
import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import "./navbar.scss";

const Navbar = () => {
  //Toggle class handler
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo-wrapper">
          <a href="">
            <img src={logo} alt="brainflix-logo" className="global__logo" />
          </a>
        </div>

        <div className="nav__container">
          <div className="nav__search-wrapper">
            <img className="nav__icon" src={searchIcon} alt="search-icon" />
            <input
              className={`nav__search global__input ${
                isActive ? "global__input--active" : null
              }`}
              onClick={toggleClass}
              placeholder="Search"
            ></input>
          </div>
          <div className="nav__avatar global__avatar global__avatar--photo"></div>
          <div className="nav__button-wrapper">
            <img
              className="nav__icon nav__icon--upload"
              src={uploadIcon}
              alt="upload-icon"
            />
            <button className="global__button">UPLOAD</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
