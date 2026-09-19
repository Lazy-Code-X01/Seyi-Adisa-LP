import React from "react";
import img from "../../Assets/home-about-bg 1.png";
import "./about.css";
import { NavLink } from "react-router-dom";

const About = () => {
	return (
		<section className="home-introduction" aria-labelledby="meet-seyi-heading">
      <div className="home-introduction__inner">
			<div className="home-introduction__portrait">
				<img src={img} alt="Seyi Adisa" loading="lazy" />
			</div>

			<div className="home-introduction__copy">
				<h2 id="meet-seyi-heading">Meet Seyi</h2>
				<p>
					Seyi Adisa is a distinguished leader and passionate advocate for the
					development of individuals and communities across Africa. With a deep
					commitment to promoting good governance, Seyi has dedicated his career
					to building leaders and fostering active citizenship throughout the
					continent. His extensive experience in both the executive and
					legislative branches of government over the past 12 years equips him
					with a pragmatic approach to solving complex developmental challenges.
				</p>
				<p>
					As the founder of the African Governance Institute for Development
					(AGID), Seyi has established a pan-African organization that
					collaborates with top-tier academic institutions, including Nigeria's
					premier university, the University of Ibadan. Under his leadership,
					AGID has initiated numerous programs aimed at enhancing governance and
					leadership across Africa.
				</p>
				<p>
					During his tenure as a member of the Oyo State House of Assembly,
					representing the Afijio State Constituency from June 2019 to June
					2023, Seyi chaired the House Committee on Foreign Relations. He
					focused on addressing youth unemployment through legislative efforts,
					sponsoring bills such as the Enterprise and Employability Trust Fund
					Bill, and raising motions to upgrade technical colleges and create
					technology parks.
				</p>
				<NavLink to={"/about"} className="home-introduction__link">
					Know more
				</NavLink>
			</div>
      </div>
		</section>
	);
};

export default About;
