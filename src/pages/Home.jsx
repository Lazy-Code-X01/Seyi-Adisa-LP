import React from "react";
import ClosingSections from "../components/Home/ClosingSections";
import Hero from "../components/Home/Hero";
import KeyAchievements from "../components/Home/KeyAchievements";
import About from "../components/Home/About";
import Achievements from "../components/Home/Achievements";
import MediaAppearances from "../components/Home/MediaAppearances";
import Blog from "../components/Home/Blog";

// media query
import '../utils/mediaQuery.css'

const Home = () => {
	return (
		<div>
			<Hero />
			<Achievements />
			<About />
			<Blog />
			<MediaAppearances />
			{/* <KeyAchievements /> */}
			<ClosingSections />
		</div>
	);
};

export default Home;
