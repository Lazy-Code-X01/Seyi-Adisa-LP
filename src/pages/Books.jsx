import "../components/Books/styles.css";
import BookCover from "../Assets/book-cover.jpg";

const Books = () => {
  const handlePreOrder = () => {
    window.open("https://paystack.com/buy/leading-at-27-preorder", "_blank");
  };

  return (
    <div className="books-container">
      <div className="book-image">
        <img src={BookCover} alt="Leading at 27 Book Cover" />
      </div>
      <div className="book-content">
        <h1 className="book-title">Leading at 27</h1>
        <h2 className="book-subtitle">
          How a Young Leader Can Change the World
        </h2>

        <div className="book-description">
          <p className="by-line">
            <strong>By Seyi Adisa</strong>
          </p>

          <p>
            At twenty-seven, most people are still finding their feet. Seyi
            Adisa was already leading. From co-founding a thriving law firm to
            serving as Principal Private Secretary to a former Governor of Oyo
            State, Seyi stepped into leadership early, and learned firsthand
            that leadership is not a title; it’s a test. Leading at 27
            chronicles that defining journey, revealing how courage, clarity,
            and conviction can shape extraordinary influence even at a young
            age.
          </p>

          <p>
            In this compelling and deeply practical book, Seyi shares the
            pivotal lessons that shaped his evolution, from boardrooms to the
            corridors of government, and the principles that helped him lead
            with integrity, navigate politics with wisdom, and inspire others
            toward purpose-driven impact.
          </p>

          <ul>
            <li>Find clarity of purpose even in uncertain systems.</li>
            <li>
              Lead with values in spaces often shaped by politics and pressure.
            </li>
            <li>
              Transform ideas into impact through discipline, strategy, and
              emotional intelligence.
            </li>
            <li>
              Build credibility early and influence meaningfully, without
              waiting for age or titles.
            </li>
          </ul>

          <p>
            Whether you’re a young professional, entrepreneur, or emerging
            public servant, Leading at 27 is a wake-up call to stop waiting for
            the perfect moment to lead, and start shaping the future from
            wherever you stand.
          </p>
        </div>

        <div className="book-features">
          <div className="feature">
            <span className="feature-title">Character</span>
            <span className="feature-text">
              Build a strong foundation of leadership integrity
            </span>
          </div>
          <div className="feature">
            <span className="feature-title">Influence</span>
            <span className="feature-text">
              Learn to inspire and motivate others effectively
            </span>
          </div>
          <div className="feature">
            <span className="feature-title">Purpose</span>
            <span className="feature-text">
              Discover your mission and create lasting impact
            </span>
          </div>
        </div>

        <button className="pre-order-button" onClick={handlePreOrder}>
          Pre-order Now
        </button>
      </div>
    </div>
  );
};

export default Books;
