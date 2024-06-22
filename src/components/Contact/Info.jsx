import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./styles.css";
import {
	Box,
	TextField,
	MenuItem,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Checkbox,
	Button,
	Typography,
} from "@mui/material";

import Footer from "../Footer/Footer";

const inquiryOptions = [
	{ value: "general", label: "General Inquiry" },
	{ value: "consulting", label: "Consulting Services" },
	{ value: "speaking", label: "Speaking Engagements" },
	{ value: "workshops", label: "Workshops and Training" },
	{ value: "media", label: "Media Requests" },
	{ value: "partnership", label: "Partnership Opportunities" },
	{ value: "other", label: "Other" },
];

const contactMethods = [
	{ value: "email", label: "Email" },
	{ value: "phone", label: "Phone" },
	{ value: "either", label: "Either" },
];

const referralSources = [
	{ value: "search", label: "Search Engine" },
	{ value: "social", label: "Social Media" },
	{ value: "referral", label: "Referral" },
	{ value: "event", label: "Event/Conference" },
	{ value: "other", label: "Other" },
];

const Info = () => {
	return (
		<>
			<div className="contact-us-container">
				<p className="contact-us">CONTACT US</p>
				<h1>Let’s Start a Conversation</h1>
				<p className="desc">
					Ready to take the next step? Whether you have questions, need
					guidance, or want to discuss a project, we're here to help. Let's
					connect and explore how we can work together to achieve your goals.
				</p>

				<div className="form_info_container">
					<div className="info-card">
						<div className="box">
							<p className="heading">Social Presence</p>
							<hr />
							<div className="icon-container">
								<a
									href="https://facebook.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaFacebook className="social-icon" />
								</a>
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon"
								>
									<FaInstagram />
								</a>
								<a
									href="https://twitter.com"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon"
								>
									<FaTwitter />
								</a>
								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon"
								>
									<FaLinkedin />
								</a>
							</div>

							{/* <p className="low">I Reply typically within a day </p> */}
						</div>
						<div className="box">
							<p className="heading">Contact Us</p>
							<hr />
							<p className="bright">+234 8132 412 749</p>
							<p className="low">hello@seyiadisa.com</p>
						</div>
					</div>

					<div className="form-container">
						<Box
							component="form"
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: 2,
							}}
						>
							<TextField
								sx={{
									// change the focus color
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{
											borderColor: "#000041",
										},
									// the label color
									"& .MuiInputLabel-outlined.Mui-focused": {
										color: "#000041",
									},
								}}
								label="Full Name"
								variant="outlined"
								required
							/>
							<TextField
								sx={{
									// change the focus color
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{
											borderColor: "#000041",
										},
									// the label color
									"& .MuiInputLabel-outlined.Mui-focused": {
										color: "#000041",
									},
								}}
								label="Email Address"
								variant="outlined"
								required
								type="email"
							/>
							<TextField
								sx={{
									// change the focus color
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{
											borderColor: "#000041",
										},
									// the label color
									"& .MuiInputLabel-outlined.Mui-focused": {
										color: "#000041",
									},
								}}
								label="Phone Number"
								variant="outlined"
								type="tel"
							/>
							<TextField
								sx={{
									// change the focus color
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{
											borderColor: "#000041",
										},
									// the label color
									"& .MuiInputLabel-outlined.Mui-focused": {
										color: "#000041",
									},
								}}
								label="Organization/Company"
								variant="outlined"
							/>

							<TextField
								select
								label="Subject of Inquiry"
								variant="outlined"
								required
								sx={{
									// change the focus color
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{
											borderColor: "#000041",
										},
									// the label color
									"& .MuiInputLabel-outlined.Mui-focused": {
										color: "#000041",
									},
								}}
							>
								{inquiryOptions.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>

							<TextField
								sx={{
									// change the focus color
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{
											borderColor: "#000041",
										},
									// the label color
									"& .MuiInputLabel-outlined.Mui-focused": {
										color: "#000041",
									},
								}}
								label="Message"
								variant="outlined"
								multiline
								rows={4}
								placeholder="Please provide details about your inquiry."
								required
							/>

							{/* <FormControl component="fieldset">
							<FormLabel component="legend">
								Preferred Method of Contact
							</FormLabel>
							<RadioGroup row>
								{contactMethods.map((method) => (
									<FormControlLabel
										key={method.value}
										value={method.value}
										control={<Radio />}
										label={method.label}
									/>
								))}
							</RadioGroup>
						</FormControl> */}

							<TextField
								select
								label="How Did You Hear About Us?"
								variant="outlined"
								sx={{
									// change the focus color
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{
											borderColor: "#000041",
										},
									// the label color
									"& .MuiInputLabel-outlined.Mui-focused": {
										color: "#000041",
									},
								}}
							>
								{referralSources.map((source) => (
									<MenuItem key={source.value} value={source.value}>
										{source.label}
									</MenuItem>
								))}
							</TextField>
							{/* 
						<FormControlLabel
							control={<Checkbox />}
							label="Yes, I would like to receive updates and newsletters."
						/> */}

							{/* Replace with actual CAPTCHA or reCAPTCHA component */}
							<Typography variant="body2" color="textSecondary">
								[CAPTCHA or reCAPTCHA]
							</Typography>

							<Button
								sx={{
									backgroundColor: "#000041",
									fontWeight: "700",
									"&:hover": {
										backgroundColor: "#000080",
									},
								}}
								variant="contained"
								color="primary"
								type="submit"
							>
								Submit
							</Button>
						</Box>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Info;
