import React from "react";
import image from "../../Assets/consulting.jpeg";
import ServiceSection from "./ServiceSection";

export default function WorkshopTraining() {
  return <ServiceSection id="workshoptraining-title" title="Workshops and Training" image={image} imageAlt="Seyi facilitating a training session" topics={["Lunch & Learn", "Individual and Group Coaching", "Governance Workshop"]} reverse={true}>
    {"Seyi Adisa's workshops and training programs are designed to equip individuals and organizations with the skills and knowledge needed to excel in their respective fields. Our offerings are interactive, practical, and tailored to meet the specific needs of our participants. Our workshops and training programs include:"}
  </ServiceSection>;
}
