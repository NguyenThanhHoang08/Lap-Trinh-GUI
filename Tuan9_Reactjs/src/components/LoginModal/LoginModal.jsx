import React from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  return (
    <div className="login-modal-container" onClick={(e) => e.stopPropagation()}>
      <button className="close-icon" onClick={onClose}>&times;</button>
      
      <div className="login-flex-box">
        {/* Banner bên trái */}
        <div className="login-banner">
          <div className="quote-text">
            "Embrace the art of cooking, where flavors come alive!"
          </div>
        </div>

        {/* Form bên phải */}
        <div className="login-form-area">
          <h2 className="title">Login</h2>
          <p className="hint">Enter your email to log in.</p>
          
          <input type="email" placeholder="Enter your email" className="input-field" />
          <button className="btn-submit">Continue</button>

          <div className="or-divider"><span>OR</span></div>

          <p className="policy-text">
            By continuing, you agree to the updated <span>Terms of Sale</span>, <span>Terms of Service</span>, and <span>Privacy Policy</span>.
          </p>

          <div className="social-group">
            <button className="btn-social">Continue with Google</button>
            <button className="btn-social">Continue with Facebook</button>
            <button className="btn-social">Continue with Apple</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;