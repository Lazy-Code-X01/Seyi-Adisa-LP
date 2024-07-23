import React from "react";
import "./styles.css";

const NewsLetter = () => {
	return (
		<div
			className="newsletter_container"
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			<h3 className="title">Stay Connected</h3>
			<p className="newsletter-text">
				Sign up for our newsletter to receive regular insights and updates.
			</p>
			<div className="newsletter-form">
				<input
					className="newsletter-input"
					type="email"
					name="email"
					placeholder="Your email address"
				/>
				<button className="newsletter-btn">Submit</button>
			</div>
		</div>
	);
};

export default NewsLetter;
