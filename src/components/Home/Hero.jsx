import React, { useRef, useEffect, useState } from "react";
import "./styles.css";

const Hero = () => {
  const heroRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const currentHeroRef = heroRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className={`hero container ${isFixed ? "fixed" : ""}`}>
      <div className="hero-text">
        <h1>Welcome to Seyi Adisa’s official website.</h1>
        <p>
          As a global leader in governance and leadership, Seyi is dedicated to
          creating transformative platforms for the development of individuals,
          communities, nations, and the continent through the power of strategic
          collaboration and visionary leadership.
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Hero;
