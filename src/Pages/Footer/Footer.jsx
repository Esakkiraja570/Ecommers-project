import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-modern">
      <div className="footer-top-grid">
        {/* Brand Information Column */}
        <div className="footer-info-col">
          <Link to="/home" className="footer-brand" onClick={scrollToTop}>
            Luxe<span>Mart</span>
          </Link>
          <p className="footer-desc-text">
            Your premium global shopping experience for state-of-the-art electronics, 
            luxurious furniture, trending clothing collections, and high-performance mobile devices.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links-col">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/home" onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/shop" onClick={scrollToTop}>Shop Collection</Link>
            </li>
            <li>
              <Link to="/cart" onClick={scrollToTop}>Your Cart</Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop}>About LuxeMart</Link>
            </li>
            <li>
              <Link to="/contact" onClick={scrollToTop}>Contact Support</Link>
            </li>
          </ul>
        </div>

        {/* Policies & Services Column */}
        <div className="footer-links-col">
          <h4>Customer Care</h4>
          <ul>
            <li>Help Center</li>
            <li>Return Policy</li>
            <li>Shipping Logistics</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="footer-contact-col">
          <h4>Get in Touch</h4>
          <p><strong>Email:</strong> support@luxemart.com</p>
          <p><strong>Phone:</strong> +91 83002 64732</p>
          <p className="contact-address-footer"><strong>HQ:</strong> 123 Commerce St, Chennai, IN</p>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p>© 2026 LuxeMart E-Store. All rights reserved.</p>
          <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
