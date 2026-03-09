import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import banner from "../../../Images/Home-Banner.webp";
import Cards from "../Cards/Cards";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Contaxt/CartContext";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
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
import blue from "./../../..//Images/blue.png"
import formalgreen from "../../../Images/green-formal.png";
import lava from "../../../Images/lava-mobile.png"
import poco from "../../../Images/poco.png";
import vivo from "../../../Images/vivo.png";
import lenova from "../../../Images/lenovo-removebg-preview.png";
import Footer from "../../Footer/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [clothing, setClothing] = useState([]);
  const [mobile, setMobile] = useState([]);

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
const productImages = {
  1: img1,
  2: img2,
  3: img3,
  4: img4
};
const Furniture = {
  1: chair,
  2: sofa,
  3: table,
  4: woodendoor
};
const clothings = {
  1: yellow,
  2: green,
  3: blue,
  4: formalgreen
};
const mobileImages = {
    1: lava,
    2: poco,
    3: vivo,
    4: lenova
};
const handleBuy = (product, image) => {
  addToCart({ ...product, image });
  navigate("/cart");
};
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/auth/products/get")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/auth/furniture/get")
      .then(res => setFurniture(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/auth/clothing/get")
      .then(res => setClothing(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/auth/mobile/get")
      .then(res => setMobile(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {/* Navbar */}
  
    <nav className="navbar">
      <div className="logo">Ecommerce</div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
      {/* Banner */}
      <img
        src={banner}
        alt="Home Banner"
        style={{
          width: "100%",
          borderRadius: "20px",
          marginTop: "2px"
        }}
      />

      <Cards />

      {/* Electronics */}
      <div className="page">
        <h2 className="title">Electronics</h2>
        <div className="product-grid">
          {products.slice(0, 4).map(p => (
            <div className="product-card" key={p.id}>
                <img
  src={productImages[p.id]}
  alt={p.name}
  className="product-img"
/>
              <div className="card-body">
                <h4>{p.name}</h4>
                <p>{p.description}</p>
                <p>₹{p.price}</p>
                <p>Stock: {p.stock}</p>

                <button
                  onClick={() => handleBuy(p, productImages[p.id])}
                  className="buy-btn"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Furniture */}
      <div className="page">
        
        <h2 className="title">Furniture</h2>
        <div className="product-grid">
          {furniture.slice(0, 4).map(p => (
            <div className="product-card" key={p.id}>
              <img
  src={Furniture[p.id]}
  alt={p.name}
  className="product-img"
/>
              <div className="card-body">
                <h4>{p.name}</h4>
                <p>{p.description}</p>
                <p>₹{p.price}</p>
                <p>Stock: {p.stock}</p>
                <p>Category: {p.category}</p>

                <button
                  onClick={() => handleBuy(p, Furniture[p.id])}
                  className="buy-btn"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clothing */}
      <div className="page">
        <h2 className="title">Clothing</h2>
        <div className="product-grid">
          {clothing.slice(0, 4).map(p => (
            <div className="product-card" key={p.id}>
                <img
  src={clothings[p.id]}
  alt={p.name}
  className="product-img"
/>
              <div className="card-body">
                <h4>{p.name}</h4>
                <p>{p.description}</p>
                <p>₹{p.price}</p>
                <p>Stock: {p.stock}</p>
                <p>Brand: {p.brand}</p>

                <button
                  onClick={() => handleBuy(p, clothings[p.id])}
                  className="buy-btn"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobiles */}
      <div className="page">
        <h2 className="title">Mobiles</h2>

        <div className="product-grid">
          {mobile.slice(0, 4).map(p => (
            <div className="product-card" key={p.id}>
                <img
  src={mobileImages[p.id]}
  alt={`${p.brand} ${p.model}`}
  className="product-img"
/>
              <div className="card-body">
                <h4>{p.brand} {p.model}</h4>
                <p>Processor: {p.processor}</p>
                <p>RAM: {p.ram}</p>
                <p>Storage: {p.storage}</p>
                <p>₹{p.price}</p>
                <p>Stock: {p.stock}</p>

                <button
                  onClick={() => handleBuy(p, mobileImages[p.id])}
                  className="buy-btn"
                >
                  Buy Now
                </button>
              </div>
              <div>
                
              </div>
            </div>
          ))}
        </div>
        <Contact/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
  );
};

export default Home;
