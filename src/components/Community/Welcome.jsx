import React from "react";
import "./styles.css";

const Welcome = () => {
	return (
		<div className="welcome-container">
			<div className="welcome-text">
				<h1>Hello Friend,</h1>
				<p className="description">
					Engaging with the community is at the heart of my mission. I believe
					in creating platforms that encourage the development of people and
					communities through active participation, fostering a sense of
					belonging among individuals and groups. My initiatives are designed to
					empower people, enhance civic responsibility, and promote
					collaborative problem-solving.
				</p>
			</div>
			<div className="welcome-picture"></div>
		</div>
	);
};

export default Welcome;
