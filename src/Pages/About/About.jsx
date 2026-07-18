import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page-wrapper fade-in">
      {/* Premium About Hero */}
      <section className="about-hero-banner">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1>About LuxeMart</h1>
            <p>
              Your trusted global destination for high-quality electronics, furniture,
              fashion clothing, and smart mobile devices.
            </p>
          </div>
        </div>
      </section>

      <div className="about-content-container">
        {/* Company Story Block */}
        <section className="about-story-section">
          <div className="about-badge-label">Our Story</div>
          <h2>Who We Are</h2>
          <p className="lead-story-text">
            LuxeMart is a modern eCommerce experience designed to connect shoppers with 
            exceptional premium products. We bridge the gap between quality manufacturing 
            and modern consumer expectations, delivering a seamless experience from catalog browsing to doorstep delivery.
          </p>
          <p>
            Founded by industry visionaries in 2026, LuxeMart operates on the principles of trust, 
            customer safety, fast logistics, and absolute product authenticity. We believe that online 
            retail should be simple, delightful, and dependable.
          </p>
        </section>

        {/* Vision & Mission Cards Grid */}
        <section className="about-vision-grid">
          <div className="vision-glass-card">
            <div className="vision-icon-box">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To offer consumers a curated range of high-quality products at competitive prices, 
              backed by 24/7 customer assistance and high-security transactions.
            </p>
          </div>

          <div className="vision-glass-card">
            <div className="vision-icon-box">🌟</div>
            <h3>Our Vision</h3>
            <p>
              To lead as a global pioneer in digital commerce, establishing standard benchmarks 
              for user-friendly shopping journeys and modern supply chains.
            </p>
          </div>
        </section>

        {/* Why Choose Us & Services Checklist */}
        <section className="about-benefits-section">
          <h2>Why Customers Shop With Us</h2>
          
          <div className="benefits-row-grid">
            <div className="benefits-checklist">
              <ul>
                <li>
                  <span className="bullet-check">✓</span> 
                  <div>
                    <strong>Premium Selections:</strong> Strictly verified brands and catalog options.
                  </div>
                </li>
                <li>
                  <span className="bullet-check">✓</span> 
                  <div>
                    <strong>Secure Checkout:</strong> Highly encrypted gateways to guard every payment.
                  </div>
                </li>
                <li>
                  <span className="bullet-check">✓</span> 
                  <div>
                    <strong>Express Shipping:</strong> Partnership with leading cargo carriers.
                  </div>
                </li>
                <li>
                  <span className="bullet-check">✓</span> 
                  <div>
                    <strong>Flexible Returns:</strong> Stress-free, simple replacement window.
                  </div>
                </li>
              </ul>
            </div>

            <div className="benefits-features-grid">
              <div className="feature-small-box">
                <h4>24/7 Helpline</h4>
                <p>Support handlers are online at any hour to troubleshoot order processes.</p>
              </div>
              <div className="feature-small-box">
                <h4>Best Price Guarantee</h4>
                <p>We work directly with wholesalers to provide optimum market values.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
