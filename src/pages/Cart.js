// src/pages/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
