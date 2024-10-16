import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // Scroll event handler for adding "scrolled" class
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.unique-navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light unique-navbar">
      <Link className="navbar-brand ms-5" to="/">Foodie</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" activeclassname="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu" activeclassname="active">Menu</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart" activeclassname="active">Cart</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" activeclassname="active">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup" activeclassname="active">Sign Up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
