import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate total price
  const total = cart ? cart.reduce((sum, item) => sum + item.price * item.qty, 0) : 0;

  // Visual layout for empty cart
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-empty-wrapper fade-in">
        <div className="empty-cart-graphic">🛒</div>
        <h3>Your Shopping Cart is Empty</h3>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="continue-shopping-btn">Explore Catalogs</Link>
      </div>
    );
  }

  return (
    <div className="cart-page-wrapper page fade-in">
      <h2 className="cart-page-heading">Shopping Cart</h2>
      
      <div className="cart-layout-grid">
        {/* Left Side: Cart Items List */}
        <div className="cart-items-column">
          {cart.map((item) => {
            const productName = item.name || `${item.brand || ""} ${item.model || ""}`;
            return (
              <div key={item.id} className="cart-item-card">
                <div className="cart-item-img-wrapper">
                  <img src={item.image} alt={productName} className="cart-item-img" />
                </div>

                <div className="cart-item-info">
                  <h4>{productName}</h4>
                  <p className="cart-item-spec">
                    {item.processor ? `Processor: ${item.processor} | RAM: ${item.ram}` : "Premium Selection"}
                  </p>
                  <span className="cart-item-unit-price">₹{item.price} each</span>
                </div>

                <div className="cart-item-qty-control">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    disabled={item.qty <= 1}
                    className="qty-btn"
                  >
                    −
                  </button>
                  <span className="qty-value">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-subtotal">
                  <span>₹{item.price * item.qty}</span>
                </div>

                <button
                  className="cart-item-delete-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>

        {/* Right Side: Order Summary Card */}
        <div className="cart-summary-column">
          <div className="order-summary-card glass-panel">
            <h3>Order Summary</h3>
            
            <div className="summary-details-rows">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="text-success-free">Free</span>
              </div>
              <div className="summary-row">
                <span>GST / Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              
              <div className="summary-row-divider"></div>
              
              <div className="summary-row-total">
                <span>Estimated Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button
              className="checkout-proceed-btn"
              onClick={() => alert("Order placed successfully! Thank you for shopping with LuxeMart.")}
            >
              Place Order
            </button>
            
            <button className="continue-shop-link" onClick={() => navigate("/shop")}>
              ← Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;