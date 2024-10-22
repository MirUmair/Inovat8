import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../../styles/MiddleHeader.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faArrowAltCircleLeft,
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const HeaderPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const slides = [
    {
      title: "AI/ML",
      description:
        "Enhance the capabilities of AI/ML with ease through Inov8, your indispensable partner in accelerating the development and deployment of cutting-edge AI/ML solutions. Inov8 empowers businesses to spearhead technological progress by enabling quick adaptations and innovations to navigate the ever-evolving AI/ML domain proficiently.",
    },
    {
      title: "Enterprise App Development",
      description:
        "Our expertise lies in developing enterprise-level applications utilizing low code approaches. Our team helps streamline development with transparency, agility, and a commitment to your goals.",
    },
    {
      title: "Strategic Advisory",
      description:
        "Inovat8 offers specialized advisory services for companies looking to implement or enhance low-code/no-code platforms. We ensure a tailored strategy that aligns with your business objectives. For more complex needs, our AI-driven full-stack development team integrates advanced solutions, utilizing AI to optimize functionality, scalability, automation, and big data management. Additionally, we provide expertise in analytics, enabling businesses to harness the power of data for smarter decision-making. Our intelligent and adaptive services are designed to grow and evolve with your business.",
    },
    {
      title: "Growth and Scale",
      description:
        "Our Growth and Scale offerings empower businesses at every stage, from initial adoption of low-code/no-code platforms to advanced AI-driven full-stack application development. We provide the necessary support and expertise to facilitate seamless transitions and optimize performance, ensuring your organization can effectively harness the potential of modern technology for sustained growth.",
    },
  ];
  const updateSliderPosition = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;

      // Add smooth transition for the normal slides
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      // Move the slider according to the currentIndex (account for cloned slides)
      sliderRef.current.style.transform = `translateX(-${
        (currentIndex + 1) * slideWidth
      }px)`; // Adding +1 to account for the cloned first slide
    }
  };

  // Clone the first and last slides for the infinite loop
  const slidesWithClones = [
    slides[slides.length - 1], // Clone of the last slide
    ...slides, // All original slides
    slides[0], // Clone of the first slide
  ];

  const handleTransitionEnd = () => {
    if (currentIndex === slides.length) {
      // If we've transitioned to the cloned first slide, reset instantly to the real first slide
      sliderRef.current.style.transition = "none"; // Temporarily disable the transition
      setCurrentIndex(0); // Set the real first slide as the current index
      sliderRef.current.style.transform = `translateX(-${sliderRef.current.clientWidth}px)`; // Move to the real first slide position
    } else if (currentIndex === -1) {
      // If we've transitioned to the cloned last slide, reset to the real last slide
      sliderRef.current.style.transition = "none"; // Temporarily disable the transition
      setCurrentIndex(slides.length - 1); // Move to the real last slide
      sliderRef.current.style.transform = `translateX(-${
        slides.length * sliderRef.current.clientWidth
      }px)`; // Move to the real last slide position
    }
  };

  // useEffect to handle slide position updates and reset behavior
  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("transitionend", handleTransitionEnd);
    updateSliderPosition();

    return () => {
      slider.removeEventListener("transitionend", handleTransitionEnd); // Cleanup listener
    };
  }, [currentIndex]);

  // Moving to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= slides.length - 1) {
        return slides.length; // Set index beyond the last slide temporarily
      }
      return (prevIndex + 1) % slides.length;
    });
  };

  // Moving to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        // If we're on the first slide, temporarily go to the clone of the last slide
        return -1; // Set index beyond the first slide temporarily (clone of last)
      }
      // Otherwise, move to the previous slide
      return (prevIndex - 1 + slides.length) % slides.length;
    });
  };
  // Using useInView hook to trigger animation for Trusted By section
  const { ref: trustedByRef, inView: trustedByInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  // Using useInView hook to trigger animation for What We Offer section
  const { ref: whatWeOfferRef, inView: whatWeOfferInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div>
      {/* Trusted By Section */}
      <section
        className={`trusted-by-section ${
          trustedByInView ? "slide-in" : "hidden"
        }`}
        ref={trustedByRef}
      >
        <div className="trusted-by-title">
          <h2>— Trusted By</h2>
        </div>
        <div className="trusted-logos-ticker">
          <div className="trusted-logos-ticker">
            <div className="trusted-logos-wrapper">
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon1}
                alt="Ufone Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon2}
                alt="Urban Point Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon3}
                alt="Ericsson Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon4}
                alt="Nokia Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon5}
                alt="Zong Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon6}
                alt="Huawei Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon7}
                alt="ZTE Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon8}
                alt="Huawei Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon9}
                alt="ZTE Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon10}
                alt="Zong Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon11}
                alt="Huawei Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon12}
                alt="ZTE Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon13}
                alt="Huawei Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon14}
                alt="ZTE Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon1}
                alt="Ufone Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon2}
                alt="Urban Point Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon3}
                alt="Ericsson Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon4}
                alt="Nokia Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon5}
                alt="Zong Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon6}
                alt="Huawei Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon7}
                alt="ZTE Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon8}
                alt="Huawei Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon9}
                alt="ZTE Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon10}
                alt="Zong Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon11}
                alt="Huawei Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon12}
                alt="ZTE Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon13}
                alt="Huawei Logo"
              />
              <img
                className={`trusted-by-section ${
                  trustedByInView ? "slide-in" : "hidden"
                }`}
                src={images.icon14}
                alt="ZTE Logo"
              />
            </div>
          </div>
        </div>
      </section>
      {/* What We Offer Section */}
      <section
        className={`innovation-section ${
          whatWeOfferInView ? "slide-in" : "hidden"
        }`}
        ref={whatWeOfferRef}
      >
        <div className="offer-text">
          <h5>
            Global Center of <span>INNOVATION</span>
          </h5>
          <h5>
            — OUR SERVICES<h2>What We Offer</h2>
          </h5>
          <p>
            Our services prioritize strategy and
            <br />
            transparency as fundamental elements. Our
            <br />
            objective is to enable you to expand your
            <br />
            business by eliminating technological
            <br />
            obstacles and providing comprehensive
            <br />
            support throughout the project's lifecycle.
          </p>
          <div className="div-services">
            <a href="#" className="view-services">
              <h5>
                View All<span>Services</span>
              </h5>
            </a>
            <img
              src={images.i22}
              style={{
                width: "50px",
                height: "50px",
                marginTop: "5px",
                marginLeft: "5px",
              }}
            />
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="btnContainer">
            <FontAwesomeIcon
              className="control prev"
              onClick={prevSlide}
              color="#fff"
              size={"2xl"}
              icon={faArrowCircleLeft}
            />
            <FontAwesomeIcon
              size={"2xl"}
              className="control next"
              onClick={nextSlide}
              color="#fff"
              icon={faArrowCircleRight}
            />
            {/* <button className="control prev" onClick={prevSlide}>
              ❮
            </button> */}
            {/* <button className="control next" onClick={nextSlide}>
              ❯
            </button> */}
          </div>
          <div className="slider-container">
            <div className="slider" ref={sliderRef}>
              {slidesWithClones.map((slide, index) => (
                <div className="slide" key={index}>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeaderPage;
