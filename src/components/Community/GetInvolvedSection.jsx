import React from 'react';
import "./page.css";
import { Link } from 'react-router-dom';

const GetInvolvedSection = () => {


  return (
    <section className="community-involvement">
      <div
        className="community-page-inner"
      >
        <h2>How to Get Involved</h2>
        <p className="description">
          We welcome you to join our efforts in making a difference. Whether you
          are interested in attending a forum, participating in a workshop, or
          volunteering for a community project, there are numerous ways to get
          involved and contribute to our shared vision of a thriving, engaged
          society.
        </p>
        <p className="description">
          Together, we can drive positive change and build a brighter future for
          our communities.
        </p>
        <Link className="community-button" to="/contact">Volunteer Now</Link>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
