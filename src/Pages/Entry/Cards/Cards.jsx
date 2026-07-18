import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cards.css';

import lap from '../../../Images/Laptop.png';
import cloths from '../../../Images/Cloths.png';
import furniture from '../../../Images/Furniture.png';
import mobile from '../../../Images/Mobile.jpg';

const Cards = () => {
  const navigate = useNavigate();

  const categories = [
    { title: 'Laptops', path: '/laptop', img: lap },
    { title: 'Clothing', path: '/clothing', img: cloths },
    { title: 'Furniture', path: '/furniture', img: furniture },
    { title: 'Mobiles', path: '/mobile', img: mobile },
  ];

  return (
    <div className="categories-block-wrapper">
      <div className="categories-grid-container">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="category-show-card" 
            onClick={() => navigate(cat.path)}
          >
            <div className="category-img-container">
              <img src={cat.img} alt={cat.title} className="category-card-img" />
            </div>
            <div className="category-card-details">
              <h4>{cat.title}</h4>
              <span className="category-shop-now-btn">Browse Collection</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
