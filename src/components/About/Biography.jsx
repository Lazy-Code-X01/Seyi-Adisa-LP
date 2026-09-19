import React, { useState } from "react";
import image from "../../Assets/bio1.webp";
import "./page.css";

const paragraphs = [
  "Seyi Adisa is a distinguished leader and passionate advocate for the development of individuals and communities across Africa. With a deep commitment to promoting good governance, Seyi has dedicated his career to building leaders and fostering active citizenship throughout the continent. His extensive experience in both the executive and legislative branches of government over the past 12 years equips him with a pragmatic approach to solving complex developmental challenges.",
  "As the founder of the African Governance Institute for Development (AGID), Seyi has established a pan-African organization that collaborates with top-tier academic institutions, including Nigeria's premier university, the University of Ibadan. Under his leadership, AGID has initiated numerous programs aimed at enhancing governance and leadership across Africa.",
  "During his tenure as a member of the Oyo State House of Assembly, representing the Afijio State Constituency from June 2019 to June 2023, Seyi chaired the House Committee on Foreign Relations. He focused on addressing youth unemployment through legislative efforts, sponsoring bills such as the Enterprise and Employability Trust Fund Bill, and raising motions to upgrade technical colleges and create technology parks. His initiatives, including the Technical & Vocational Education Training (TVET) program and the IITA Agribusiness program, empowered over 1,000 youth. Additionally, he introduced the John Maxwell iLead leadership development program to 17 public secondary schools in his constituency, impacting more than 3,500 students.",
  "In his previous role as Principal Private Secretary to the Executive Governor of Oyo State from October 2011 to January 2019, Seyi managed the Governor’s programs and appointments, ensuring the smooth operation of the Governor’s office. He played a crucial role in policy formulation and advising on governance matters, demonstrating his ability to navigate complex political environments.",
  "Currently, Seyi serves as a Partner in Tunde & Adisa Legal Practitioners (T&A Legal), where he leads the Public Policy and Regulatory Department. In this role, he advises governments, multinationals, and private companies on government processes, public policy, and regulatory matters.",
  "Beyond his governmental roles, Seyi has founded several developmental initiatives. The Seyi Adisa Development Initiative (SADI) focuses on providing opportunities for youth in marginalized communities through education, healthcare, infrastructure, sports, and digital and vocational skills training. The 7:11 Empowerment Foundation (7ELEVEN) supports entrepreneurs in building sustainable businesses, addressing unemployment issues across Africa.",
  "Seyi’s educational background includes a Master’s in Public Administration, qualifications from the Institute of Chartered Secretaries and Administrators of Nigeria where he is now a fellow, and advanced studies at Harvard University. He is also an alumnus of the Daystar Leadership Academy, Nigeria Law School, BPP Law School, and the University of Birmingham.",
  "Recognized for his contributions to governance and leadership, Seyi was selected as an Archbishop Desmond Tutu Leadership Fellow in 2023, a prestigious program involving leadership training at Oxford University and Mont Fleur, Cape Town. He was conferred the Justice of the Peace award by the Governor of Oyo State in 2022 and named among the top 100 most influential people of African descent under 40 in the Politics & Governance category by the UN-affiliated MIPAD in 2020. Additionally, he was nominated in August 2022 as the Most Influential Young Person in Oyo State under the Governance category by the Oyo State Youth Awards.",
  "Seyi is an active member of several professional organizations, including the International Bar Association, the Nigeria Bar Association, and the John Maxwell Leadership Team. Fluent in English, Yoruba, and Pidgin, he enjoys traveling, coaching soccer, and music in his spare time.",
  "Through his visionary leadership and dedication to empowering others, Seyi Adisa continues to make significant strides in advancing governance and leadership across Africa."
];

const Biography = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="about-biography" aria-labelledby="biography-title">
      <div className="about-page-inner about-biography__grid">
        <div className="about-biography__photo"><img src={image} alt="Seyi Adisa in conversation with young people" loading="lazy" /></div>
        <div className="about-biography__copy">
          <h2 id="biography-title">Meet Seyi Adisa: A Beacon of Leadership and Governance</h2>
          {paragraphs.slice(0, 3).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <div id="biography-more" hidden={!expanded}>
            {paragraphs.slice(3).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <button aria-expanded={expanded} aria-controls="biography-more" onClick={() => setExpanded(!expanded)}>{expanded ? "Read Less" : "Read More"}</button>
        </div>
      </div>
    </section>
  );
};
export default Biography;
