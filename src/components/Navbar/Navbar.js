import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a className="nav__logo-container">
          <img
            src={logo}
            alt="egeqgwegewg"
            className="nav__logo global__logo"
          />
        </a>
        <input
          className="nav__search global__input"
          placeholder="Search"
        ></input>
        <div className="nav__avatar global__avatar global__avatar--photo"></div>
        <button className="nav__button global__button">UPLOAD</button>
      </nav>
    </header>
  );
};

export default Navbar;
