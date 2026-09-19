import React from "react";
import { openBookPreview } from "../components/Books/BookModal";
import BookCover from "../Assets/book-cover.jpg";
import { Newsletter, Footer } from "../components/Shared/Sections";
import "../components/Books/page.css";

const BuyLink = () => <a className="book-page__buy" href="https://paystack.com/buy/leading-at-27" target="_blank" rel="noopener noreferrer">Get the book</a>;

export default function Books() {
  return <>
    <section className="book-page" aria-labelledby="book-page-title">
      <div className="book-page__inner book-page__intro">
        <div className="book-page__cover"><img src={BookCover} alt="Leading at 27 by Seyi Adisa — book cover" fetchPriority="high" /></div>
        <div className="book-page__summary">
          <p className="book-page__label">BY SEYI ADISA</p>
          <h1 id="book-page-title">Leading at 27</h1>
          <p className="book-page__subtitle">How a Young Leader Can Change the World</p>
          <p>At twenty-seven, most people are still finding their feet. Seyi Adisa was already leading. From co-founding a thriving law firm to serving as Principal Private Secretary to a former Governor of Oyo State, Seyi stepped into leadership early, and learned firsthand that leadership is not a title; it’s a test.</p>
          <p>Leading at 27 chronicles that defining journey, revealing how courage, clarity, and conviction can shape extraordinary influence even at a young age.</p>
          <div className="book-page__actions"><BuyLink /><button className="book-page__preview" onClick={openBookPreview}>Book preview</button></div>
          <span className="book-page__purchase-note">Continue to Paystack to purchase.</span>
        </div>
      </div>
    </section>
    <section className="book-page book-page--details" aria-labelledby="book-details-title"><div className="book-page__inner book-page__details">
      <div><div className="home-updates__heading"><h2 id="book-details-title">About the Book</h2></div>
        <p>In this compelling and deeply practical book, Seyi shares the pivotal lessons that shaped his evolution, from boardrooms to the corridors of government, and the principles that helped him lead with integrity, navigate politics with wisdom, and inspire others toward purpose-driven impact.</p>
        <p>Whether you’re a young professional, entrepreneur, or emerging public servant, Leading at 27 is a wake-up call to stop waiting for the perfect moment to lead, and start shaping the future from wherever you stand.</p>
      </div>
      <div className="book-page__lessons"><h3>What you’ll discover</h3><ul>
        <li>Find clarity of purpose even in uncertain systems.</li>
        <li>Lead with values in spaces often shaped by politics and pressure.</li>
        <li>Transform ideas into impact through discipline, strategy, and emotional intelligence.</li>
        <li>Build credibility early and influence meaningfully, without waiting for age or titles.</li>
      </ul></div>
    </div></section>
    <section className="book-page" aria-label="Key themes"><div className="book-page__inner">
      <div className="book-page__themes">{[
        ["Character", "Build a strong foundation of leadership integrity"],
        ["Influence", "Learn to inspire and motivate others effectively"],
        ["Purpose", "Discover your mission and create lasting impact"],
      ].map(([title, text]) => <div key={title}><h2>{title}</h2><p>{text}</p></div>)}</div>
    </div></section>
    <Newsletter />
    <Footer />
  </>;
}
