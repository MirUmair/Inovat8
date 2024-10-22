import React from "react";
import { useInView } from "react-intersection-observer";
import images from "../../assets/images";
import "../../styles/ReasonsSection.css"; // Import your CSS file
const Reason = ({ title, description, delay, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });
  return (
    <div
      className={`reason ${inView ? "slide-in" : "hidden"}`}
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
    >
      <img src={image} style={{ width: "30px", height: "10 0px" }} />
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
          image={images.i28}
          title="Cross Platform"
          description={
            <>
              At Inov8, we embrace a versatile
              <br /> approach to software platforms.
              <br />
              Whether it involves no-code/low-code
              <br /> solutions or full-stack development,
              <br />
              we thoroughly evaluate each
              <br /> facet of your project to identify
              <br /> the most suitable solution.
            </>
          }
          delay={0.1}
        />
        <Reason
          image={images.i30}
          title="Strategic Approach"
          description={
            <>
              We start by thinking about the end
              <br /> goal. Our expertise in strategic
              <br /> alignment and architecture helps
              <br /> create a plan to bring your ideas to
              <br />
              life.
            </>
          }
          delay={0.3}
        />
        <Reason
          image={images.i29}
          title="Scalability"
          description={
            <>
              Our platform-agnostic approach <br />
              enables us to scale with you. <br />
              Whether it's quickly creating an <br /> MVP with no code, building
              large <br />
              business-critical systems with low <br />
              code, or expanding your digital <br />
              products with full-stack
              <br /> development, we're here to <br /> deliver and support your{" "}
              <br />
              business growth.
            </>
          }
          delay={0.5}
        />
        <Reason
          image={images.i31}
          title="Continued Project Support"
          description={
            <>
              We're not the disappearing
              <br /> type. Once the first version
              <br /> of your project is ready,
              <br /> we're still in the game. We'll
              <br /> help you understand the
              <br /> app and lend a hand when
              <br /> it's time to take things up a<br /> notch.
            </>
          }
          delay={0.7}
        />
      </div>
    </section>
  );
};
export default ReasonsSection;
