import React from "react";
import './_navBarStyle.scss';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar  navbar-expand-lg navbar-nav ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navarContainer" id="navbarTogglerDemo01">
          <Link class="navbar-brand" to="/">
            loopstudios
          </Link>
          <ul class="navbar-nav mb-2 mb-lg-0 ">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/careers">
                Careers
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/events">
                Events
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
