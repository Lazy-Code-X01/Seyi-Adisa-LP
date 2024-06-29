import React from "react";
import Hero from "../components/Home/Hero";
import KeyAchievements from "../components/Home/KeyAchievements";
import About from "../components/Home/About";
import Achievements from "../components/Home/Achievements";
import MediaAppearances from "../components/Resources/MediaAppearances";
import Blog from "../components/Home/Blog";
import Testimonial from "../components/About/Testimonial";
import NewsLetter from "../components/Community/NewsLetter";
import SociaMedia from "../components/Community/SociaMedia";
import UpcomingEvents from "../components/Services/UpcomingEvents";
import Footer from "../components/Footer/Footer";

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
			<Testimonial />
			{/* <div className="mt"></div> */}
			<NewsLetter />
			<SociaMedia />
			<UpcomingEvents />
			<Footer />
		</div>
	);
};

export default Home;
