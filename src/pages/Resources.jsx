import React from "react";
import Hero from "../components/Resources/Hero";
import Blog from "../components/Resources/Blog";
import Publications from "../components/Resources/Publications";
import MediaAppearances from "../components/Shared/MediaAppearances";
import { Newsletter, Footer } from "../components/Shared/Sections";


// media query
import '../utils/mediaQuery.css'
const Resources = () => {
	return (
		<div>
			<Hero />
			<Blog />
			<Publications />
			<MediaAppearances />
			<Newsletter />
            <Footer />
		</div>
	);
};

export default Resources;
