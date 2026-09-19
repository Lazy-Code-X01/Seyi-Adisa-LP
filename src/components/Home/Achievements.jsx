import React from "react";
import logos from "../../Assets/featured.png";
import "./featured.css";

// Display each mark from the original logo strip without stretching it.
const marks = [
  { label: "Featured organisation emblem", start: 0, width: 112 },
  { label: "ICSAN", start: 200, width: 170 },
  { label: "Oyo State Youth Awards", start: 420, width: 193 },
  { label: "MIPAD — Most Influential People of African Descent", start: 655, width: 184 },
];

const Achievements = () => (
  <section className="home-featured" aria-labelledby="featured-heading">
    <div className="home-featured__inner">
      <h2 id="featured-heading">As featured in</h2>
      <ul className="home-featured__logos" aria-label="Featured organisations and recognition">
        {marks.map(({ label, start, width }) => (
          <li className="home-featured__item" key={label}>
            <div className="home-featured__mark" style={{ aspectRatio: `${width} / 113`, width: `${width * 0.69}px` }}>
              <img
                src={logos}
                alt={label}
                style={{ width: `${840 / width * 100}%`, left: `${-start / width * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Achievements;
