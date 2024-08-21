import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; // Import LeetCode icon if available in your icon library
import '../App.css'; // Ensure CSS file is imported

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://github.com/anirudh-why" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/anirudh-yellamraju/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://leetcode.com/u/anirudh_why/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Anirudh Yellamraju. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
