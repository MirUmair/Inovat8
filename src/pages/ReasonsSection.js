import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/ReasonsSection.css'; // Import your CSS file

const Reason = ({ title, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <div
      className={`reason ${inView ? 'slide-in' : 'hidden'}`}
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const ReasonsSection = () => {
  return (
    <section className="reasons-section">
      <h3>— Reasons why Innov8 is worth being your Tech Partner!</h3>
      <div className="reasons-grid">
        <Reason
          title="Cross Platform"
          description="At Inov8, we embrace a versatile approach to software platforms. Whether it involves no-code/low-code solutions or full-stack development, we thoroughly evaluate each facet of your project to identify the most suitable solution."
          delay={0.1}
        />
        <Reason
          title="Strategic Approach"
          description="We start by thinking about the end goal. Our expertise in strategic alignment helps create a plan to bring your ideas to life."
          delay={0.3}
        />
        <Reason
          title="Scalability"
          description="Our platform-agnostic approach enables us to scale with you. Whether it's quickly creating an MVP with no code, building large business-critical systems with low code, or expanding your digital products with full-stack development, we're here to deliver and support your business growth."
          delay={0.5}
        />
        <Reason
          title="Continued Project Support"
          description="We’re here to deliver and support your business growth."
          delay={0.7}
        />
      </div>
    </section>
  );
};

export default ReasonsSection;
