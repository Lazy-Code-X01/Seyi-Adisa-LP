import React from "react";
import "./styles.css";

const Hero = () => {
	return (
		<div className="about">
			<div className="about__hero">
				<div className="left__about">
					<p className="small">ABOUT</p>
					<h1 className="title">
						Seyi Adisa: A Journey of Visionary Leadership and Transformative
						Impact
					</h1>
				</div>
				<div className="right__about">
					<p className="description">
						Discover the inspiring journey of Seyi Adisa, a globally recognized
						leader in governance and development. Learn about his professional
						milestones, personal background, and the impactful initiatives he
						has spearheaded.
					</p>
				</div>
			</div>

			<div className="bg ">
				<div className="about-content">
					<p className="small">ABOUT</p>
					<h1 className="title">
						Seyi Adisa: A Journey of Visionary Leadership and Transformative
						Impact
					</h1>
				</div>
				<div className="bg-content none">
					<div className="accomplishment_container">
						<div className="single">
							<h1>12+</h1>
							<p>Books written</p>
						</div>
						<div className="single">
							<h1>18K+</h1>
							<p>Views on Finsweet</p>
						</div>
						<div className="single">
							<h1>30K+</h1>
							<p>Total active followers</p>
						</div>
					</div>
					<div className="bg-iner-content">
						<div className="blue-line"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
