import React from "react";
import "../Styles/foot.css";
import { Link } from 'react-router-dom';
import logo from "../assets/Aliwala.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Subscribe Section */}
        <div className="subscribe-section">
          <h2 className="subscribe-title">
            Subscribe And Get 20% Off Your<br />
            First Purchase.
          </h2>
          <div className="email-input-container">
            <input
              type="text"
              placeholder="Enter your Email Address"
              className="email-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        {/* First Divider */}
        <div className="footer-divider"></div>

        {/* Main Content - Logo and Links */}
        <div className="main-content">
          {/* Logo Section */}
          <div className="logo-content">
            <div className="logo-container">
              <img src={logo} alt="Aliwala Logo" className="logo-img" />
              <p className="logo-subtext">vendor of knowledge</p>
            </div>
            <p className="brand-message">
              We believe that right stationary can transform your workspace and inspire productivity.
            </p>
          </div>

          {/* Links Section */}
          <div className="links-content">
            <div className="links-grid">
              <div className="links-column">
                <Link to="/about"><h4>About Us</h4></Link>
                <Link to="/contact"><h4>Contact Us</h4></Link>
                <Link to="/faqs"><h4>FAQs</h4></Link>
              </div>
              <div className="links-column">
                <Link to="/privacy"><h4>Privacy Policy</h4></Link>
                <Link to="/return"><h4>Return Policy</h4></Link>
                <Link to="/delivery"><h4>Delivery Policy</h4></Link>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="help-column">
            <h4>NEED HELP</h4>
            <p className="phone">+91 82903 92786</p>
            <p className="email">care@aliwala.in</p>
          </div>
        </div>

        {/* Second Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            Copyright (C) 2024 Aliwala. All rights reserved
          </p>
          <p className="credits">
            Designed & Developed by TechSculpt Innovations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;