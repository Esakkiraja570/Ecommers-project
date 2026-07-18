import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Contaxt/CartContext";
import chair from "../../Images/wooden-chair-png.png";
import sofa from "../../Images//sofa.png";
import table from "../../Images/table.png";
import woodendoor from "../../Images/wooden door.png";

const Furniture = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [furniture, setFurniture] = useState([]);

  const FurnitureImages = {
    1: chair,
    2: sofa,
    3: table,
    4: woodendoor
  };

  const handleBuy = (product, image) => {
    addToCart({ ...product, image });
    navigate("/cart");
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/furniture/get")
      .then((res) => setFurniture(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page fade-in">
      <h2 className="title">Luxury Furniture</h2>
      <p className="subtitle">Discover hand-crafted wooden pieces, comfy sofas, and premium doors for your home styling.</p>

      <div className="product-grid">
        {furniture.slice(0, 4).map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-img-wrapper">
              <img
                src={FurnitureImages[p.id]}
                alt={p.name}
                className="product-img"
              />
              <span className="stock-status-badge">{p.category || "Luxury"}</span>
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
                  onClick={() => handleBuy(p, FurnitureImages[p.id])}
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

export default Furniture;
