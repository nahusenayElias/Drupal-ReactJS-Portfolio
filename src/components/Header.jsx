import React from "react";
import { Link } from "react-router-dom";
import "../assets/footer.css";

export const Header = () => {
  return (
    <div className="footer-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-style">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i>Personal Portfolio</i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
