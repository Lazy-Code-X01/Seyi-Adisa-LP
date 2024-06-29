import React from "react";
import img from "../../Assets/home-about-bg 1.png";
import "./styles.css";
import { NavLink } from "react-router-dom";

const About = () => {
	return (
		<div className="home-about">
			<div className="img-container">
				<img src={img} alt="" />
			</div>

			<div className="content">
				<h1>meet seyi</h1>
				<p data-aos="fade-up" data-aos-duration="1000">
					Seyi Adisa is a distinguished leader and passionate advocate for the
					development of individuals and communities across Africa. With a deep
					commitment to promoting good governance, Seyi has dedicated his career
					to building leaders and fostering active citizenship throughout the
					continent. His extensive experience in both the executive and
					legislative branches of government over the past 12 years equips him
					with a pragmatic approach to solving complex developmental challenges.
				</p>
				<p data-aos="fade-up" data-aos-duration="1000">
					As the founder of the African Governance Institute for Development
					(AGID), Seyi has established a pan-African organization that
					collaborates with top-tier academic institutions, including Nigeria's
					premier university, the University of Ibadan. Under his leadership,
					AGID has initiated numerous programs aimed at enhancing governance and
					leadership across Africa.
				</p>
				<p data-aos="fade-up" data-aos-duration="1000">
					During his tenure as a member of the Oyo State House of Assembly,
					representing the Afijio State Constituency from June 2019 to June
					2023, Seyi chaired the House Committee on Foreign Relations. He
					focused on addressing youth unemployment through legislative efforts,
					sponsoring bills such as the Enterprise and Employability Trust Fund
					Bill, and raising motions to upgrade technical colleges and create
					technology parks....
				</p>
				<NavLink to={"/about"} className={"know-more"}>
					Know more
				</NavLink>
			</div>
		</div>
	);
};

export default About;
