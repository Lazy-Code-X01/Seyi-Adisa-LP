import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./styles.css";

const SociaMedia = () => {
	return (
		<div
			className="socialMedia_container"
			// data-aos="fade-up"
			// data-aos-duration="1000"
		>
			<div className="icons" 
			data-aos="fade-up"
			data-aos-duration="1000"
			>
				<a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebook className="social_icon" />
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className="social_icon"
				>
					<FaInstagram />
				</a>
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					className="social_icon"
				>
					<FaTwitter />
				</a>
				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					className="social_icon"
				>
					<FaLinkedin />
				</a>
			</div>
		</div>
	);
};

export default SociaMedia;
