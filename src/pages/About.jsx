import React from "react";
import Hero from "../components/About/Hero";
import Mission from "../components/About/Mission";
import Biography from "../components/About/Biography";
import { Testimonials, Newsletter, Footer } from "../components/Shared/Sections";



// media query
import '../utils/mediaQuery.css'

const About = () => {
	return (
		<div>
			<Hero />
			<Mission />
			<Biography />
			<Testimonials />
            <Newsletter />
			<Footer />
		</div>
	);
};

export default About;
