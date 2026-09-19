import React from "react";
import "./page-hero.css";

export default function PageHero({ image, label, title, id }) {
  return <section className="page-banner" aria-labelledby={id}>
    <img src={image} alt="" fetchPriority="high" />
    <div className="page-banner__inner"><p>{label}</p><h1 id={id}>{title}</h1></div>
  </section>;
}
