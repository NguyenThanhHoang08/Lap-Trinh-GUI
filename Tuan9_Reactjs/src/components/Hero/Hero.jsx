import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-card">
        <span className="recipe-tag">Recipe</span>
        <h2 className="hero-title">Salad Caprese</h2>
        <p className="hero-description">
          Classic Italian Salad Caprese with tomatoes, fresh mozzarella, 
          herbs, olive oil and balsamic glaze. A refreshing dish for any occasion.
        </p>
        <button className="view-recipe-btn">View more</button>
      </div>
    </div>
  );
};

export default Hero;