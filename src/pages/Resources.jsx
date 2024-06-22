import React from "react";
import Hero from "../components/Resources/Hero";
import Blog from "../components/Resources/Blog";
import Publications from "../components/Resources/Publications";
import MediaAppearances from "../components/Resources/MediaAppearances";
import Footer from "../components/Footer/Footer";

const Resources = () => {
	return (
		<div>
			<Hero />
			<Blog />
			<Publications />
			<MediaAppearances />
			<Footer />
		</div>
	);
};

export default Resources;
