import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/images/Innovat8.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Innovat8 Logo" className="logo" />
      
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
      <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
        <li className="nav-item">About Us</li>
        
        <li className="nav-item dropdown-container">
          Services <span className="arrow">▼</span>
          <ul className="dropdown">
            <li className="dropdown-item">Service A</li>
            <li className="dropdown-item">Service B</li>
          </ul>
        </li>

        <li className="nav-item dropdown-container">
          Products <span className="arrow">▼</span>
          <ul className="dropdown">
            <li className="dropdown-item">Product A</li>
            <li className="dropdown-item">Product B</li>
          </ul>
        </li>

        <li className="nav-item dropdown-container">
          Industries <span className="arrow">▼</span>
          <ul className="dropdown">
            <li className="dropdown-item">A</li>
            <li className="dropdown-item">B</li>
          </ul>
        </li>

        <li className="nav-item dropdown-container">
          Our Team <span className="arrow">▼</span>
          <ul className="dropdown">
            <li className="dropdown-item">Team A</li>
            <li className="dropdown-item">Team B</li>
          </ul>
        </li>

        <li className="nav-item dropdown-container">
          Projects <span className="arrow">▼</span>
          <ul className="dropdown">
            <li className="dropdown-item">Project A</li>
            <li className="dropdown-item">Project B</li>
          </ul>
        </li>

        <li className="nav-item">Partners</li>
        <li className="nav-item">Resources</li>
        <li className="nav-item1">Let's Innovate</li>
      </ul>
    </nav>
  );
}

export default Navbar;
