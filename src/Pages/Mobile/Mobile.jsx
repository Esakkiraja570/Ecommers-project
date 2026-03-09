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

const handleBuy = (product, image) => {
  addToCart({ ...product, image });
  navigate("/cart");
};
const mobileImages = {
    1: lava,
    2: poco,
    3: vivo,
    4: lenova
};
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/mobile/get")
      .then((res) => setMobile(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
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
          </div>
  );
};

export default Mobile;
