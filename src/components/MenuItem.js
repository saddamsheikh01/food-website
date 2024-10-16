// src/components/MenuItem.js
import React from 'react';
import './MenuItem.css'; // Optional: Create a separate CSS file for MenuItem if needed

const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <div className="menu-item-details">
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
