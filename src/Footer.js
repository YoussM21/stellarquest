import React from 'react';
import './Footer.css';
import logo from './images/logo.svg';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import email from './images/email.svg';

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer-logo">
                <a href='/'>
                <img src={logo} className="" alt="logo" /></a>
            </div>
            <div className="footer-nav">
                <div className="links">
                    <a href="/destinations"> Destinations </a>
                    <a href="/potd"> POTD </a>
                    <a href="/news"> News </a>
                    <a href="/about"> About us </a>
                    <a> Login </a>     
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
}
 
export default Footer;