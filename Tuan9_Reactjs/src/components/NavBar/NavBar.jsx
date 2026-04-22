import React from 'react';
import './NavBar.css';

// Nhận props onLoginClick từ App.jsx
const NavBar = ({ onLoginClick, onSignUpClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">chefify</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="What would you like to cook?" />
      </div>
      <ul className="nav-links">
        <li
        >What to cook</li>
        <li>Recipes</li>
        <li>Ingredients</li>
        <li>Occasions</li>
        <li>About Us</li>
      </ul>
      <div className="auth-buttons">
        <button 
          className="btn-login" 
          onClick={() => {
            console.log("Navbar Button Internally Clicked!"); // Local log
            onLoginClick(); // Prop call
          }}
        >
          Login
        </button>
        <button className="btn-subscribe"
        onClick={onSignUpClick}>Subscribe</button>
      </div>
    </nav>
  );
};

export default NavBar;