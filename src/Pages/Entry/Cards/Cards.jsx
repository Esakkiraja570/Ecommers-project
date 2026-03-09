import React from 'react'
import './Cards.css'
import lap from '../../../Images/Laptop.png'
import cloths from  '../../../Images/Cloths.png'
import furniture from '../../../Images/Furniture.png'
import mobile from '../../../Images/Mobile.jpg'

const Cards = () => {
  return (
    <div className='banner'>
      <div className='card-banner'>

        <div className='card' onClick={() => window.location.href = '/laptop'}>
          <img src={lap} alt='laptop' />
          <h4>Laptops</h4>
        </div>

        <div className='card' onClick={() => window.location.href = '/clothing'}>
          <img src={cloths} alt='cloths' />
          <h4>Clothing</h4>
        </div>

        <div className='card' onClick={() => window.location.href = '/furniture'}>
          <img src={furniture} alt='furniture' />
          <h4>Furniture</h4>
        </div>

        <div className='card' onClick={() => window.location.href = '/mobile'}>
          <img src={mobile} alt='mobile' />
          <h4>Mobiles</h4>
        </div>

      </div>
    </div>
  )
}

export default Cards;
