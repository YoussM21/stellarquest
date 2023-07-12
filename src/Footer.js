import React from "react";
import "./Footer.css";
import logo from "./images/logo.svg";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import email from "./images/email.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <Link to="/">
          <img src={logo} className="" alt="logo" />
        </Link>
      </div>
      <div className="footer-nav">
        <div className="links">
          <Link to="/destinations"> Destinations </Link>
          <Link to="/potd"> POTD </Link>
          <Link to="/news"> News </Link>
          <Link to="/about"> About us </Link>
          <Link to="/login"> Login </Link>
        </div>
      </div>
      <div className="socials">
        <img src={facebook} alt="facebook" className="facebook" />
        <img src={instagram} alt="insta" className="insta" />
        <img src={twitter} alt="twitter" className="twitter" />
        <img src={email} alt="email" className="email" />
      </div>
    </div>
  );
};

export default Footer;
