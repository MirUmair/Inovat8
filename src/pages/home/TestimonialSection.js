import React, { useState } from "react";
import "../../styles/TestimonialSection.css";
import images from "../../assets/images";
const Testimonials = () => {
  // Array of testimonials
  const testimonials = [
    {
      text: "Inovat8 was instrumental in helping us adopt low-code/no-code platforms and scale quickly with AI-powered solutions. Their expertise in big data and analytics enabled us to make smarter decisions and optimize our growth. A fantastic partner throughout our journey.",
      author: "John William",
      title: "Founder & CEO ABC Inc.",
      image: images.i33, // Replace with the correct image path
    },
    {
      text: "The team at Inovat8 is highly knowledgeable, and their services have helped us significantly in scaling our operations using advanced data solutions.",
      author: "Jane Doe",
      title: "CTO XYZ Ltd.",
      image: images.i33, // Replace with the correct image path
    },
    {
      text: "Working with Inovat8 has been a game-changer for our business. Their expertise in integrating AI with our processes has driven remarkable efficiency.",
      author: "Michael Smith",
      title: "COO LMN Corp.",
      image: images.i33, // Replace with the correct image path
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  // Function to handle the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  // Function to handle the previous testimonial
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">
        — What whispers do our clients share about us!
      </h2>
      <p className="testimonial-subtitle">Testimonials</p>
      <div className="testimonial-content">
        {/* Left Arrow */}
        <img
          src={images.i22}
          alt="icon"
          style={{ width: "60px", height: "60px" }}
          onClick={handlePrev}
          className="icon22"
        />
        {/* Testimonial Quote Section */}
        <div className="testimonial-quote-box">
          <img
            src={images.i32}
            alt="icon"
            className="quote-left"
            style={{ width: "100px", height: "100px" }}
          />
          <p className="testimonial-text">{testimonials[currentIndex].text}</p>
          <div className="quote-author">
            <p className="author-name">~ {testimonials[currentIndex].author}</p>
            <h2 className=" author-name">{testimonials[currentIndex].title}</h2>
          </div>
          <img
            src={images.i32}
            alt="icon"
            className="icon22 quote-right"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        {/* User Image Section */}
        <div className="testimonial-image">
          <div className="image-circle">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].author}
              className="testimonial-img"
            />
          </div>
        </div>
        {/* Right Arrow */}
        <img
          src={images.i22}
          alt="icon"
          style={{ width: "60px", height: "60px" }}
          onClick={handleNext}
        />
        {/* <img src={} alt="icon"   onClick={handleNext}/>
        <button className="testimonial-arrow right-arrow" onClick={handleNext}>
        </button> */}
      </div>
    </div>
  );
};
export default Testimonials;
