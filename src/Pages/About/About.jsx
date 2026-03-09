import React from "react";
import "../About/About.css";

const About = () => {
  return (
    <div className="about-container">

      {/* Header */}
      <section className="about-header">
        <h1>About Our Store</h1>
        <p>
          Your trusted destination for quality products, unbeatable prices,
          and exceptional shopping experience.
        </p>
      </section>

      {/* Company Story */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a modern eCommerce platform dedicated to delivering
          high-quality products across electronics, furniture, fashion,
          and mobile devices. Our mission is to make online shopping simple,
          fast, and reliable for everyone.
        </p>

        <p>
          Founded with a vision to transform online retail, our store
          connects customers with premium brands and trusted sellers while
          ensuring safe and secure transactions.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-grid">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To provide customers with the best online shopping experience
            through quality products, competitive pricing, and outstanding
            customer support.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To become one of the most trusted global eCommerce platforms,
            delivering happiness through seamless shopping experiences.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <h2>Why Shop With Us?</h2>

        <ul className="about-list">
          <li>✔ Wide range of quality products</li>
          <li>✔ Secure payment options</li>
          <li>✔ Fast delivery service</li>
          <li>✔ Easy returns and refunds</li>
          <li>✔ 24/7 customer support</li>
          <li>✔ Best prices guaranteed</li>
        </ul>
      </section>

      {/* Services */}
      <section className="about-grid">
        <div className="about-card">
          <h3>Fast Delivery</h3>
          <p>
            We partner with reliable logistics providers to ensure your
            products reach you safely and quickly.
          </p>
        </div>

        <div className="about-card">
          <h3>Secure Payments</h3>
          <p>
            Shop confidently with secure payment gateways protecting every
            transaction.
          </p>
        </div>

        <div className="about-card">
          <h3>Customer Support</h3>
          <p>
            Our support team is always ready to help with orders,
            returns, and product inquiries.
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <section className="about-footer">
        <h2>Thank You for Shopping With Us</h2>
        <p>
          We are committed to continuously improving our services to serve
          you better every day.
        </p>
      </section>

    </div>
  );
};

export default About;
