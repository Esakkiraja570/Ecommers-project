import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD PRODUCT
  const addToCart = (product) => {

    const exist = cart.find(item => item.id === product.id);

    if (exist) {

      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );

    } else {

      setCart([...cart, { ...product, qty: 1 }]);

    }

  };

  // REMOVE PRODUCT
  const removeFromCart = (id) => {

    setCart(cart.filter(item => item.id !== id));

  };

  // UPDATE QUANTITY
  const updateQty = (id, qty) => {

    if (qty < 1) return;

    setCart(
      cart.map(item =>
        item.id === id ? { ...item, qty } : item
      )
    );

  };

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty
      }}
    >

      {children}

    </CartContext.Provider>

  );

};