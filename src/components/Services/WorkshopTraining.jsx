import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import img from "../../Assets/RID_6114.jpg";

const WorkshopTraining = () => {
	return (
		<div className="consulting-container">
			<h1 className="title"> WORKSHOPS AND TRAINING </h1>
			<div className="flex">
				<div className="content">
					<p className="descri">
						Seyi Adisa's workshops and training programs are designed to equip
						individuals and organizations with the skills and knowledge needed
						to excel in their respective fields. Our offerings are interactive,
						practical, and tailored to meet the specific needs of our
						participants. Our workshops and training programs include:
					</p>
					<ul className="services-list">
						<li>
							<FaRegCircleCheck className="icon" />
							<p> Workshops</p>

							{/*  We offer a variety of workshops covering topics such as leadership development, strategic planning, governance best practices, and youth empowerment. Each workshop is designed to provide hands-on learning experiences that foster practical skills and knowledge. */}
						</li>
						{/* <li> */}
						{/* <FaRegCircleCheck className="icon" /> */}
						{/* <p> Webinars</p> */}
						{/* Our webinars provide accessible learning opportunities for participants from around the world. These online sessions cover timely and relevant topics, offering insights and strategies that can be immediately applied. */}
						{/* </li> */}
						<li>
							<FaRegCircleCheck className="icon" />
							<p> Training Programs </p>
							{/* We conduct comprehensive training programs for organizations and individuals, focusing on areas such as leadership, governance, and personal development. Our training programs are designed to build competencies and drive measurable results. */}
						</li>
						<li>
							<FaRegCircleCheck className="icon" />
							<p> Schedules and Registration </p>
							{/* Detailed information on upcoming workshops, webinars, and training programs is available on our website. Participants can view schedules, learn about program content, and register online. For any inquiries, please contact us directly. */}
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

export default WorkshopTraining;
