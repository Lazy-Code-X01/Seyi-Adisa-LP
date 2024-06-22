import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import img from "../../Assets/RID_6114.jpg";

const Consulting = () => {
	return (
		<div className="consulting-container">
			<h1 className="title"> CONSULTING SERVICES </h1>
			<div className="flex">
				<div className="content">
					<p className="descri">
						At the heart of Seyi Adisa's mission is a commitment to driving
						impactful change through expert consulting services. Our offerings
						are designed to support organizations in navigating complex
						challenges and achieving sustainable growth. Our consulting services
						include:
					</p>
					<ul className="services-list">
						<li>
							<FaRegCircleCheck className="icon" />
							<p> Governance Audits</p>

							{/* We conduct thorough assessments of governance
							structures to identify areas of improvement and ensure compliance
							with best practices. Our audits help organizations enhance their
							operational efficiency, accountability, and transparency. */}
						</li>
						<li>
							<FaRegCircleCheck className="icon" />
							<p> Leadership Training</p>
							{/* Our tailored leadership training programs are
							crafted to develop the skills and competencies necessary for
							effective leadership. We focus on nurturing visionary leaders who
							can inspire and drive their teams towards achieving organizational
							goals. */}
						</li>
						<li>
							<FaRegCircleCheck className="icon" />
							<p> Strategic Planning </p>
							{/* We work closely with organizations to develop
							strategic plans that align with their vision and goals. Our
							strategic planning services help organizations set clear
							objectives, define actionable steps, and implement strategies that
							lead to long-term success. */}
						</li>
					</ul>
					{/* <p>
						Through these services, we empower organizations to build robust
						governance frameworks, foster dynamic leadership, and create
						strategic roadmaps that drive growth and innovation.
					</p> */}
					<div className="book-seyi-container">
						<button className="book-button">Book Seyi</button>
						<a href="#">Know more</a>
					</div>
				</div>
				<div className="image_container">
					<img src={img} alt="image" />
				</div>
			</div>
		</div>
	);
};

export default Consulting;
