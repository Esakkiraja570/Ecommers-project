import React from 'react';
import Mobile from '../Mobile/Mobile';
import Electronics from '../Electronics/Electronics';
import Furniture from '../Furniture/Furniture';
import Clothing from '../Clothing/Clothing';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-page-showcase fade-in">
      <div className="shop-hero-banner">
        <div className="shop-hero-overlay">
          <h1>LuxeMart Store Showcase</h1>
          <p>Explore all departments in one continuous display, curated for your convenience.</p>
        </div>
      </div>
      <div className="shop-blocks">
        <Electronics />
        <Furniture />
        <Clothing />
        <Mobile />
      </div>
    </div>
  );
};

export default Shop;