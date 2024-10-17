import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../../styles/MiddleHeader.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../assets/images";
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
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * slideWidth
      }px)`;
    }
  };
  useEffect(() => {
    updateSliderPosition();
  }, [currentIndex]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
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
          <a href="#" className="view-services">
            <h5>
              View All<span>Services &gt;</span>
            </h5>
          </a>
        </div>
        <div className="slider-wrapper">
          <div className="btnContainer">
            <button className="control prev" onClick={prevSlide}>
              ❮
            </button>
            <button className="control next" onClick={nextSlide}>
              ❯
            </button>
          </div>
          //////////////////////////
          {/* <div className="slider-container">
      <button className="prev" onClick={prevSlide}>
        &lt;
      </button>
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <h3>{slide.title}</h3>
            <p>{slide.content}</p>
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
          /////////////////////////      */}
          <div className="slider-container">
            <div className="slider" ref={sliderRef}>
              {slides.map((slide, index) => (
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
