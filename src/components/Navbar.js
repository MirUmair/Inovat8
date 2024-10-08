import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/images/Innovat8.svg';
import mendix from '../assets/images/mendix-logo.png';
import aws from '../assets/images/aws-logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false); // State for Resources popup

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleIndustries = () => {
    setIndustriesOpen(!industriesOpen);
  };

  const togglePartners = () => {
    setPartnersOpen(!partnersOpen);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen); // Toggle resources popup
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
        </li>
        <li className="nav-item dropdown-container">
          Products <span className="arrow">▼</span>
        </li>

        <li className="nav-item" onClick={toggleIndustries}>
          Industries <span className="arrow">▼</span>
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
        <li className="nav-item" onClick={togglePartners}>Partners</li>
        <li className="nav-item" onClick={toggleResources}>Resources</li> {/* Open resources popup */}
        <li className="nav-item1">Let's Innovate</li>
      </ul>

      {/* Popup for Partners */}
      {partnersOpen && (
        <div className="popup-overlay" onClick={togglePartners}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="popup-heading">Thriving Partnerships</h2>
            <div className="partner-logos">
              <img src={mendix} alt="Mendix Logo" />
              <img src={aws} alt="AWS Logo" />
            </div>
          </div>
        </div>
      )}

      {industriesOpen && (
        <div className="industries-dropdown">
          <div className="industries-content">
            <div className="industries-column">
              <h3>Industry Specific Expert-Driven Solutions.</h3>
              <p>Domain-specific AI and analytics-driven technology solutions to help you achieve your industry-specific goals.</p>
            </div>
            <div className="industries-column">
              <h3>Financial Institution</h3>
              <ul>
                <li>Banking</li>
                <li>Financial Services</li>
                <li>Insurance</li>
                <li>Asset & Wealth Management Firms</li>
              </ul>
            </div>
            <div className="industries-column">
              <h3>Corporates</h3>
              <ul>
                <li>Technology & Telecom</li>
                <li>Life Sciences & Healthcare</li>
                <li>Manufacturing & Industrial Goods</li>
                <li>Energy</li>
                <li>Chemicals</li>
                <li>CPG & Retail</li>
                <li>Logistics & Transportation</li>
                <li>Public Sector</li>
              </ul>
            </div>
            <div className="industries-column">
              <h3>Professional Services Firms</h3>
              <ul>
                <li>Consultancy & Advisory Firms</li>
                <li>Legal Firms</li>
                <li>Real Estate Firms</li>
                <li>Education & EdTech Firms</li>
              </ul>
            </div>
          </div>
          <div className="industries-all">
            <button className="industries-button">All Industries →</button>
          </div>
        </div>
      )}

      {/* Resources Popup */}
      {resourcesOpen && (
        <div className="resources-overlay" onClick={toggleResources}>
          <div className="resources-content" onClick={(e) => e.stopPropagation()}>
            <div className="resources-container">
              <div className="resources-left">
                <h3>Enhance Your Knowledge of AI-Driven Low-Code and No-Code Technology.</h3>
                <p>Discover valuable insights and experiences to strengthen your business.</p>
              </div>
              <div className="resources-right">
                <h3>Resources</h3>
                <ul>
                  <li>Blogs</li>
                  <li>Industry Insights</li>
                  <li>Podcasts</li>
                  <li>Ask an Expert</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
