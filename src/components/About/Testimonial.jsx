import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { Avatar } from "@mui/material";

const testimonials = [
	{
		text: "Through ilead i have been able to make a choice of facing my academics, having self-discipline and neglecting wayward lifestyle",
		author: "Fiditi grammar school",
		profession: "Student",
		// image:
		// 	"https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		text: "Ilead thought me that my future is in my handhand and that i can acheive anything if i choose it. I am a product of my choices.",
		author: "Abegunde",
		profession: "Student",
		// image:
		// 	"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D",
	},
	{
		text: "This program has helped me in setting my priorities right and making good plans for the future. It has made me understand the gift of choices and how i can make choices that will help my future ambitionambitions by setting my priorities right.   ",
		author: "Baptist school ilora",
		profession: "Student",
		// image:
		// 	"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGV8ZW58MHx8MHx8fDA%3D",
	},
	{
		text: "Ilead has helped me improve my reading abilities, helped me overcome my fears. Everybody should go througb this program.",
		author: "Taiwo Fiyinfoluwa.",
		profession: "Student",
		// image:
		// 	"https://images.unsplash.com/photo-1595347097560-69238724e7bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
		<div
			className="testimonial-container"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<h2>OUR EXPERIENCE WITH SEYI</h2>
			<Slider {...settings}>
				{testimonials.map((testimonial, index) => (
					<div key={index} className="testimonial-slide">
						<Avatar
							src={testimonial.image}
							alt={testimonial.author}
							sx={{
								width: 120,
								height: 120,
							}}
							className="testimonial-image"
						/>
						<div className="testimonial-content">
							<h5 className="testimonial-author">{testimonial.author}</h5>
							<p className="testimonial-profession">{testimonial.profession}</p>
							<p className="testimonial-text">"{testimonial.text}"</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Testimonial;
