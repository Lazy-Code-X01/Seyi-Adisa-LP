import React from "react";
import { Link } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";
import "./page.css";

export default function ServiceSection({ id, title, image, imageAlt, children, topics, reverse = false }) {
  return <section className={`service-detail ${reverse ? "service-detail--reverse" : ""}`} aria-labelledby={id}>
    <div className="service-detail__inner">
      <div className="service-detail__photo"><img src={image} alt={imageAlt} loading="lazy" /></div>
      <div className="service-detail__copy">
        <h2 id={id}>{title}</h2>
        <p>{children}</p>
        <ul>{topics.map(topic => <li key={topic}><FaRegCircleCheck aria-hidden="true" /><span>{topic}</span></li>)}</ul>
        <Link className="service-detail__button" to="/contact">Book Seyi</Link>
      </div>
    </div>
  </section>;
}
