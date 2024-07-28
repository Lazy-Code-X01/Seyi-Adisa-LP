import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://seyi-adisa-backend.onrender.com/api/subscriber", { email });
      toast.success(response.data.message);
	  setEmail('')
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter_container" data-aos="zoom-in" data-aos-duration="1000">
      <h3 className="title">Stay Connected</h3>
      <p className="newsletter-text">Sign up to receive regular insights and updates.</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          className="newsletter-input"
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="newsletter-btn" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewsLetter;
