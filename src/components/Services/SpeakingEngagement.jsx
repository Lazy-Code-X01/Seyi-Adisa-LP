import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import img from "../../Assets/RID_6114.jpg";
const SpeakingEngagement = () => {
	// i am usingthesame classnames with consulting.jsx since it is thesame layout
	return (
		<div className="consulting-container">
			<h1 className="title even_title"> SPEAKING ENGAGEMENT</h1>
			<div className="flex">
				<div className="image_container even_img_container">
					<img src={img} alt="image" />
				</div>
				<div className="content">
					<p className="descri">
						Seyi Adisa is a dynamic and inspiring speaker, known for his ability
						to engage audiences with his insights on leadership, governance, and
						personal development. His speaking engagements are crafted to
						deliver impactful messages that resonate with diverse audiences. Our
						speaking engagements cover:
					</p>
					<ul className="services-list">
						<li>
							<FaRegCircleCheck className="icon" />
							<p> Speaking Topics</p>

							{/* Seyi addresses a wide range of topics including leadership development, good governance practices, youth empowerment, and strategic planning. His talks are designed to inspire and provide practical insights that attendees can apply in their personal and professional lives. */}
						</li>
						<li>
							<FaRegCircleCheck className="icon" />
							<p> Past Speaking Engagements</p>
							{/* Seyi has spoken at numerous prestigious events, including international conferences, corporate seminars, and educational institutions. His engaging style and thought-provoking content have made him a sought-after speaker across various platforms. */}
						</li>
						<li>
							<FaRegCircleCheck className="icon" />
							<p> Booking Information </p>
							{/* Organizations and event planners can book Seyi for conferences, workshops, and seminars. His expertise and engaging delivery make him an ideal choice for keynote addresses, panel discussions, and motivational sessions. For booking inquiries, please visit our contact page or reach out via email. */}
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
			</div>
		</div>
	);
};

export default SpeakingEngagement;
