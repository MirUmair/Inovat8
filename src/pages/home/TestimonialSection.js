import React from "react";
import "../../styles/TestimonialSection.css";
const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">
        What whispers do our clients share about us!
      </h2>
      <h3 className="testimonial-subtitle">Testimonials</h3>

      <div className="testimonial-content">
        {/* Left Arrow */}
        <button className="testimonial-arrow left-arrow">&#x2190;</button>

        {/* Testimonial Quote Section */}
        <div className="testimonial-quote-box">
          <div className="quote-icon quote-left">“</div>
          <p className="testimonial-text">
            Inovat8 was instrumental in helping us adopt low-code/no-code
            platforms and scale quickly with AI-powered solutions. Their
            expertise in big data and analytics enabled us to make smarter
            decisions and optimize our growth. A fantastic partner throughout
            our journey.
          </p>
          <div className="quote-author">
            <p className="author-name">~ John William</p>
            <p className="author-title">Founder & CEO ABC Inc.</p>
          </div>
          <div className="quote-icon quote-right">”</div>
        </div>

        {/* User Image Section */}
        <div className="testimonial-image">
          <div className="image-circle">
            <img
              src="path_to_image"
              alt="John William"
              className="testimonial-img"
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button className="testimonial-arrow right-arrow">&#x2192;</button>
      </div>
    </div>
  );
};

export default Testimonials;
