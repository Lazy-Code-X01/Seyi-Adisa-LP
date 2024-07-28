import React from 'react';
import "./styles.css";
import { useNavigate } from 'react-router-dom';

const GetInvolvedSection = () => {
  const navigate = useNavigate()
  const volunteerNow = () => {
    navigate('/contact')
  };

  return (
    <section className="get-involved-section">
      <div
        className="get-involved-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="title">How to Get Involved</h1>
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
        <button className="volunteer-button" onClick={volunteerNow}>Volunteer Now</button>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
