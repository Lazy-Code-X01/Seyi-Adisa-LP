import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./styles.css";

import logo from "../../Assets/logo.png";
import { Button, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Footer = () => {
	  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://seyi-adisa-backend.onrender.com/api/subscriber", { email });
      toast.success(response.data.message);
	  setEmail('')
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
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
						Stay Connected to recieve <br /> Regular Insights and Updates
					</div>
					<div className="registration_box">
						    <input
            type="email"
            className="email_box"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button className="subscribe_button" type="submit" onClick={handleSubmit} disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
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
							href="https://web.facebook.com/officialseyiadisa/?_rdc=1&_rdr"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook className="social_icon" />
						</a>
						<a
							href="https://www.instagram.com/seyiadisa_/"
							target="_blank"
							rel="noopener noreferrer"
							className="social_icon"
						>
							<FaInstagram />
						</a>
						<a
							href="https://x.com/sjadisa?s=11"
							target="_blank"
							rel="noopener noreferrer"
							className="social_icon"
						>
							<FaTwitter />
						</a>
						<a
							href="https://www.linkedin.com/in/seyiadisa/"
							target="_blank"
							rel="noopener noreferrer"
							className="social_icon"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Footer;
