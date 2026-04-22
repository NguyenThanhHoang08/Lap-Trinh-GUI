import './SignUp.css';

export default function SignUp({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="signup-container" onClick={(e) => e.stopPropagation()}>
        <h2 className="signup-title">Sign up</h2>
        
        <form className="signup-form">
          <div className="form-row">
            <div className="form-group">
              <label>First name</label>
              <input type="text" placeholder="Input first name" />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text" placeholder="Input last name" />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="example.email@gmail.com" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input type="password" placeholder="Enter at least 8+ characters" required />
              <span className="eye-icon">👁️</span>
            </div>
          </div>

          <div className="terms-checkbox">
            <input type="checkbox" id="terms" defaultChecked />
            <label htmlFor="terms">
              By signing up, I agree with the <span>Terms of Use</span> & <span>Privacy Policy</span>
            </label>
          </div>

          <button type="submit" className="submit-btn">Sign up</button>
        </form>

        <p className="login-link">
          Already have an account? <span className="link-text">Log in</span>
        </p>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-login">
          <button className="social-btn google">G</button>
          <button className="social-btn facebook">f</button>
          <button className="social-btn apple"></button>
        </div>
      </div>
    </div>
  );
}