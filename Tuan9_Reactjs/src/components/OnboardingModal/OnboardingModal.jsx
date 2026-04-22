import React from 'react';
import './OnboardingModal.css';

const OnboardingModal = ({ onClose }) => {
  return (
    <div className="Onboarding-container">
      <button className="close-btn" onClick={onClose}>✕</button>
      
      <h1 className="modal-title">Discover Chefify</h1>
      <p className="modal-subtitle">
        Easy and delicious cooking instructions right here. Start exploring now!
      </p>

      <div className="image-slider">
        <img 
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" 
          alt="Food" 
          className="slider-img" 
        />
        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <button className="next-btn" onClick={onClose}>Next</button>
      <button className="skip-link" onClick={onClose}>Skip</button>
    </div>
  );
};

export default OnboardingModal;