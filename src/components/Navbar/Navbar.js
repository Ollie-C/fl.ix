import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo-wrapper">
          <NavLink to="/">
            <img src={logo} alt="brainflix-logo" className="global__logo" />
          </NavLink>
        </div>
        <div className="nav__container">
          <div className="nav__search-wrapper">
            <img className="nav__icon" src={searchIcon} alt="search-icon" />
            <input
              className="nav__search global__input"
              placeholder="Search"
            ></input>
          </div>
          <div className="nav__avatar global__avatar global__avatar--photo"></div>
          <NavLink to="/upload" className="nav__button-wrapper">
            <img
              className="nav__icon nav__icon--upload"
              src={uploadIcon}
              alt="upload-icon"
            />
            <button className="global__button">UPLOAD</button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
