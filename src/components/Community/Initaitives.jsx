import React from "react";
import agid from "../../Assets/agid.png";
import eleven from "../../Assets/7 eleven.png";
import sadi from "../../Assets/sadi logo.png";
import "./page.css";

const initiatives = [
  { name: "Seyi Adisa Development Initiative (SADI)", label: "Visit SADI", image: sadi, url: "https://sadinigeria.org/", text: "Providing initiatives to develop women and youth in education, healthcare, infrastructure, and empowerment through sports, ICT, and technical and vocational skill acquisition programs." },
  { name: "African Governance Institute for Development (AGID)", label: "Visit AGID", image: agid, url: "https://africangovernance.org/", text: "Creating an ecosystem of governance initiatives from primary school to tertiary institutions, including local organizations, grassroots groups, and online platforms to foster a knowledge economy of good governance." },
  { name: "7Eleven Foundation", label: "Visit 7Eleven", image: eleven, url: "https://web.facebook.com/711foundation/?_rdc=1&_rdr", text: "Supporting young entrepreneurs in building sustainable businesses by equipping them with knowledge, skills, and grants during the early phases of their ventures." },
];

export default function Initaitives() {
  return <section className="community-initiatives" aria-labelledby="initiatives-title"><div className="community-page-inner">
    <div className="home-updates__heading"><h2 id="initiatives-title">Our Initiatives</h2></div>
    <div className="community-initiatives__grid">{initiatives.map(item => <article key={item.name}>
      <div className="community-initiatives__logo"><img src={item.image} alt={item.name} loading="lazy" /></div>
      <div className="community-initiatives__body"><h3>{item.name}</h3><p>{item.text}</p><a className="community-button" href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a></div>
    </article>)}</div>
  </div></section>;
}
