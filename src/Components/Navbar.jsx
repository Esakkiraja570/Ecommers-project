import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../Pages/Contaxt/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Compute total quantity of items in cart
  const cartCount = cart ? cart.reduce((sum, item) => sum + item.qty, 0) : 0;

  // Check login state
  const token = localStorage.getItem("token");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar-modern ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/home" className="brand-logo" onClick={closeMenu}>
          Luxe<span>Mart</span>
        </Link>

        {/* Hamburger Icon */}
        <button 
          className={`hamburger-btn ${isOpen ? "active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-menu ${isOpen ? "open" : ""}`}>
          <Link 
            to="/home" 
            className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className={`nav-link ${location.pathname === "/shop" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Shop
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        {/* Navigation Actions (Cart, Profile/Logout) */}
        <div className="nav-actions">
          {/* Cart Icon with badge */}
          <Link to="/cart" className="action-btn cart-btn-nav" aria-label="Cart" onClick={closeMenu}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="icon-svg"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge-count">{cartCount}</span>}
          </Link>

          {/* User Profile / Logout */}
          {token ? (
            <button className="logout-btn-nav" onClick={handleLogout} title="Logout">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="icon-svg"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <span>Logout</span>
            </button>
          ) : (
            <Link to="/" className="login-link-nav" onClick={closeMenu}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
