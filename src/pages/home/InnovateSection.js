import React from "react";
import "../../styles/InnovateSection.css";
import images from "../../assets/images";
const InnovateSection = () => {
  return (
    <div className="innovate-section">
      <div className="inovate-container">
        <div className="innovate-content">
          <div className="innovate-left">
            <p className="h-inovate">
              <strong className="strong-c">Innovate</strong> with <br />
              Low Code/No Code and <br />
              AI-Powered Technologies
            </p>
          </div>
          <div className="innovate-right">
            <p>
              Effortlessly explore the realm of low-code/no-code
              <br /> solutions and AI-powered full-stack <br />
              development, customized for your business
              <br />
              needs. Discover the innovative tools we utilize <br />
              and the unique features they offer,
              <br /> streamlining your journey through this cutting-edge
              technology.
            </p>
          </div>
        </div>
        <div className="InnovateText">
          <p className="inovatescetion" style={{ margin: 0 }}>
            Let's get
          </p>
          <p className="inovatescetion1" style={{ margin: 0 }}>
            innovative
          </p>
          <img
            src={images.i22}
            alt="icon"
            style={{
              width: "60px",
              height: "60px",
            }}
          />
        </div>
      </div>
      <div className="innovate-logos-ticker">
        <div className="logos-wrapper">
          <img src={images.i34} alt="FlutterFlow" />
          <img src={images.i35} alt="Mendix" />
          <img src={images.i36} alt="bubble" />
          <img src={images.i37} alt="webflow" />
          <img src={images.i38} alt="softr" />
          {/* Duplicating the images for seamless looping */}
          <img src={images.i34} alt="FlutterFlow" />
          <img src={images.i35} alt="Mendix" />
          <img src={images.i36} alt="bubble" />
          <img src={images.i37} alt="webflow" />
          <img src={images.i38} alt="softr" />
          <img src={images.i34} alt="FlutterFlow" />
          <img src={images.i35} alt="Mendix" />
          <img src={images.i36} alt="bubble" />
          <img src={images.i37} alt="webflow" />
          <img src={images.i38} alt="softr" />
          <img src={images.i34} alt="FlutterFlow" />
          <img src={images.i35} alt="Mendix" />
          <img src={images.i36} alt="bubble" />
          <img src={images.i37} alt="webflow" />
          <img src={images.i38} alt="softr" />
        </div>
      </div>
    </div>
  );
};
export default InnovateSection;
