import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const testimonials = [
	{
		text: "The community forums organized by Seyi Adisa's team have truly made a difference in our area. They provided a platform for us to voice our concerns and work together on solutions. The changes we've seen, from cleaner streets to more engaged citizens, are a direct result of these dialogues.",
		author: "Chinedu O.",
		profession: "Community Leader",
		image:
			"https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		text: "Participating in the John Maxwell iLead program has been a transformative experience. I've learned so much about leadership and the importance of having an entrepreneurial spirit. I feel more prepared and motivated to pursue my dreams and make a positive impact.",
		author: "Amina M.",
		profession: "Student",
		image:
			"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D",
	},
	{
		text: "The support from the 7Eleven Foundation was a game-changer for my business. The training and mentorship provided me with the skills and confidence to navigate the challenges of the startup phase. Today, my business is thriving, and I am proud to be employing others in my community.",
		author: "Oluwaseun A.",
		profession: "Entrepreneur",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGV8ZW58MHx8MHx8fDA%3D",
	},
	{
		text: "AGID’s programs are exceptional in their depth and impact. The young leaders trained through AGID are well-equipped to drive change and promote good governance. This initiative is building a brighter future for our continent.",
		author: "Dr. Kemi A.",
		profession: "Governance Expert",
		image:
			"https://images.unsplash.com/photo-1595347097560-69238724e7bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Testimonial;
