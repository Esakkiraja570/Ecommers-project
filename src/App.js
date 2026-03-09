import React from 'react'


import Shop from './Pages/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Entry/Home/Home';
import Cart from './Pages/Contaxt/Cart';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Electronics from './Pages/Electronics/Electronics';
import Mobile from './Pages/Mobile/Mobile';
import Clothing from './Pages/Clothing/Clothing';
import Furniture from './Pages/Furniture/Furniture';
import Login from './Pages/Entry/Login/Login';
import Signup from './Pages/Entry/Signin/Signup';




const App = () => {
  return (
    <div>
      <div>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
         <Route path="/laptop" element={<Electronics/>} />
          <Route path="/mobile" element={<Mobile/>} />
          <Route path="/furniture" element={<Furniture/>} />
            <Route path="/clothing" element={<Clothing/>} />
            
      </Routes>
    
    <div/>
    </div>
    </div>
  );
}

export default App;