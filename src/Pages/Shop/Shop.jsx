import React from 'react'
import Mobile from '../Mobile/Mobile'
import Electronics from '../Electronics/Electronics';
import Furniture from '../Furniture/Furniture';
import Clothing from '../Clothing/Clothing';

const Shop = () => {
  return (
    <div>
    <div><Electronics/></div>
    <div><Furniture/></div>
    <div><Clothing/></div>
    <div><Mobile/></div>
</div>
  );
}

export default Shop;