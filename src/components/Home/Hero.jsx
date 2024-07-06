import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

import bg1 from "../../Assets/home-bg-1.jpeg";
import bg2 from "../../Assets/home-bg-2.jpeg";

const Hero = () => {
	const [bgImage, setBgImage] = useState("");
	const [isFixed, setIsFixed] = useState(false);
	const heroRef = useRef(null);

	useEffect(() => {
		const currentHeroRef = heroRef.current;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsFixed(!entry.isIntersecting);
			},
			{ threshold: 0.1 },
		);

		if (currentHeroRef) {
			observer.observe(currentHeroRef);
		}

		return () => {
			if (currentHeroRef) {
				observer.unobserve(currentHeroRef);
			}
		};
	}, []);

	useEffect(() => {
		const images = [bg1, bg2];
		const randomImage = images[Math.floor(Math.random() * images.length)];
		setBgImage(randomImage);
	}, []);

	return (
		<div
			ref={heroRef}
			className={`hero container ${isFixed ? "fixed" : ""}`}
			style={{
				backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(21, 21, 21, 0.73)), url(${bgImage})`,
			}}
		>
			<div className="hero-text" data-aos="fade-up" data-aos-duration="1000">
				<h1>Welcome!</h1>
				<p>
					Are you passionate about youth leadership, governance, and national
					development? If so, you're in the right place. And if you're not yet,
					we invite you to keep reading—you might just find your passion here.
				</p>
				<NavLink to={"/contact"}>
					<button>Contact Us</button>
				</NavLink>
			</div>
		</div>
	);
};

export default Hero;
