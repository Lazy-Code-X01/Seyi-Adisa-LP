import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaUtensils, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";
import axios from "axios";
import { testimonials } from "../About/Testimonial";
import logo from "../../Assets/logo.png";
import "./closing.css";
import "../Home/updates.css";

const socials = [
  ["Facebook", "https://web.facebook.com/officialseyiadisa/", FaFacebook],
  ["Instagram", "https://www.instagram.com/seyiadisa_/", FaInstagram],
  ["X / Twitter", "https://x.com/sjadisa", FaTwitter],
  ["LinkedIn", "https://www.linkedin.com/in/seyiadisa/", FaLinkedin],
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  return <section className="home-voices home-closing-section" aria-labelledby="voices-title">
    <div className="home-closing-inner">
      <div className="home-updates__heading"><h2 id="voices-title">Our Experience with Seyi</h2></div>
      <div className="home-voices__card" aria-live="polite" aria-atomic="true">
        <span className="home-voices__quote" aria-hidden="true">“</span>
        <blockquote>{item.text}</blockquote>
        <div className="home-voices__person">
          {index === 0 ? <img src={item.image} alt="" loading="lazy" /> : <span className="home-voices__initial" aria-hidden="true">{item.author.charAt(0)}</span>}
          <div><h3>{item.author}</h3><p>{item.profession.replace("Proffesional", "Professional")}</p></div>
        </div>
      </div>
      <div className="home-voices__controls">
        <button onClick={() => setIndex((index + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial">←</button>
        <span>{index + 1} / {testimonials.length}</span>
        <button onClick={() => setIndex((index + 1) % testimonials.length)} aria-label="Next testimonial">→</button>
      </div>
    </div>
  </section>;
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function submit(event) {
    event.preventDefault();
    setBusy(true); setMessage("");
    try {
      await axios.post("https://seyi-adisa-backend.onrender.com/api/subscriber", { email }, { timeout: 20000 });
      setMessage("Thank you for subscribing. You’re on the list!"); setEmail("");
    } catch { setMessage("We couldn’t subscribe you. Please try again."); }
    finally { setBusy(false); }
  }
  return <section className="home-signup home-closing-section" aria-labelledby="signup-title">
    <div className="home-closing-inner home-signup__inner">
      <div><h2 id="signup-title">Stay Connected</h2><p>Sign up to receive regular insights and updates.</p></div>
      <form onSubmit={submit}>
        <label htmlFor="home-signup-email">Your email address</label>
        <div className="home-signup__fields"><input id="home-signup-email" type="email" autoComplete="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required /><button disabled={busy}>{busy ? "Subscribing…" : "Subscribe"}</button></div>
        <p role="status">{message}</p>
      </form>
    </div>
  </section>;
}

export function SocialLinks() {
  return <section className="home-social" aria-labelledby="social-title"><div className="home-closing-inner home-social__inner">
    <h2 id="social-title">Follow the conversation</h2>
    <div>{socials.map(([name, url, Icon]) => <a key={name} href={url} target="_blank" rel="noopener noreferrer"><Icon aria-hidden="true" /><span>{name}</span></a>)}</div>
  </div></section>;
}

export function Events() {
  const { hash } = useLocation();
  useEffect(() => { if (hash === "#lunch-learn") document.getElementById("lunch-learn")?.scrollIntoView({ behavior: "instant", block: "start" }); }, [hash]);
  const events = [["Lunch & Learn", FaUtensils, "lunch-learn"], ["Governance Workshop", FaChalkboardTeacher, "governance-workshop"], ["Change Your World", FaGlobe, "change-your-world"]];
  return <section className="home-events home-closing-section" aria-labelledby="events-title"><div className="home-closing-inner">
    <div className="home-updates__heading"><h2 id="events-title">Join Our Upcoming Events</h2></div>
    <p className="home-events__intro">Stay informed and engaged with events designed for your growth. Get in touch for the latest dates and availability.</p>
    <div className="home-events__grid">{events.map(([name, Icon, id]) => <article id={id} key={id}>
      <span className="home-events__icon"><Icon aria-hidden="true" /></span>
      <h3>{name}</h3><p>Ask about the next date</p>
      {id === "lunch-learn" ? <a href="https://forms.gle/WBTh1ZvuSKo6qQFe9" target="_blank" rel="noopener noreferrer">Registration details</a> : <Link to="/contact">Enquire about this event</Link>}
    </article>)}</div>
  </div></section>;
}

export function Footer() {
  return <footer className="home-footer"><div className="home-closing-inner">
    <div className="home-footer__top"><div><Link to="/" aria-label="Seyi Adisa home"><img src={logo} alt="Seyi Adisa" /></Link><p>Hon. Seyi Adisa</p></div>
      <nav aria-label="Footer navigation">{[["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/resources", "Resources"], ["/community", "Community"], ["/books", "Books"], ["/contact", "Contact"]].map(([url, label]) => <Link to={url} key={url}>{label}</Link>)}</nav>
      <div className="home-footer__contact"><h2>Get in touch</h2><a href="mailto:hello@seyiadisa.com">hello@seyiadisa.com</a><a href="tel:+2348132412749">+234 8132 412 749</a></div>
    </div>
    <div className="home-footer__bottom"><p>© {new Date().getFullYear()} Seyi Adisa. All rights reserved.</p><a href="#top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }}>Back to top</a></div>
  </div></footer>;
}

export default function ClosingSections() {
  return <><Testimonials /><Newsletter /><SocialLinks /><Events /><Footer /></>;
}
