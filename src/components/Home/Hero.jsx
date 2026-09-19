import React from "react";
import { NavLink } from "react-router-dom";
import background from "../../Assets/home-bg-2.jpeg";
import "./hero.css";

const Hero = () => (
  <section className="home-hero" aria-labelledby="home-welcome">
    <img className="home-hero__image" src={background} alt="" fetchPriority="high" />
    <div className="home-hero__content">
      <span className="home-hero__intro">HON. SEYI ADISA</span>
      <h1 id="home-welcome">Welcome!</h1>
      <p>
        Are you passionate about youth leadership, governance, and national
        development? If so, you're in the right place. And if you're not yet,
        I invite you to keep reading—you might just find your passion here.
      </p>
      <NavLink className="home-hero__contact" to="/contact">
        Contact Us
      </NavLink>
    </div>
  </section>
);

export default Hero;
