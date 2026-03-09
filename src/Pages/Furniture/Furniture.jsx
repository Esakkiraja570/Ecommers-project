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

 const handleBuy = (product, image) => {
  addToCart({ ...product, image });
  navigate("/cart");
};
const Furniture = {
  1: chair,
  2: sofa,
  3: table,
  4: woodendoor
};
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/furniture/get")
      .then((res) => setFurniture(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
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
  );
};

export default Furniture;
