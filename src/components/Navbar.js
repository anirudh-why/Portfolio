import React from "react";
import { Link } from "react-scroll";
//import { ReactComponent as HomeIcon } from './home-icon.svg'; // Assuming you have an SVG file named 'home-icon.svg'
import { ReactComponent as HomeIcon } from '../assets/iconmain.svg'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="portfolio-link">
          <HomeIcon className="home-icon" /> 
          <span className="portfolio-text">Portfolio</span>
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500}>Education</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <Link to="contact" smooth={true} duration={500} className="contact-link">Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
