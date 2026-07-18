import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../Contaxt/CartContext";
import { useNavigate } from "react-router-dom";
import yellow from "../../Images/yellow.png";
import green from "../../Images/green_office-removebg-preview.png";
import blue from "../..//Images/blue.png";
import formalgreen from "../../Images/green-formal.png";

const Clothing = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [clothing, setClothing] = useState([]);

  const clothingImages = {
    1: yellow,
    2: green,
    3: blue,
    4: formalgreen
  };

  const handleBuy = (product, image) => {
    addToCart({ ...product, image });
    navigate("/cart");
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/clothing/get")
      .then((res) => setClothing(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page fade-in">
      <h2 className="title">Modern Clothing</h2>
      <p className="subtitle">Explore custom apparel, office fits, premium jackets, and luxury style statements.</p>

      <div className="product-grid">
        {clothing.slice(0, 4).map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-img-wrapper">
              <img
                src={clothingImages[p.id]}
                alt={p.name}
                className="product-img"
              />
              <span className="stock-status-badge">{p.brand || "Exclusive"}</span>
            </div>

            <div className="card-body">
              <h4>{p.name}</h4>
              <p>{p.description}</p>
              
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
                  onClick={() => handleBuy(p, clothingImages[p.id])}
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

export default Clothing;
