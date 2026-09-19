import React, { useState } from "react";
import axios from "axios";
import { Footer, SocialLinks } from "../Shared/Sections";
import "./page.css";

const initialValues = { fullName: "", emailAddress: "", phoneNumber: "", organization: "", subject: "", message: "", contactMethod: "email", howHeard: "" };
const subjects = [["general", "General Inquiry"], ["volunteer", "Volunteer"], ["speaking", "Speaking Engagements"], ["workshops", "Workshops and Training"], ["media", "Media Requests"], ["partnership", "Partnership Opportunities"], ["other", "Other"]];

export default function Info() {
  const [values, setValues] = useState(initialValues);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const change = event => setValues(previous => ({ ...previous, [event.target.name]: event.target.value }));
  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    setBusy(true); setStatus("");
    try {
      await axios.post("https://seyi-adisa-backend.onrender.com/api/contact", values, { timeout: 20000 });
      setStatus("Message sent successfully. Thank you for getting in touch!");
      setValues(initialValues);
    } catch { setStatus("We couldn’t send your message. Please try again, or email hello@seyiadisa.com."); }
    finally { setBusy(false); }
  }
  return <>
    <section className="contact-page" aria-labelledby="contact-title"><div className="contact-page__inner">
      <header className="contact-page__heading"><p className="contact-page__label">CONTACT US</p><h1 id="contact-title">Let’s Start a Conversation</h1><p>Ready to take the next step? Whether you have questions, need guidance, or want to discuss a project, we're here to help. Let's connect and explore how we can work together to achieve your goals.</p></header>
      <div className="contact-page__grid">
        <aside className="contact-page__details" aria-labelledby="contact-details-title"><h2 id="contact-details-title">Get in touch</h2><p>Have a question or an idea to share? Send a message or reach us directly.</p><div><h3>Email</h3><a href="mailto:hello@seyiadisa.com">hello@seyiadisa.com</a></div><div><h3>Phone</h3><a href="tel:+2348132412749">+234 8132 412 749</a></div><p className="contact-page__hint">For speaking invitations, workshops, partnerships, volunteering, and general enquiries.</p></aside>
        <form className="contact-page__form" onSubmit={submit} aria-labelledby="message-title">
          <h2 id="message-title">Send a message</h2><p className="contact-page__note">Fields marked * are required.</p>
          <fieldset disabled={busy}><legend className="contact-page__sr-only">Your enquiry details</legend><div className="contact-page__fields">
            <label>Full name *<input name="fullName" autoComplete="name" value={values.fullName} onChange={change} required maxLength={150} /></label>
            <label>Email address *<input name="emailAddress" type="email" autoComplete="email" value={values.emailAddress} onChange={change} required /></label>
            <label>Phone number{values.contactMethod === "phone" ? " *" : " (optional)"}<input name="phoneNumber" type="tel" autoComplete="tel" value={values.phoneNumber} onChange={change} required={values.contactMethod === "phone"} /></label>
            <label>Organization / Company (optional)<input name="organization" autoComplete="organization" value={values.organization} onChange={change} maxLength={200} /></label>
            <label className="contact-page__full">Subject of inquiry *<select aria-label="Subject of inquiry *" name="subject" value={values.subject} onChange={change} required><option value="" disabled>Select an enquiry type</option>{subjects.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
            <label className="contact-page__full">Message *<textarea name="message" rows={6} placeholder="Please provide details about your inquiry." value={values.message} onChange={change} required maxLength={10000} /></label>
            <label>Preferred contact method *<select aria-label="Preferred contact method *" name="contactMethod" value={values.contactMethod} onChange={change} required><option value="email">Email</option><option value="phone">Phone</option><option value="either">Either</option></select></label>
            <label>How did you hear about us? (optional)<select aria-label="How did you hear about us? (optional)" name="howHeard" value={values.howHeard} onChange={change}><option value="">Select an option</option>{[["search", "Search Engine"], ["social", "Social Media"], ["referral", "Referral"], ["event", "Event / Conference"], ["other", "Other"]].map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
          </div></fieldset>
          <button type="submit" disabled={busy}>{busy ? "Sending…" : "Send message"}</button><p className="contact-page__status" role="status">{status}</p>
        </form>
      </div>
    </div></section>
    <SocialLinks />
    <Footer />
  </>;
}
