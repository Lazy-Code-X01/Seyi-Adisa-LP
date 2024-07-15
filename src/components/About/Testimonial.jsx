import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { Avatar } from "@mui/material";

import tinuImg from '../../Assets/tinu.jpg'

const testimonials = [
			{
		text: "Attending the 7-Eleven Foundation was a game-changer for my entrepreneurial journey. The comprehensive program equipped me with essential skills in different areas that are pivotal to the growth of my business, the well-structured lectures in classes like marketing, branding, financial management, networking, customer service e.t.c ",
		author: "Tinu",
		profession: "Makeup Proffesional",
		image: tinuImg,
	},
	{
		text: "The community forums organized by Seyi Adisa's team have truly made a difference in our area. They provided a platform for us to voice our concerns and work together on solutions. The changes we've seen, from cleaner streets to more engaged citizens, are a direct result of these dialogues.",
		author: "Chinedu O.",
		profession: "Community Leader",
		image:
			"https://www.istockphoto.com/photo/smiling-african-american-man-wearing-glasses-gm1347495868-424977171",
	},
	{
		text: "Participating in the John Maxwell iLead program has been a transformative experience. I've learned so much about leadership and the importance of having an entrepreneurial spirit. I feel more prepared and motivated to pursue my dreams and make a positive impact.",
		author: "Amina M.",
		profession: "Student",
		image:
			"https://www.istockphoto.com/photo/smiling-african-american-man-wearing-glasses-gm1347495868-424977171",
	},
	{
		text: "The support from the 7Eleven Foundation was a game-changer for my business. The training and mentorship provided me with the skills and confidence to navigate the challenges of the startup phase. Today, my business is thriving, and I am proud to be employing others in my community.",
		author: "Oluwaseun A.",
		profession: "Entrepreneur",
		image:
			"https://www.istockphoto.com/photo/smiling-african-american-man-wearing-glasses-gm1347495868-424977171",
	},
	{
		text: "AGID’s programs are exceptional in their depth and impact. The young leaders trained through AGID are well-equipped to drive change and promote good governance. This initiative is building a brighter future for our continent.",
		author: "Dr. Kemi A.",
		profession: "Governance Expert",
		image:
			"https://www.istockphoto.com/photo/smiling-african-american-man-wearing-glasses-gm1347495868-424977171",
	},
		{
		text: "Ilead has helped me improve my reading abilities, helped me overcome my fears. Everybody should go througb this program.",
		author: "Taiwo Fiyinfoluwa.",
		profession: "Student",
		image:
			"https://www.istockphoto.com/photo/smiling-african-american-man-wearing-glasses-gm1347495868-424977171",
	},
		{
		text: "Ilead thought me that my future is in my handhand and that i can acheive anything if i choose it. I am a product of my choices.",
		author: "Abegunde",
		profession: "Student",
		image:
			"https://www.istockphoto.com/photo/smiling-african-american-man-wearing-glasses-gm1347495868-424977171",
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
