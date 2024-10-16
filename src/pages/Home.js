import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to Foodie Delight!</h1>
        <p>Delicious meals delivered to your doorstep.</p>
        <Link to="/menu" className="btn btn-dark">Explore Our Menu</Link>
      </div>
    </div>
  );
};

export default Home;
