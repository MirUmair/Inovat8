import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/MiddleHeader.css'; // Import your CSS file
import "slick-carousel/slick/slick.css"; // Import the core slick carousel styles
import "slick-carousel/slick/slick-theme.css";
import images from '../assets/images';

const HeaderPage = () => {
    const sliderSettings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        {
            title: 'AI/ML',
            description: 'Enhance the capabilities of AI/ML with ease through Inov8, your indispensable partner in accelerating the development and deployment of cutting-edge AI/ML solutions. Inov8 empowers businesses to spearhead technological progress by enabling quick adaptations and innovations to navigate the ever-evolving AI/ML domain proficiently.'
        },
        {
            title: 'Development',
            description: 'Our expertise lies in developing enterprise-level applications utilizing low code approaches. Our team helps streamline development with transparency, agility, and a commitment to your goals.'
        },
        {
            title: 'AI/Enhance',
            description: 'Enhance the capabilities of AI/ML with ease through Inov8, your indispensable partner in accelerating the development and deployment of cutting-edge AI/ML solutions. Inov8 empowers businesses to spearhead technological progress by enabling quick adaptations and innovations to navigate the ever-evolving AI/ML domain proficiently.'
        },
        {
            title: 'Development Enhance',
            description: 'Our expertise lies in developing enterprise-level applications utilizing low code approaches. Our team helps streamline development with transparency, agility, and a commitment to your goals.'
        }
    ];

    const updateSliderPosition = () => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.clientWidth;
            sliderRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    };

    useEffect(() => {
        updateSliderPosition();
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
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
                className={`trusted-by-section ${trustedByInView ? 'slide-in' : 'hidden'}`}
                ref={trustedByRef}
            >
                <div className="trusted-by-title">
                    <h2>— Trusted By</h2>
                </div>
                <div className="trusted-logos">
                    <img className={`trusted-by-section ${trustedByInView ? 'slide-in' : 'hidden'}`} src={images.icon1} alt="Ufone Logo" />
                    <img src={images.icon2} alt="Urban Point Logo" />
                    <img src={images.icon3} alt="Ericsson Logo" />
                    <img src={images.icon4} alt="Nokia Logo" />
                    <img src={images.icon5} alt="Zong Logo" />
                    <img src={images.icon6} alt="Huawei Logo" />
                    <img src={images.icon7} alt="ZTE Logo" />
                    <img src={images.icon8} alt="Huawei Logo" />
                    <img src={images.icon9} alt="ZTE Logo" />
                </div>
            </section>

            {/* What We Offer Section */}
            <section
                className={`innovation-section ${whatWeOfferInView ? 'slide-in' : 'hidden'}`}
                ref={whatWeOfferRef}
            >
                <div className="offer-text">
                    <h3>Global Center of <span>INNOVATION</span></h3>
                    <h4>OUR SERVICES</h4>
                    <h2>What We Offer</h2>
                    <p>
                        Our services prioritize strategy and transparency as fundamental elements. Our objective is to enable you to expand your business by eliminating technological obstacles and providing comprehensive support throughout the project's lifecycle.
                    </p>
                    <a href="#" className="view-services">View All Services &gt;</a>
                </div>
                <div className="slider-wrapper">
                    <div className='btnContainer'>
                        <button className="control prev" onClick={prevSlide}>❮</button>
                        <button className="control next" onClick={nextSlide}>❯</button>
                    </div>
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
