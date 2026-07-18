import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../Contaxt/CartContext";
import { useNavigate } from "react-router-dom";
import img1 from "../../Images/lap2.png";
import img2 from "../../Images/Laptop.png";
import img3 from "../../Images/lap2.png";
import img4 from "../../Images/Laptop.png";

const Electronics = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const productImages = {
    1: img1,
    2: img2,
    3: img3,
    4: img4
  };

  const handleBuy = (product, image) => {
    addToCart({ ...product, image });
    navigate("/cart");
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/products/get")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page fade-in">
      <h2 className="title">Premium Electronics</h2>
      <p className="subtitle">Discover state-of-the-art computational gear, accessories, and laptop powerhouses.</p>
      
      <div className="product-grid">
        {products.slice(0, 4).map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-img-wrapper">
              <img
                src={productImages[p.id]}
                alt={p.name}
                className="product-img"
              />
              <span className="stock-status-badge">Tech Gear</span>
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
                  onClick={() => handleBuy(p, productImages[p.id])}
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

export default Electronics;
