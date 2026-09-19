import React from "react";
import Hero from "../components/Services/Hero";
import SpeakingEngagement from "../components/Services/SpeakingEngagement";
import WorkshopTraining from "../components/Services/WorkshopTraining";
import { Events, Newsletter, Footer } from "../components/Shared/Sections";

export default function Services() {
  return <>
    <Hero />
    <SpeakingEngagement />
    <WorkshopTraining />
    <Events />
    <Newsletter />
    <Footer />
  </>;
}
