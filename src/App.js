import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Login from './pages/Login';  // Import Login component
import Signup from './pages/Signup';  // Import Signup component
import Header from './components/Header'; // Import Header
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item !== itemToRemove));
  };

  return (
    <Router>
      <Header /> {/* Use the Header component */}
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/login" element={<Login />} /> {/* Add route for Login */}
        <Route path="/signup" element={<Signup />} /> {/* Add route for Signup */}
      </Routes>  
    </Router>
  );
}

export default App;
