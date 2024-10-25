import React from "react";
import { FaUtensils, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const UpcomingEvents = () => {
	const navigate = useNavigate()
	const toContact = () => {
		navigate('/contact')
	}
	const toLaunchAndLearn = () => {
		window.open('https://docs.google.com/forms/d/1h6ZTn0u3R_46CSKUweaExRKTBbaOYEG0da-DGyDdYI4/edit', '_blank');
	}

	return (
		<section
			className="upcoming-events"
			// data-aos="fade-up"
			// data-aos-duration="1000"
		>
			<div className="events-header">
				<h2>Join Our Upcoming Events</h2>
				<p>
					Stay informed and engaged with our latest events designed for your
					growth.
				</p>
			</div>
			<div className="events-list">
				<div className="event-card">
					<FaUtensils className="event-icon" />
					<h3>Lunch & Learn</h3>
					<p>November 9</p>
					<div className="overlay">
						<button className="book-button" onClick={toLaunchAndLearn}>Book</button>
					</div>
				</div>
				<div className="event-card">
					<FaChalkboardTeacher className="event-icon" />

					<h3>Governance Workshop</h3>
					<p>February</p>
					<div className="overlay">
						<button className="book-button" onClick={toContact}>Book</button>
					</div>
				</div>
				<div className="event-card">
					<FaGlobe className="event-icon" />

					<h3>Change Your World</h3>
					<p>March</p>
					<div className="overlay">
						<button className="book-button" onClick={toContact}>Book</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UpcomingEvents;
