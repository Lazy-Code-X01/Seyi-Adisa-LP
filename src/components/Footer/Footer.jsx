import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./styles.css";

import logo from "../../Assets/logo.jpeg";
import { Button, TextField } from "@mui/material";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-header">
				<div className="img_container">
					<img src={logo} alt="values_africa" />
				</div>
				<div className="links">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/services">Services</NavLink>
					<NavLink to="/resources">Resources</NavLink>
					<NavLink to="/community">Community</NavLink>
				</div>
			</div>

			<div className="second_box">
				<div className="subscribe_box">
					<div className="subscribe_content">
						Subscribe to our news letter to get <br /> latest updates and news
					</div>
					<div className="registration_box">
						<input
							type="email"
							className="email_box"
							placeholder="Enter your email"
						/>
						{/* <TextField
							label="Email Address"
							fullWidth
							sx={{
								"& .MuiOutlinedInput-notchedOutline": {
									borderColor: "rgb(59, 59, 59)",
									color: "#F4F4F4",
									// width: "300px",
								},
								// change the focus color
								"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
									{
										borderColor: "#fff",
									},
								// the label color
								"& .MuiInputLabel-outlined.Mui-focused": {
									color: "#fff",
								},
							}}
						/> */}
						<Button className="subscribe_button">Subscribe.</Button>
					</div>
				</div>
			</div>

			<div className="last_box">
				<div className="value_africa">
					<div className="value">
						<p> Hon. Seyi Adisa</p>
						<p> hello@seyiadisa.com +234 8132 412 749</p>
					</div>
					<div className="icons">
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
			</div>
		</div>
	);
};

export default Footer;
