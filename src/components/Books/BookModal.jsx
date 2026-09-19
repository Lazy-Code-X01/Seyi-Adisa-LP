import React, { useEffect, useRef, useState } from "react";
import "./bookModal.css";
import BookCover from "../../Assets/book-cover.jpg";

const STORAGE_KEY = "seenBookModal_v1";
const PREVIEW_EVENT = "seyi:book-preview";
export const openBookPreview = () => window.dispatchEvent(new Event(PREVIEW_EVENT));

export default function BookModal() {
  const [visible, setVisible] = useState(false);
  const dialog = useRef(null);
  useEffect(() => {
    const open = () => setVisible(true);
    window.addEventListener(PREVIEW_EVENT, open);
    let timer;
    try {
      if (!localStorage.getItem(STORAGE_KEY)) timer = setTimeout(open, 300);
    } catch { timer = setTimeout(open, 300); }
    return () => { clearTimeout(timer); window.removeEventListener(PREVIEW_EVENT, open); };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const element = dialog.current;
    element.showModal();
    const keepFocusInside = event => {
      if (event.key !== "Tab") return;
      const controls = element.querySelectorAll('button:not(:disabled), a[href]');
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    };
    element.addEventListener("keydown", keepFocusInside);
    document.body.style.overflow = "hidden";
    try { localStorage.setItem(STORAGE_KEY, "true"); } catch { /* Storage may be unavailable. */ }
    return () => {
      element.removeEventListener("keydown", keepFocusInside);
      element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [visible]);

  const close = () => setVisible(false);
  if (!visible) return null;
  return <dialog className="book-preview" ref={dialog} aria-labelledby="book-preview-title" onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === event.currentTarget) close(); }}>
    <div className="book-preview__panel">
      <button className="book-preview__close" aria-label="Close book preview" onClick={close} autoFocus>×</button>
      <div className="book-preview__cover"><img src={BookCover} alt="Leading at 27 by Seyi Adisa book cover" /></div>
      <div className="book-preview__content">
        <p className="book-preview__by">BY SEYI ADISA</p>
        <h2 id="book-preview-title">Leading at 27</h2>
        <p className="book-preview__subtitle">How a Young Leader Can Change the World</p>
        <p className="book-preview__blurb">At twenty-seven Seyi Adisa was already leading. Discover the lessons in courage, clarity, and conviction that helped him lead with integrity and create meaningful impact.</p>
        <div className="book-preview__actions"><a href="https://paystack.com/buy/leading-at-27" target="_blank" rel="noopener noreferrer">Get the book</a><button onClick={close}>Maybe later</button></div>
        <p className="book-preview__note">Purchase securely on Paystack.</p>
      </div>
    </div>
  </dialog>;
}
