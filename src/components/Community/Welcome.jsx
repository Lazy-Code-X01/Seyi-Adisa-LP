import React from "react";
import "./styles.css";

import img from "../../Assets/hello-friends.jpeg";

const Welcome = () => {
	return (
		<>
			<div className="welcome-container">
				<div
					className="welcome-text"
					data-aos="fade-right"
					data-aos-duration="1000"
				>
					{/* <h1 className="title">Hello Friend,</h1> */}
					<p className="description">
						Engaging with the community is at the heart of my mission. I believe
						in creating platforms that encourage the development of people and
						communities through active participation. By fostering a sense of
						belonging among individuals and groups, my goal is to build
						stronger, more connected communities.
					</p>
					<p className="description">
						My initiatives are designed to empower people, enhancing their civic
						responsibility. Through these efforts, I aim to provide individuals
						with the tools and opportunities they need to make meaningful
						contributions to their communities. This empowerment leads to more
						active and engaged citizens.
					</p>
				</div>
				<div className="welcome-picture">
					<img src={img} alt="image lodaing..." />
				</div>
			</div>
		</>
	);
};

export default Welcome;
