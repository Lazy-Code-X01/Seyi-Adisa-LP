import React from "react";
import "./styles.css";
import img1 from "../../Assets/Logo_1.png";
import img2 from "../../Assets/Logo 2.png";
import img3 from "../../Assets/Logo 3.png";
import img4 from "../../Assets/Logo 4.png";
import img5 from "../../Assets/Logo 5.png";

import img from "../../Assets/featureddesktop-min.png";

const Achievements = () => {
	return (
		<div className="achievements-container">
			<div className="achievements-content">
				<h5>As Featured in</h5>
				<div
					className="achievement-img-container"
					data-aos="fade-up-right"
					data-aos-duration="1000"
				>
					<img className="achievement-img" src={img} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Achievements;
