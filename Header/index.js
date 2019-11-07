import React from "react";
import { Link } from "react-router-dom";

import { HOME, ABOUT, CONTACT } from "../../constants/Routes";

import "./index.css";

export default function Header() {
  return (
    <header className="header">
      <div class="header__title">
        <Link to={HOME}>
          <div class="header__title" to={HOME}>
            <img src="/logo.png" class="logo"></img>
            <div className="logoText">
              <h1>Genie Cleaning</h1>
              <p>Your Magic Steam Cleaner</p>
            </div>
          </div>
        </Link>
      </div>
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <Link to={HOME}>Home</Link>
          </li>
          <li className="menu-item">
            <Link to={ABOUT}>About</Link>
          </li>
          <li className="menu-item">
            <a>Our jobs</a>
          </li>
          <li className="menu-item">
            <Link to={CONTACT}>Contact</Link>
          </li>
          <li className="menu-item">
            <p>Call for a free quotation</p>
            <a href="tel:+61423728837" className="phone">
              0423 728 837
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
