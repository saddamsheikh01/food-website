// src/pages/Menu.js
import React from 'react';
import MenuItem from '../components/MenuItem';
import pizzaImage from '../assets/images/pizza.jpg';
import burgerImage from '../assets/images/burger.jpg';
import pastaImage from '../assets/images/pasta.jpg';
import saladImage from '../assets/images/salad.jpg';
import sushiImage from '../assets/images/sushi.jpg';
import steakImage from '../assets/images/steak.jpg';
import './Menu.css';

const menuItems = [
  { id: 1, name: 'Pizza', price: '$12', image: pizzaImage },
  { id: 2, name: 'Burger', price: '$8', image: burgerImage },
  { id: 3, name: 'Pasta', price: '$10', image: pastaImage },
  { id: 4, name: 'Salad', price: '$7', image: saladImage },
  { id: 5, name: 'Sushi', price: '$15', image: sushiImage },
  { id: 6, name: 'Steak', price: '$20', image: steakImage }
];

const Menu = ({ addToCart }) => {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
