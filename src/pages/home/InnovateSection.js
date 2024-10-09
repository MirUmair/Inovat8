import React from "react";
import "../../styles/InnovateSection.css";
const InnovateSection = () => {
  return (
    <div className="innovate-section">
      <div className="innovate-content">
        <div className="innovate-left">
          <h1>
            <strong>Innovate</strong> with <br />
            Low Code/No Code and <br />
            AI-Powered Technologies
          </h1>
        </div>
        <div className="innovate-right">
          <p>
            Effortlessly explore the realm of low-code/no-code solutions and
            AI-powered full-stack development, customized for your business
            needs. Discover the innovative tools we utilize and the unique
            features they offer, streamlining your journey through this
            cutting-edge technology.
          </p>
        </div>
      </div>
      <div className="innovate-action">
        <p>
          Let's get <strong>innovative</strong> <span>&#8594;</span>
        </p>
      </div>
      <div className="innovate-logos">
        <img src="/path/to/flutterflow-logo.png" alt="FlutterFlow" />
        <img src="/path/to/mendix-logo.png" alt="Mendix" />
        <img src="/path/to/bubble-logo.png" alt="Bubble" />
        <img src="/path/to/webflow-logo.png" alt="Webflow" />
        <img src="/path/to/softr-logo.png" alt="Softr" />
      </div>
    </div>
  );
};

export default InnovateSection;
