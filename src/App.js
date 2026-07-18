import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Entry/Home/Home';
import Shop from './Pages/Shop/Shop';
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
    <Routes>
      {/* Auth routes outside global layout */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main shop routes wrapped inside Layout (Navbar & Footer included) */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/laptop" element={<Electronics />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/clothing" element={<Clothing />} />
      </Route>
    </Routes>
  );
};

export default App;