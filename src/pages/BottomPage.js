import React, { useState } from 'react';
    //
import '../styles/BottomPage.css';
import images from '../assets/images';
const BottomPage = () => {
    // State to manage which section is active
    const [activeSection, setActiveSection] = useState(null);
    // Function to set active section
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };
    return (
        <div className="project-page-container">
            <header className="page-header">
                <h1>Excited to Hear About Your Project!</h1>
                <h2>What Are You Working On?</h2>
                <p>
                    We're passionate about driving innovation in your business.
                    Let's talk and turn your ideas into reality.
                </p>
            </header>
            <section className="journey-section">
                <h3>Your Journey with Inovat8</h3>
                <div className="journey-buttons">
                    <button
                        className={`journey-btn ${activeSection === 'discovery' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('discovery')}
                    >
                        Discovery Call
                    </button>
                    <button
                        className={`journey-btn ${activeSection === 'scoping' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('scoping')}
                    >
                        Scoping
                    </button>
                    <button
                        className={`journey-btn ${activeSection === 'poc-design' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('poc-design')}
                    >
                        POC Design & Development
                    </button>
                    <button
                        className={`journey-btn ${activeSection === 'poc-launch' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('poc-launch')}
                    >
                        POC Launch for Client Testing & Use
                    </button>
                    <button
                        className={`journey-btn ${activeSection === 'full-development' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('full-development')}
                    >
                        Full Scale Development
                    </button>
                    <button
                        className={`journey-btn ${activeSection === 'launch' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('launch')}
                    >
                        Launch
                    </button>
                </div>
            </section>
            {/* Conditionally render sections based on activeSection */}
            {activeSection === 'discovery' && (
                <section className="discovery-call">
                    <div className="discovery-content">
                        <div className="call-details">
                            <div className="detail-box">
                                <p>Discovery Call</p>
                                <button className="talk-button">Let’s Talk</button>
                            </div>
                            <div className="detail-box">
                                <p><img src={images.phone} alt="Clock Icon" className="icon" /> CALL DURATION</p>
                                <span>40-45 Minutes</span>
                            </div>
                            <div className="detail-box">
                                <p><img src={images.people} alt="Team Members" className="icon" /> Team</p>
                                <span>Client Partner and<br /> Technology Partner</span>
                            </div>
                            <div className="detail-box">
                                <p><img src={images.people} alt="Team Members" className="icon" /> Team</p>
                                <span>Comprehensive<br /> requirement assets:<br /> Problem and Solution<br /> Statement, User Analysis,<br /> Use Case Diagram, and<br /> Business Data Model.</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {activeSection === 'scoping' && (
                <section className="scoping-section">
                    <div className="scoping-content">
                        <h3>Scoping Phase</h3>
                        <p>Details about the scoping process...</p>
                    </div>
                </section>
            )}
            {activeSection === 'poc-design' && (
                <section className="poc-design-section">
                    <div className="poc-design-content">
                        <h3>POC Design & Development</h3>
                        <p>Details about the POC design and development process...</p>
                    </div>
                </section>
            )}
            {activeSection === 'poc-launch' && (
                <section className="poc-launch-section">
                    <div className="poc-launch-content">
                        <h3>POC Launch for Client Testing & Use</h3>
                        <p>Details about the POC launch for client testing and use...</p>
                    </div>
                </section>
            )}
            {activeSection === 'full-development' && (
                <section className="full-development-section">
                    <div className="full-development-content">
                        <h3>Full Scale Development</h3>
                        <p>Details about full-scale development...</p>
                    </div>
                </section>
            )}
            {activeSection === 'launch' && (
                <section className="launch-section">
                    <div className="launch-content">
                        <h3>Launch</h3>
                        <p>Details about the launch phase...</p>
                    </div>
                </section>
            )}
        </div>
    );
}
export default BottomPage;