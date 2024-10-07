import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../../styles/BottomPage.css';
import images from '../../assets/images';
const BottomPage = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1,    // Trigger when 10% of the component is visible
      });
    // State to manage which section is active
    const [activeSection, setActiveSection] = useState('discovery');
    // Function to set active section
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };
    return (
        <div className="project-page-container">
            <header className="page-header">
                <h1 >— Excited to Hear About Your Project!</h1>
                <h2>What Are You Working On?</h2>
                <p>
                    We're passionate about driving innovation in your<br />business.
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
                            <div className="detail-box1">
                                <p>Discovery Call</p>
                                <button className="talk-button">Let’s Talk</button>
                            </div>
                            <div className="detail-box">
                                <img src={images.phone} alt="Clock Icon" className="icon" />
                                <div>
                                    <p> CALL DURATION</p>
                                    <span>40-45 Minutes</span>
                                </div>
                            </div>
                            <div className="detail-box">
                                <img src={images.people} alt="Team Members" className="icon" />
                                <div>
                                    <p>Team</p>
                                    <span>Client Partner and<br /> Technology Partner</span>
                                </div>
                            </div>
                            <div className="detail-box">
                                <img src={images.people} alt="Team Members" className="icon" />
                                <div>
                                    <p>Deliverables</p>
                                    <span>Comprehensive<br /> requirement assets:<br /> Problem and Solution<br /> Statement, User Analysis,<br /> Use Case Diagram, and<br /> Business Data Model.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {activeSection === 'scoping' && (
                <section className="discovery-call">
                <div className="discovery-content">
                    <div className="call-details">
                        <div className="detail-box1">
                            <p>Scoping</p>
                            <button className="talk-button">Let’s Talk</button>
                        </div>
                        <div className="detail-box">
                            <img src={images.phone} alt="Clock Icon" className="icon" />
                            <div>
                                <p> CALL DURATION</p>
                                <span>4-5 days</span>
                            </div>
                        </div>
                        <div className="detail-box">
                            <img src={images.people} alt="Team Members" className="icon" />
                            <div>
                                <p>Team</p>
                                <span>Pre-Sale Technology<br /> Team and Client<br />  Partner</span>
                            </div>
                        </div>
                        <div className="detail-box">
                            <img src={images.people} alt="Team Members" className="icon" />
                            <div>
                                <p>Deliverables</p>
                                <span>Comprehensive<br />  requirement assets based<br />  on client needs: problem<br />  and solution statements,<br />  user analysis, use case<br />  diagrams, and business data models.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )}
            {activeSection === 'poc-design' && (
               <section className="discovery-call">
               <div className="discovery-content">
                   <div className="call-details">
                       <div className="detail-box1">
                           <p>POC<br/>
                           Design & <br/>Development</p>
                           <button className="talk-button">Let’s Talk</button>
                       </div>
                       <div className="detail-box">
                           <img src={images.phone} alt="Clock Icon" className="icon" />
                           <div>
                               <p> DURATION</p>
                               <span>2-4 Weeks</span>
                           </div>
                       </div>
                       <div className="detail-box">
                           <img src={images.people} alt="Team Members" className="icon" />
                           <div>
                               <p>Team</p>
                               <span>POC Design &<br /> Development Team</span>
                           </div>
                       </div>
                       <div className="detail-box">
                           <img src={images.people} alt="Team Members" className="icon" />
                           <div>
                               <p>Deliverables</p>
                               <span>Based on the finalised<br /> scope and use cases,<br />select a maximum of two<br /> core use cases for<br /> development, which can<br /> later be implemented by <br/>the client in their real<br/>business settings..</span>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
            )}
            {activeSection === 'poc-launch' && (
              <section className="discovery-call">
              <div className="discovery-content">
                  <div className="call-details">
                      <div className="detail-box1">
                          <p>POC Launch <br/>for Client <br/>Testing & Use</p>
                          <button className="talk-button">Let’s Talk</button>
                      </div>
                      <div className="detail-box">
                          <img src={images.phone} alt="Clock Icon" className="icon" />
                          <div>
                              <p>DURATION</p>
                              <span>1-2 Weeks</span>
                          </div>
                      </div>
                      <div className="detail-box">
                          <img src={images.people} alt="Team Members" className="icon" />
                          <div>
                              <p>Team</p>
                              <span>Client User Group</span>
                          </div>
                      </div>
                      <div className="detail-box">
                          <img src={images.people} alt="Team Members" className="icon" />
                          <div>
                              <p>Deliverables</p>
                              <span>POC implementation for<br /> the relevant client user<br /> group—to determine<br /> whether it addresses their<br /> pain points and improves<br />efficiency in their business<br/>operations.</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
            )}
            {activeSection === 'full-development' && (
                <section className="discovery-call">
                <div className="discovery-content">
                    <div className="call-details">
                        <div className="detail-box1">
                            <p>Full Scale<br/> Development </p>
                            <button className="talk-button">Let’s Talk</button>
                        </div>
                        <div className="detail-box">
                            <img src={images.phone} alt="Clock Icon" className="icon" />
                            <div>
                                <p> DURATION</p>
                                <span>3-6  Months</span>
                            </div>
                        </div>
                        <div className="detail-box">
                            <img src={images.people} alt="Team Members" className="icon" />
                            <div>
                                <p>Team</p>
                                <span>Solution Architect,<br/> Developer, UX <br/>Designer, Quality <br/> Assurance, Business  <br/>Analyst, Project  <br/>Manager, and Client  <br/> POCs</span>
                            </div>
                        </div>
                        <div className="detail-box">
                            <img src={images.people} alt="Team Members" className="icon" />
                            <div>
                                <p>Deliverables</p>
                                <span>Develop the product<br /> based on the finalized<br /> scope and have it ready<br /> for testing.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )}
            {activeSection === 'launch' && (
             <section className="discovery-call">
             <div className="discovery-content">
                 <div className="call-details">
                     <div className="detail-box1">
                         <p>Launch</p>
                         <button className="talk-button">Let’s Talk</button>
                     </div>
                     <div className="detail-box">
                         <img src={images.phone} alt="Clock Icon" className="icon" />
                         <div>
                             <p>DURATION</p>
                             <span>1-2 Weeks</span>
                         </div>
                     </div>
                     <div className="detail-box">
                         <img src={images.people} alt="Team Members" className="icon" />
                         <div>
                             <p>Team</p>
                             <span>QA, Project<br /> Manager, Business <br/>Analyst, Developers,<br/>DevOps and Client<br/>POCs</span>
                         </div>
                     </div>
                     <div className="detail-box">
                         <img src={images.people} alt="Team Members" className="icon" />
                         <div>
                             <p>Deliverables</p>
                             <span>Quality Assurance,<br /> Testing, Elimination of<br /> Bugs & Launch</span>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
            )}
        </div>
    );
}
export default BottomPage;