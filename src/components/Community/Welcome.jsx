import React from "react";
import "./page.css";

import img from "../../Assets/hello-friends.jpeg";

const Welcome = () => {
	return (
		<>
			<section className="community-welcome">
        <div className="community-page-inner community-welcome__grid">
				<div
					className="community-welcome__text"
				>
					<h2>Connecting with Our Community</h2>
					<p className="description">
						Engaging with the community is at the heart of my mission. I believe in creating platforms that encourage the development of people and communities through active participation, fostering a sense of belonging among individuals and groups. My initiatives are designed to empower people, enhance civic responsibility, and promote collaborative problem-solving.
					</p>
					<p className="description">
						My initiatives are designed to empower people, enhancing their civic
						responsibility. Through these efforts, I aim to provide individuals
						with the tools and opportunities they need to make meaningful
						contributions to their communities. This empowerment leads to more
						active and engaged citizens.
					</p>
				</div>
				<div className="community-welcome__photo">
					<img src={img} alt="Seyi Adisa meeting a community representative" loading="lazy" />
				</div>
        </div>
			</section>
		</>
	);
};

export default Welcome;
