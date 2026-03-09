import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "./CartContext";

const Cart = () => {

  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  // TOTAL PRICE
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // EMPTY CART
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-empty">
        <h3>Your cart is empty</h3>
      </div>
    );
  }

  return (
    <div className="cart-container">

      <h2 className="cart-title">Shopping Cart</h2>

      {cart.map((item) => {

        const productName =
          item.name ||
          `${item.brand || ""} ${item.model || ""}`;

        return (

          <div key={item.id} className="cart-item">

            <img
              src={item.image}
              alt={productName}
              className="cart-image"
            />

            <div className="cart-name">
              {productName}
            </div>

            <div className="cart-price">
              ₹{item.price}
            </div>

            {/* QUANTITY CONTROL */}
            <div className="cart-qty">

              <button
                onClick={() =>
                  updateQty(item.id, item.qty - 1)
                }
                disabled={item.qty <= 1}
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() =>
                  updateQty(item.id, item.qty + 1)
                }
              >
                +
              </button>

            </div>

            <div className="cart-total">
              ₹{item.price * item.qty}
            </div>

            <button
              className="delete-btn"
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>

          </div>

        );

      })}

      {/* CART SUMMARY */}
      <div className="cart-summary">

        <h3>Total: ₹{total}</h3>

        <button
          className="order-btn"
          onClick={() => alert("Order placed successfully!")}
        >
          Place Order
        </button>

      </div>

    </div>
  );
};

export default Cart;