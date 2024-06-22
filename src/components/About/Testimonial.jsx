import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
	{
		text: "Seyi Adisa has been an inspiration and a guiding force in my professional journey. His dedication to leadership and governance is unparalleled.",
		author: "Maria Kate",
		profession: "Photographer",
		image:
			"https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		text: "Working with Seyi has been a transformative experience. His vision and commitment to community development are truly commendable.",
		author: "John Doe",
		profession: "Web Developer",
		image:
			"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D",
	},
	{
		text: "Seyi's approach to leadership is both innovative and effective. His work has had a significant impact on our community.",
		author: "Anna Deynah",
		profession: "Web Developer",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGV8ZW58MHx8MHx8fDA%3D",
	},
];

const Testimonial = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
	};

	return (
		<div className="testimonial-container">
			<h2>OUR EXPERIENCE WITH SEYI</h2>
			<Slider {...settings}>
				{testimonials.map((testimonial, index) => (
					<div key={index} className="testimonial-slide">
						<img
							src={testimonial.image}
							alt={testimonial.author}
							className="testimonial-image"
						/>
						<div className="testimonial-content">
							<h5 className="testimonial-author">{testimonial.author}</h5>
							<p className="testimonial-profession">{testimonial.profession}</p>
							<p className="testimonial-text">"{testimonial.text}"</p>
						</div>
						{/* <div className="testimonial-stars">
							<FaStar size="1em" />
							<FaStar size="1em" />
							<FaStar size="1em" />
							<FaStar size="1em" />
							<FaRegStar size="1em" />
						</div> */}
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Testimonial;
