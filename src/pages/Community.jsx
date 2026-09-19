import React from "react";
import { Newsletter, SocialLinks, Events, Footer } from "../components/Shared/Sections";
import Hero from "../components/Community/Hero";
import Welcome from "../components/Community/Welcome";
import Initaitives from "../components/Community/Initaitives";


// media query
import '../utils/mediaQuery.css'
import GetInvolvedSection from "../components/Community/GetInvolvedSection";
const Community = () => {
	return (
		<div>
			<Hero />
			<Welcome />
			<Initaitives />
			<GetInvolvedSection />
			<Newsletter />
			<SocialLinks />
			<Events />
			<Footer />
		</div>
	);
};

export default Community;
