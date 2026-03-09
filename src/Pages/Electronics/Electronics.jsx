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
const productImages = {
  1: img1,
  2: img2,
  3: img3,
  4: img4
};
  const [products, setProducts] = useState([]);

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
  );
};

export default Electronics;
