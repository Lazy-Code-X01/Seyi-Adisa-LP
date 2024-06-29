import React from "react";
import Hero from "../components/About/Hero";
import Mission from "../components/About/Mission";
import Biography from "../components/About/Biography";
import Testimonial from "../components/About/Testimonial";
import Footer from "../components/Footer/Footer";


// media query
import '../utils/mediaQuery.css'

const About = () => {
	return (
		<div>
			<Hero />
			<Mission />
			<Biography />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default About;
