import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Contaxt/CartContext";
import lava from "../../Images/lava-mobile.png";
import poco from "../../Images/poco.png";
import vivo from "../../Images/vivo.png";
import lenova from "../../Images/lenovo-removebg-preview.png";

const Mobile = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [mobile, setMobile] = useState([]);

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

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/mobile/get")
      .then((res) => setMobile(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page fade-in">
      <h2 className="title">Smart Mobiles</h2>
      <p className="subtitle">Explore the latest high-performance smartphones and smart communication tablets.</p>

      <div className="product-grid">
        {mobile.slice(0, 4).map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-img-wrapper">
              <img
                src={mobileImages[p.id]}
                alt={`${p.brand} ${p.model}`}
                className="product-img"
              />
              <span className="stock-status-badge">Smart Devices</span>
            </div>

            <div className="card-body">
              <h4>{p.brand} {p.model}</h4>
              <p>Processor: {p.processor} | Memory: {p.ram} RAM | Storage: {p.storage}</p>
              
              <div className="product-meta">
                <div className="product-meta-item">
                  <span>Stock availability:</span>
                  <span className={p.stock > 0 ? "status-in-stock" : "status-out-of-stock"}>
                    {p.stock > 0 ? `${p.stock} Units Left` : "Out of Stock"}
                  </span>
                </div>
              </div>

              <div className="product-card-footer">
                <span className="price-tag">₹{p.price}</span>
                <button
                  onClick={() => handleBuy(p, mobileImages[p.id])}
                  className="buy-btn-small"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
