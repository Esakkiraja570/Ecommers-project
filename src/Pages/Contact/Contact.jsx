import React, { useState } from "react";
import "../Contact/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">

      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We are here to help you. Reach out anytime.</p>
      </div>

      <div className="contact-content">

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Have questions about products, orders, or support?
            Our team is ready to assist you.
          </p>

          <div className="info-item">
            <strong>📍 Address:</strong>
            <p>123 Commerce Street, Chennai, India</p>
          </div>

          <div className="info-item">
            <strong>📞 Phone:</strong>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-item">
            <strong>📧 Email:</strong>
            <p>support@ecommercestore.com</p>
          </div>

          <div className="info-item">
            <strong>⏰ Support Hours:</strong>
            <p>Mon - Sat: 9 AM to 8 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
