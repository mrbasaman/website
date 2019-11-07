import React from "react";

import FacebookIcon from "../../icons/Facebook";
import InstagramIcon from "../../icons/Instagram";
import "./index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footerlist">
        <li className="boxicon">
          <a href="https://www.instagram.com/geniecleaning/">
            <InstagramIcon className="footer-icon" />
          </a>
        </li>
        <li className="boxicon">
          <a href="https://www.facebook.com/geniecleaningau">
            <FacebookIcon className="footer-icon" />
          </a>
        </li>
      </ul>
      <p className="footertext">
        <small>
          &copy; Copyright 2019, Genie Cleaning, All Rights Reserved
        </small>
      </p>
    </footer>
  );
}
