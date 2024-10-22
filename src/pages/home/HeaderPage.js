import React, { useState, useEffect, useRef, useMemo } from "react";
import "../../styles/HeaderPage.css";
import Navbar from "../../components/Navbar";
import image from "../../assets/images";
const Header = () => {
  const texts = [
    "Shaping the Future with Technology & Innovation.",
    "Driving Business Excellence with Scalable Digital Solutions",
    "Extract, Connect & Make Sense of Complex Data.",
    "Simplify the Dev Journey, Maximize Efficiency",
  ];
  const text2 = [
    "",
    "AI/ML is at the core of everything we do.",
    "Boost competitiveness with AI integration.",
    "Innovate with MENDIX: 10X faster enterprise solutions",
  ];
  const images = useMemo(
    () => [image.lightbulb1, image.i26, image.lightbulb3, image.i27],
    [image]
  );
  // State to track current text index and animation state
  const [currentText, setCurrentText] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef(null);
  const hideDuration = 1000;
  const showDuration = 4000;
  useEffect(() => {
    setIsAnimating(true);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger hide animation first
      setIsAnimating(false);
      // Update the text and image only after hide animation is done
      setTimeout(() => {
        setCurrentText((prevTextIndex) => (prevTextIndex + 1) % texts.length);
        // Trigger show animation
        setIsAnimating(true);
      }, hideDuration); // Wait until the hide animation is done before showing the new text
    }, showDuration + hideDuration); // Adjust interval timing to fit both hide and show durations
    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="contentType">
        <div className="content">
          <div className="contentText">
            <p
              className={`text ${isAnimating ? "show" : "hide"}`}
              ref={textRef}
            >
              {texts[currentText].split(" ").slice(0, 3).join(" ")}
              <br />
              {texts[currentText].split(" ").slice(3).join(" ")}
            </p>
            <p className="textbottom">{text2[currentText]}</p>
          </div>
          {images[currentText] && (
            <img
              src={images[currentText]}
              alt="Lighting bulb"
              className="image"
            />
          )}
        </div>
        <div className="textcontent">
          <p className="textbottom" style={{ margin: 0 }}>
            Let's get
          </p>
          <p className="textbottom1" style={{ margin: 0 }}>
            innovative
          </p>
          <img
            src={image.i23}
            alt="icon"
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "0px",
              marginTop: "6px",
            }}
          />
          <img className="icon-background" src={image.icon33} />
        </div>
      </div>
    </div>
  );
};
export default Header;
