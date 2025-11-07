import "../components/Books/styles.css";
import BookCover from "../Assets/book-cover.jpg";

const Books = () => {
  const handlePreOrder = () => {
    window.open("https://bit.ly/preorder-leading-at-27-by-SA", "_blank");
  };

  return (
    <div className="books-container">
      <div className="book-image">
        <img src={BookCover} alt="Leading at 27 Book Cover" />
      </div>
      <div className="book-content">
        <h1 className="book-title">Leading at 27</h1>
        <h2 className="book-subtitle">
          How Young Leaders Can Change the World
        </h2>
        <p className="book-description">
          Discover powerful lessons in character, influence, and purpose from a
          young leader who's making waves in the business world. This compelling
          book offers practical insights and strategies for emerging leaders who
          want to make a significant impact, regardless of their age.
        </p>
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
