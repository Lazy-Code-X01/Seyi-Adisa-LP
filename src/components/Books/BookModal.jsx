import React, { useEffect, useState } from "react";
import "./bookModal.css";
import BookCover from "../../Assets/book-cover.jpg";

const STORAGE_KEY = "seenBookModal_v1";

const BookModal = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        // show modal on first visit
        setTimeout(() => setVisible(true), 300);
        localStorage.setItem(STORAGE_KEY, "true");
      }
    } catch (e) {
      // if localStorage is unavailable, just show modal
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleClose = () => setVisible(false);
  const handlePreOrder = () => {
    window.open("https://paystack.com/buy/leading-at-27-preorder", "_blank");
  };

  return (
    <div className="book-modal-overlay" role="dialog" aria-modal="true">
      <div className="book-modal-card">
        <button
          className="book-modal-close"
          aria-label="Close"
          onClick={handleClose}
        >
          ×
        </button>

        <div className="book-modal-inner">
          <div className="book-modal-image">
            <img src={BookCover} alt="Leading at 27 book cover" />
          </div>

          <div className="book-modal-content">
            <h2>Leading at 27</h2>
            <h3>How a Young Leader Can Change the World</h3>

            <p className="modal-by">By Seyi Adisa</p>

            <p className="modal-blurb">
              At twenty-seven, most people are still finding their feet. Seyi
              Adisa was already leading. Leading at 27 chronicles that
              defining journey and reveals how courage, clarity, and conviction
              can shape extraordinary influence even at a young age.
            </p>

            <div className="modal-ctas">
              <button className="pre-order-button" onClick={handlePreOrder}>
                Pre-order Now
              </button>
              <button className="modal-secondary" onClick={handleClose}>
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
