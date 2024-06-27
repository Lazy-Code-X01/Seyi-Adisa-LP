import React from "react";
import { FaUtensils, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";
import "./styles.css";

const UpcomingEvents = () => {
	return (
		<section className="upcoming-events">
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
					<p>July 6</p>
					<div className="overlay">
						<button className="book-button">Book</button>
					</div>
				</div>
				<div className="event-card">
					<FaChalkboardTeacher className="event-icon" />

					<h3>Governance Workshop</h3>
					<p>July 13</p>
					<div className="overlay">
						<button className="book-button">Book</button>
					</div>
				</div>
				<div className="event-card">
					<FaGlobe className="event-icon" />

					<h3>Change Your World</h3>
					<p>October 19</p>
					<div className="overlay">
						<button className="book-button">Book</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UpcomingEvents;
