import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

import bio1 from "../../Assets/bio1.webp";

const Biography = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const contentRef = useRef(null);
	const topRef = useRef(null);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	useEffect(() => {
		if (isExpanded && contentRef.current) {
			contentRef.current.scrollIntoView({ behavior: "smooth" });
		} else if (!isExpanded && topRef.current) {
			topRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [isExpanded]);

	return (
		<>
			<div className="biography-background">
				<section className="biography_container">
					<img src={bio1} alt="Early Career" className="bio-image" />
					<div className={`content ${isExpanded ? "expanded" : ""}`}>
						<div className="title">
							Meet Seyi Adisa: A Beacon of Leadership and Governance
						</div>
						<p className="description">
							Seyi Adisa is a distinguished leader and passionate advocate for
							the development of individuals and communities across Africa. With
							a deep commitment to promoting good governance, Seyi has dedicated
							his career to building leaders and fostering active citizenship
							throughout the continent. His extensive experience in both the
							executive and legislative branches of government over the past 12
							years equips him with a pragmatic approach to solving complex
							developmental challenges.
						</p>
						<p className="description">
							As the founder of the African Governance Institute for Development
							(AGID), Seyi has established a pan-African organization that
							collaborates with top-tier academic institutions, including
							Nigeria's premier university, the University of Ibadan. Under his
							leadership, AGID has initiated numerous programs aimed at
							enhancing governance and leadership across Africa.
						</p>
						<p className="description">
							During his tenure as a member of the Oyo State House of Assembly,
							representing the Afijio State Constituency from June 2019 to June
							2023, Seyi chaired the House Committee on Foreign Relations. He
							focused on addressing youth unemployment through legislative
							efforts, sponsoring bills such as the Enterprise and Employability
							Trust Fund Bill, and raising motions to upgrade technical colleges
							and create technology parks. His initiatives, including the
							Technical & Vocational Education Training (TVET) program and the
							IITA Agribusiness program, empowered over 1,000 youth.
							Additionally, he introduced the John Maxwell iLead leadership
							development program to 17 public secondary schools in his
							constituency, impacting more than 3,500 students.
						</p>
						{isExpanded && (
							<>
								<p className="description">
									In his previous role as Principal Private Secretary to the
									Executive Governor of Oyo State from October 2011 to January
									2019, Seyi managed the Governor’s programs and appointments,
									ensuring the smooth operation of the Governor’s office. He
									played a crucial role in policy formulation and advising on
									governance matters, demonstrating his ability to navigate
									complex political environments.
								</p>
								<p className="description">
									Beyond his governmental roles, Seyi has founded several
									developmental initiatives. The Seyi Adisa Development
									Initiative (SADI) focuses on providing opportunities for youth
									in marginalized communities through education, healthcare,
									infrastructure, sports and digital and vocational skills
									training. The 7:11 Empowerment Foundation (7ELEVEN) supports
									entrepreneurs in building sustainable businesses, addressing
									unemployment issues across Africa.
								</p>
								<p className="description">
									Seyi’s educational background includes a Master’s in Public
									Administration, qualifications from the Institute of Chartered
									Secretaries and Administrators of Nigeria where he is now a
									fellow, and advanced studies at Harvard University. He is also
									an alumnus of the Daystar Leadership Academy, Nigeria Law
									School, BPP Law School, and the University of Birmingham.
								</p>
								<p className="description">
									Recognized for his contributions to governance and leadership,
									Seyi was selected as an Archbishop Desmond Tutu Leadership
									Fellow in 2023, a prestigious program involving leadership
									training at Oxford University and Mont Fleur, Cape Town. He
									was conferred the Justice of the Peace award by the Governor
									of Oyo State in 2022 and named among the top 100 most
									influential people of African descent under 40 in the Politics
									& Governance category by the UN-affiliated MIPAD in 2020.
								</p>
								<p className="description">
									Seyi is an active member of several professional
									organizations, including the International Bar Association,
									the Nigeria Bar Association, and the John Maxwell Leadership
									Team. Fluent in English, Yoruba, and Pidgin, he enjoys
									traveling, coaching soccer, and music in his spare time.
								</p>
								<p className="description last">
									Through his visionary leadership and dedication to empowering
									others, Seyi Adisa continues to make significant strides in
									advancing governance and leadership across Africa.
								</p>
							</>
						)}
					</div>
					<button onClick={toggleExpand} className="read-more-btn">
						{isExpanded ? "Read Less" : "Read More"}
					</button>
				</section>
			</div>
		</>
	);
};

export default Biography;
