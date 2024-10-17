import React, { useState } from "react";
import "../styles/Navbar.css";
import images from "../assets/images";
import logo from "../assets/images/Innovat8.svg";
import mendix from "../assets/images/mendix-logo.png";
import aws from "../assets/images/aws-logo.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false); // State for Resources popup
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleNavBar = (name) => {
    if (name == "Services") {
      setServicesOpen(!servicesOpen);
      setIndustriesOpen(false);
      setResourcesOpen(false);
      setPartnersOpen(false);
      setProductsOpen(false);
    } else if (name == "Products") {
      setProductsOpen(!productsOpen);
      setIndustriesOpen(false);
      setResourcesOpen(false);
      setPartnersOpen(false);
      setServicesOpen(false);
    } else if (name == "Industries") {
      setIndustriesOpen(!industriesOpen);
      setProductsOpen(false);
      setResourcesOpen(false);
      setPartnersOpen(false);
      setServicesOpen(false);
    } else if (name == "Partners") {
      setPartnersOpen(!partnersOpen);
      setProductsOpen(false);
      setIndustriesOpen(false);
      setResourcesOpen(false);
      setServicesOpen(false);
    } else if (name == "Resources") {
      setResourcesOpen(!resourcesOpen);
      setProductsOpen(false);
      setIndustriesOpen(false);
      setPartnersOpen(false);
      setServicesOpen(false);
    }
  };
  const togglePartners = () => {
    setPartnersOpen(!partnersOpen);
  };
  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen); // Toggle resources popup
  };
  return (
    <nav className="navbar">
      <img className="background-icon" src={images.icon33} />
      <img src={logo} alt="Innovat8 Logo" className="logo" />
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
        <li className="nav-item">About Us</li>
        <li
          className={`nav-item dropdown-container ${
            servicesOpen ? "active" : ""
          }`}
          onClick={() => toggleNavBar("Services")}
        >
          Services{" "}
          <span className={`arrow ${servicesOpen ? "active" : ""}`}>^</span>
        </li>
        <li
          className={`nav-item dropdown-container ${
            productsOpen ? "active" : ""
          }`}
          onClick={() => toggleNavBar("Products")}
        >
          Products{" "}
          <span className={`arrow ${productsOpen ? "active" : ""}`}>^</span>
        </li>
        <li
          className={`nav-item dropdown-container ${
            industriesOpen ? "active" : ""
          }`}
          onClick={() => toggleNavBar("Industries")}
        >
          Industries{" "}
          <span className={`arrow ${industriesOpen ? "active" : ""}`}>^</span>
        </li>
        {/* <li className={`nav-item dropdown-container ${servicesOpen ? "active" : ""}`}>
          Our Team <span className="arrow">^</span>
          <ul className="dropdown">
            <li className="dropdown-item">Team A</li>
            <li className="dropdown-item">Team B</li>
          </ul>
        </li> */}
        {/* <li className={`nav-item dropdown-container ${servicesOpen ? "active" : ""}`}>
          Projects <span className="arrow">^</span>
          <ul className="dropdown">
            <li className="dropdown-item">Project A</li>
            <li className="dropdown-item">Project B</li>
          </ul>
        </li> */}
        <li
          className={`nav-item dropdown-container ${
            partnersOpen ? "active" : ""
          }`}
          onClick={() => toggleNavBar("Partners")}
        >
          Partners{" "}
          <span className={`arrow ${partnersOpen ? "active" : ""}`}>^</span>
        </li>
        <li
          className={`nav-item dropdown-container ${
            resourcesOpen ? "active" : ""
          }`}
          onClick={() => toggleNavBar("Resources")}
        >
          Resources{" "}
          <span className={`arrow ${resourcesOpen ? "active" : ""}`}>^</span>
        </li>{" "}
        {/* Open resources popup */}
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
      {servicesOpen && (
        <div className="Services-dropdown">
          <p>
            Enterprise Mobile App Development
            <br /> Enterprise Web App Development
            <br />
            Data Analytics
            <br /> Insights & Intelligence
            <br /> AI/ML Solutions
            <br /> DevSecOps
            <br />
            Analysis of Alternatives
            <br /> Technology Assessment Services
            <br /> Full Stack Development
            <br /> Staff Augmentation Services
          </p>
        </div>
      )}
      {productsOpen && (
        <div className="Product-dropdown">
          <p>
            Jumping Course
            <br /> Corrosion Inspection Management
            <br /> Laboratory information management system
          </p>
        </div>
      )}
      {industriesOpen && (
        <div className="industries-dropdown">
          <div className="industries-content">
            <div className="industries-column">
              <h2>Industry Specific Expert-Driven Solutions.</h2>
              <ul>
                <li>
                  Domain-specific AI and analytics-driven technology solutions
                  to help you achieve your industry-specific goals.
                </li>
              </ul>
            </div>
            <div className="industries-column">
              <h2>Financial Institution</h2>
              <ul>
                <li>Banking</li>
                <li>Financial Services</li>
                <li>Insurance</li>
                <li>Asset & Wealth Management Firms</li>
              </ul>
            </div>
            <div className="industries-column">
              <h2>Corporates</h2>
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
              <h2>Professional Services Firms</h2>
              <ul>
                <li>Consultancy & Advisory Firms</li>
                <li>Legal Firms</li>
                <li>Real Estate Firms</li>
                <li>Education & EdTech Firms</li>
              </ul>
            </div>
          </div>
          <div className="industries-all">
            <button className="industries-button">All Industries</button>
            <img className="Industries-icon" src={images.i22} />
          </div>
        </div>
      )}
      {resourcesOpen && (
        <div className="resources-overlay" onClick={toggleResources}>
          <div
            className="resources-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="resources-container">
              <div className="resources-left">
                <h3>
                  Enhance Your Knowledge of AI-Driven Low-Code and No-Code
                  Technology.
                </h3>
                <p>
                  Discover valuable insights and experiences to strengthen your
                  business.
                </p>
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
