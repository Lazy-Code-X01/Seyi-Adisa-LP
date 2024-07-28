import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./styles.css";
import {
	Box,
	TextField,
	MenuItem,
	Button,
	CircularProgress,
} from "@mui/material";

import axios from "axios";

import Footer from "../Footer/Footer";

import {toast } from "react-toastify";


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
	const initialFormData = {
		fullName: "",
		emailAddress: "",
		phoneNumber: "",
		organization: "",
		subject: "",
		message: "",
		contactMethod: "",
		howHeard: "",
	};

	const [formData, setFormData] = useState(initialFormData);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await axios.post(
				"https://seyi-adisa-backend.onrender.com/api/contact",
				formData,
			);
			toast.success("Message sent successfully!");
			setFormData(initialFormData); // Clear the form
			setLoading(false);
			window.scrollTo(0, 0);
		} catch (error) {
			toast.error("Failed to send message. Please try again.");
			setLoading(false);
		}
	};
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

				<div
					className="form_info_container"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<div className="info-card">
						<div className="box">
							<p className="heading">Social Presence</p>
							<hr />
							<div className="icon-container">
								<a
									href="https://web.facebook.com/officialseyiadisa/?_rdc=1&_rdr"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaFacebook className="social-icon" />
								</a>
								<a
									href="https://www.instagram.com/seyiadisa_/"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon"
								>
									<FaInstagram />
								</a>
								<a
									href="https://x.com/sjadisa?s=11"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon"
								>
									<FaTwitter />
								</a>
								<a
									href="https://www.linkedin.com/in/seyiadisa/"
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
							sx={{ display: "flex", flexDirection: "column", gap: 2 }}
							onSubmit={handleSubmit}
						>
							<TextField
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{ borderColor: "#000041" },
									"& .MuiInputLabel-outlined.Mui-focused": { color: "#000041" },
								}}
								label="Full Name"
								variant="outlined"
								required
								name="fullName"
								value={formData.fullName}
								onChange={handleChange}
							/>
							<TextField
								sx={{
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{ borderColor: "#000041" },
									"& .MuiInputLabel-outlined.Mui-focused": { color: "#000041" },
								}}
								label="Email Address"
								variant="outlined"
								required
								type="email"
								name="emailAddress"
								value={formData.emailAddress}
								onChange={handleChange}
							/>
							<TextField
								sx={{
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{ borderColor: "#000041" },
									"& .MuiInputLabel-outlined.Mui-focused": { color: "#000041" },
								}}
								label="Phone Number"
								variant="outlined"
								type="tel"
								name="phoneNumber"
								value={formData.phoneNumber}
								onChange={handleChange}
							/>
							<TextField
								sx={{
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{ borderColor: "#000041" },
									"& .MuiInputLabel-outlined.Mui-focused": { color: "#000041" },
								}}
								label="Organization/Company"
								variant="outlined"
								name="organization"
								value={formData.organization}
								onChange={handleChange}
							/>
							<TextField
								select
								label="Subject of Inquiry"
								variant="outlined"
								required
								sx={{
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{ borderColor: "#000041" },
									"& .MuiInputLabel-outlined.Mui-focused": { color: "#000041" },
								}}
								name="subject"
								value={formData.subject}
								onChange={handleChange}
							>
								{inquiryOptions.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
							<TextField
								sx={{
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{ borderColor: "#000041" },
									"& .MuiInputLabel-outlined.Mui-focused": { color: "#000041" },
								}}
								label="Message"
								variant="outlined"
								multiline
								rows={4}
								placeholder="Please provide details about your inquiry."
								required
								name="message"
								value={formData.message}
								onChange={handleChange}
							/>
							<TextField
								select
								label="Preferred Method of Contact"
								variant="outlined"
								required
								sx={{
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{ borderColor: "#000041" },
									"& .MuiInputLabel-outlined.Mui-focused": { color: "#000041" },
								}}
								name="contactMethod"
								value={formData.contactMethod}
								onChange={handleChange}
							>
								{contactMethods.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
							<TextField
								select
								label="How Did You Hear About Us?"
								variant="outlined"
								sx={{
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{ borderColor: "#000041" },
									"& .MuiInputLabel-outlined.Mui-focused": { color: "#000041" },
								}}
								name="howHeard"
								value={formData.howHeard}
								onChange={handleChange}
							>
								{referralSources.map((source) => (
									<MenuItem key={source.value} value={source.value}>
										{source.label}
									</MenuItem>
								))}
							</TextField>
							{/* <Typography variant="body2" color="textSecondary">
								[CAPTCHA or reCAPTCHA]
							</Typography> */}
							<Button
								sx={{
									backgroundColor: "#C8A500",
									fontWeight: "700",
									"&:hover": { opacity: "90%", background: '#C8A500' },
								}}
								variant="contained"
								color="primary"
								type="submit"
								disabled={loading}
							>
								{loading ? <CircularProgress size={"24px"} /> : "Submit"}
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
