import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Contaxt/CartContext";
import Cards from "../Cards/Cards";

// Product images
import banner from "../../../Images/Home-Banner.webp";
import img1 from "../../../Images/lap2.png";
import img2 from "../../../Images/Laptop.png";
import img3 from "../../../Images/lap2.png";
import img4 from "../../../Images/Laptop.png";
import chair from "../../../Images/wooden-chair-png.png";
import sofa from "../../../Images//sofa.png";
import table from "../../../Images/table.png";
import woodendoor from "../../../Images/wooden door.png";
import yellow from "../../../Images/yellow.png";
import green from "../../../Images/green_office-removebg-preview.png";
import blue from "./../../..//Images/blue.png";
import formalgreen from "../../../Images/green-formal.png";
import lava from "../../../Images/lava-mobile.png";
import poco from "../../../Images/poco.png";
import vivo from "../../../Images/vivo.png";
import lenova from "../../../Images/lenovo-removebg-preview.png";

import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [clothing, setClothing] = useState([]);
  const [mobile, setMobile] = useState([]);

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const productImages = { 1: img1, 2: img2, 3: img3, 4: img4 };
  const FurnitureImages = { 1: chair, 2: sofa, 3: table, 4: woodendoor };
  const clothingImages = { 1: yellow, 2: green, 3: blue, 4: formalgreen };
  const mobileImages = { 1: lava, 2: poco, 3: vivo, 4: lenova };

  const handleBuy = (product, image) => {
    addToCart({ ...product, image });
    navigate("/cart");
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/auth/products/get")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));

    axios.get("http://localhost:8080/api/auth/furniture/get")
      .then(res => setFurniture(res.data))
      .catch(err => console.log(err));

    axios.get("http://localhost:8080/api/auth/clothing/get")
      .then(res => setClothing(res.data))
      .catch(err => console.log(err));

    axios.get("http://localhost:8080/api/auth/mobile/get")
      .then(res => setMobile(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home-container fade-in">
      {/* Premium Hero Banner Overlay */}
      <div className="hero-banner-wrapper">
        <img src={banner} alt="Home Banner" className="hero-banner-image" />
        <div className="hero-banner-overlay">
          <div className="hero-banner-content">
            <span className="hero-label">Exclusive Collection 2026</span>
            <h1>Discover Modern Living</h1>
            <p>Elevate your lifestyle with our premium handpicked selections of electronics, furniture, clothes, and mobiles.</p>
            <div className="hero-actions">
              <Link to="/shop" className="hero-cta-primary">Explore Products</Link>
              <a href="#featured-products" className="hero-cta-secondary">View Featured</a>
            </div>
          </div>
        </div>
      </div>

      {/* Categories block */}
      <div className="section-divider">
        <h3 className="section-divider-title">Shop by Category</h3>
      </div>
      <Cards />

      {/* Main product showcase section */}
      <div id="featured-products" className="page">
        {/* Electronics Page block */}
        <section className="home-featured-section">
          <div className="section-header-row">
            <div>
              <span className="section-category-tag">Gear up</span>
              <h2 className="section-title-left">Featured Electronics</h2>
            </div>
            <Link to="/laptop" className="section-view-all">View All →</Link>
          </div>
          
          <div className="product-grid">
            {products.slice(0, 4).map(p => (
              <div className="product-card" key={p.id}>
                <div className="product-img-wrapper">
                  <img src={productImages[p.id]} alt={p.name} className="product-img" />
                  <span className="stock-status-badge">New</span>
                </div>
                <div className="card-body">
                  <h4>{p.name}</h4>
                  <p>{p.description}</p>
                  
                  <div className="product-meta">
                    <div className="product-meta-item">
                      <span>Stock status:</span>
                      <span className={p.stock > 0 ? "status-in-stock" : "status-out-of-stock"}>
                        {p.stock > 0 ? `${p.stock} Available` : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="product-card-footer">
                    <span className="price-tag">₹{p.price}</span>
                    <button onClick={() => handleBuy(p, productImages[p.id])} className="buy-btn-small">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Furniture Page block */}
        <section className="home-featured-section">
          <div className="section-header-row">
            <div>
              <span className="section-category-tag">Living Space</span>
              <h2 className="section-title-left">Luxury Furniture</h2>
            </div>
            <Link to="/furniture" className="section-view-all">View All →</Link>
          </div>
          
          <div className="product-grid">
            {furniture.slice(0, 4).map(p => (
              <div className="product-card" key={p.id}>
                <div className="product-img-wrapper">
                  <img src={FurnitureImages[p.id]} alt={p.name} className="product-img" />
                  <span className="stock-status-badge">{p.category || "Home"}</span>
                </div>
                <div className="card-body">
                  <h4>{p.name}</h4>
                  <p>{p.description}</p>
                  
                  <div className="product-meta">
                    <div className="product-meta-item">
                      <span>Stock status:</span>
                      <span className={p.stock > 0 ? "status-in-stock" : "status-out-of-stock"}>
                        {p.stock > 0 ? `${p.stock} Available` : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="product-card-footer">
                    <span className="price-tag">₹{p.price}</span>
                    <button onClick={() => handleBuy(p, FurnitureImages[p.id])} className="buy-btn-small">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clothing Page block */}
        <section className="home-featured-section">
          <div className="section-header-row">
            <div>
              <span className="section-category-tag">Apparel</span>
              <h2 className="section-title-left">Trending Clothing</h2>
            </div>
            <Link to="/clothing" className="section-view-all">View All →</Link>
          </div>
          
          <div className="product-grid">
            {clothing.slice(0, 4).map(p => (
              <div className="product-card" key={p.id}>
                <div className="product-img-wrapper">
                  <img src={clothingImages[p.id]} alt={p.name} className="product-img" />
                  <span className="stock-status-badge">{p.brand || "Premium"}</span>
                </div>
                <div className="card-body">
                  <h4>{p.name}</h4>
                  <p>{p.description}</p>
                  
                  <div className="product-meta">
                    <div className="product-meta-item">
                      <span>Stock status:</span>
                      <span className={p.stock > 0 ? "status-in-stock" : "status-out-of-stock"}>
                        {p.stock > 0 ? `${p.stock} Available` : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="product-card-footer">
                    <span className="price-tag">₹{p.price}</span>
                    <button onClick={() => handleBuy(p, clothingImages[p.id])} className="buy-btn-small">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mobiles Page block */}
        <section className="home-featured-section">
          <div className="section-header-row">
            <div>
              <span className="section-category-tag">Smart Tech</span>
              <h2 className="section-title-left">Latest Mobiles</h2>
            </div>
            <Link to="/mobile" className="section-view-all">View All →</Link>
          </div>
          
          <div className="product-grid">
            {mobile.slice(0, 4).map(p => (
              <div className="product-card" key={p.id}>
                <div className="product-img-wrapper">
                  <img src={mobileImages[p.id]} alt={`${p.brand} ${p.model}`} className="product-img" />
                  <span className="stock-status-badge">4G/5G</span>
                </div>
                <div className="card-body">
                  <h4>{p.brand} {p.model}</h4>
                  <p>Processor: {p.processor} | RAM: {p.ram} | Storage: {p.storage}</p>
                  
                  <div className="product-meta">
                    <div className="product-meta-item">
                      <span>Stock status:</span>
                      <span className={p.stock > 0 ? "status-in-stock" : "status-out-of-stock"}>
                        {p.stock > 0 ? `${p.stock} Available` : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="product-card-footer">
                    <span className="price-tag">₹{p.price}</span>
                    <button onClick={() => handleBuy(p, mobileImages[p.id])} className="buy-btn-small">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
