import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../static/logo.jpg";

const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollHeight = window.pageYOffset;
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-sub">
        <img
          className="image-top"
          src={logo}
          alt=""
          style={{ width: "50px" }}
        />
        <ul className="navy">
         
          <li className="nav-item">
            <a href="https://twitter.com/BETER_CALL_PAUL" className="nav-link">
              <FaTwitter />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/bettercallpaul22" className="nav-link">
              <FaGithub />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/obaro-paul-319463101/"
              className="nav-link"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <p>
          copyright &copy; Paul's Razoy company
          <span> {new Date().getFullYear()}</span>. all rights reserved
        </p>
      </div>
      <a
        className={`${
          scrollHeight > 300
            ? "scroll-link top-link show-link"
            : "scroll-link top-link"
        }`}
        href="#"
      >
        <FaArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
