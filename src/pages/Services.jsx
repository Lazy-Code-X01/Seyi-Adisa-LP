import React from "react";
import Hero from "../components/Services/Hero";
import Consulting from "../components/Services/Consulting";
import SpeakingEngagement from "../components/Services/SpeakingEngagement";
import WorkshopTraining from "../components/Services/WorkshopTraining";
import Footer from "../components/Footer/Footer";
import UpcomingEvents from "../components/Services/UpcomingEvents";

const Services = () => {
	return (
		<div>
			<Hero />
			<Consulting />
			<SpeakingEngagement />
			<WorkshopTraining />
			<UpcomingEvents />
			<Footer />
		</div>
	);
};

export default Services;
