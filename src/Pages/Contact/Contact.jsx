import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="contact-page-wrapper fade-in">
      {/* Contact Hero Banner */}
      <section className="contact-hero-banner">
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <h1>Contact Our Team</h1>
            <p>Have questions about premium items or order logistics? We are here to assist.</p>
          </div>
        </div>
      </section>

      <div className="contact-content-grid">
        {/* Left Side: Contact Information Cards */}
        <div className="contact-details-panel">
          <div className="contact-badge-label">Get in touch</div>
          <h2>We'd Love to Hear From You</h2>
          <p className="contact-intro-text">
            Send us a message using the form, or reach out directly using our contact info.
          </p>

          <div className="contact-info-cards-list">
            <div className="info-detail-card">
              <span className="info-icon">📍</span>
              <div>
                <h4>Our Address</h4>
                <p>123 Commerce Street, Chennai, India</p>
              </div>
            </div>

            <div className="info-detail-card">
              <span className="info-icon">📞</span>
              <div>
                <h4>Phone Helpline</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-detail-card">
              <span className="info-icon">📧</span>
              <div>
                <h4>Email Support</h4>
                <p>support@ecommercestore.com</p>
              </div>
            </div>

            <div className="info-detail-card">
              <span className="info-icon">⏰</span>
              <div>
                <h4>Support Hours</h4>
                <p>Mon - Sat: 9 AM to 8 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Contact Form */}
        <div className="contact-form-panel glass-panel">
          <h3>Send a Message</h3>
          <p>Fill out the form below and our team will get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit} className="modern-contact-form">
            <div className="contact-form-row">
              <div className="form-input-wrapper">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-input-wrapper">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-input-wrapper">
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-input-wrapper">
              <textarea
                name="message"
                required
                placeholder="Your Message"
                rows="6"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
