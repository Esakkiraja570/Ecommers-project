import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../Contaxt/CartContext";
import { useNavigate } from "react-router-dom";
import yellow from "../../Images/yellow.png";
import green from "../../Images/green_office-removebg-preview.png";
import blue from "../..//Images/blue.png"
import formalgreen from "../../Images/green-formal.png";
const Clothing = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [clothing, setClothing] = useState([]);
const clothings = {
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
  );
};

export default Clothing;
