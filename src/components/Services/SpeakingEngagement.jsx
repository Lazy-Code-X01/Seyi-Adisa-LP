import React from "react";
import image from "../../Assets/speakingEngagement.jpg";
import ServiceSection from "./ServiceSection";

export default function SpeakingEngagement() {
  return <ServiceSection id="speakingengagement-title" title="Speaking Engagements" image={image} imageAlt="A speaking engagement with an audience" topics={["Governance", "Leadership", "Nation building"]} reverse={false}>
    {"Seyi Adisa is a dynamic and inspiring speaker, known for his ability to engage audiences with his insights on leadership, governance, and personal development. His speaking engagements are crafted to deliver impactful messages that resonate with diverse audiences. Our speaking engagements cover:"}
  </ServiceSection>;
}
