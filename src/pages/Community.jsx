import React from "react";
import Hero from "../components/Community/Hero";
import Welcome from "../components/Community/Welcome";
import Initaitives from "../components/Community/Initaitives";
import SociaMedia from "../components/Community/SociaMedia";
import UpcomingEvents from "../components/Services/UpcomingEvents";
import NewsLetter from "../components/Community/NewsLetter";
import Footer from "../components/Footer/Footer";


// media query
import '../utils/mediaQuery.css'
const Community = () => {
	return (
		<div>
			<Hero />
			<Welcome />
			<Initaitives />
			<NewsLetter />
			<SociaMedia />
			<UpcomingEvents />
			<Footer />
		</div>
	);
};

export default Community;
