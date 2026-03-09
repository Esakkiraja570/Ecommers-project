import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>E-Shop</h3>
          <p>
            Your trusted online shopping store for electronics,
            fashion, furniture and more.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Return Policy</li>
            <li>Shipping Info</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: esakkiraja0409@gmail.com</p>
          <p>Phone: +91 8300264732</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 E-Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
