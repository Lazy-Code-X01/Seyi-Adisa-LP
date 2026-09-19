import React from "react";
import "./page.css";

const Mission = () => {
	return (
		<section className="about-principles" aria-label="Philosophy and vision">
        <div className="about-page-inner about-principles__grid">
			<div className="about-principles__card">
				<p className="about-principles__label">Philosophy</p>
				<h2>
					Guiding Governance and Leadership Towards Sustainable Transformation
				</h2>
				<p
					className="about-principles__description"
				>
					Seyi holds a profound belief that governance is both a privilege and a
					sacred duty. He views his role in government as an opportunity to
					serve God by creating positive impacts for the benefit of the people.
					Seyi is convinced that the challenges faced by the populace are
					intrinsically the challenges of the leader. He emphasizes that a
					leader must leverage their resourcefulness to effectively manage
					limited resources, ensuring they are utilized for the greater good of
					the community.
				</p>
			</div>
			<div className="about-principles__card">
				<p className="about-principles__label">Vision</p>
				<h2>
					Pioneering New Horizons in Governance and Leadership
				</h2>
				<p
					className="about-principles__description"
				>
					Seyi advocates for active citizen participation in
					governance. He believes that meaningful progress can only be achieved
					when the people engage in the governance process, contributing their
					voices and efforts rather than relying solely on leadership. His
					vision is to foster a collaborative environment where leaders and
					citizens work together to address societal issues, driving sustainable
					development and inclusive growth across all  Africa.
				</p>
			</div>
        </div>
		</section>
	);
};

export default Mission;
