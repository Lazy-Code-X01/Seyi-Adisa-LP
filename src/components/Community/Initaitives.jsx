import React from "react";
import "./styles.css";
import img from "../../Assets/RID_6114.jpg";

import agidLogo from "../../Assets/agid.png";
import elevenLogo from "../../Assets/7 eleven.png";
import sadiLogo from "../../Assets/sadi logo.png";
import { Link, useNavigate } from "react-router-dom";
const Initaitives = () => {
	const navigate = useNavigate()

	 const visitSevenEleven = () => {
    window.open('https://web.facebook.com/711foundation/?_rdc=1&_rdr', '_blank');
  };
	const visitAgid = () =>{
		window.open('https://africangovernance.org/', '_blank')
	}
	const visitSadi = () =>{
		window.open('https://sadinigeria.org/', '_blank')
	}
	return (
		<>
			<div className="initiatives_container">
				<div className="initiatives_container_img">
					<img src={sadiLogo} alt="image loading .." />
				</div>
				<div
					className="initiatives_container_text"
					data-aos="fade-left"
					data-aos-duration="1000"
				>
					<h1 className="title">Seyi Adisa Development Initiative (SADI)</h1>
					<p className="description">
						Providing initiatives to develop women and youth in education,
						healthcare, infrastructure, and empowerment through sports, ICT, and
						technical and vocational skill acquisition programs.
					</p>
					<button className="visit-button" onClick={visitSadi}>Visit SADI</button>
				</div>
			</div>

			<div className="initiatives_container agid-flex">
				<div
					className="initiatives_container_text"
					data-aos="fade-right"
					data-aos-duration="1000"
				>
					<h1 className="title">
						African Governance Institute for Development (AGID)
					</h1>
					<p className="description">
						Creating an ecosystem of governance initiatives from primary school
						to tertiary institutions, including local organizations, grassroots
						groups, and online platforms to foster a knowledge economy of good
						governance.
					</p>
					<button className="visit-button" onClick={visitAgid}>Visit AGID</button>
				</div>
				<div className="initiatives_container_img">
					<img src={agidLogo} alt="image loading .." />
				</div>
			</div>
			<div className="initiatives_container">
				<div className="initiatives_container_img">
					<img src={elevenLogo} alt="image loading .." />
				</div>
				<div
					className="initiatives_container_text"
					data-aos="fade-left"
					data-aos-duration="1000"
				>
					<h1 className="title">7Eleven Foundation</h1>
					<p className="description">
						Supporting young entrepreneurs in building sustainable businesses by
						equipping them with knowledge, skills, and grants during the early
						phases of their ventures.
					</p>
					<button className="visit-button" onClick={visitSevenEleven}>Visit 7Eleven</button>
				</div>
			</div>
		</>
	);
};

export default Initaitives;
