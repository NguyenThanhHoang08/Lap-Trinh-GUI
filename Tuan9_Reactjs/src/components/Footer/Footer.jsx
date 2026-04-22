 import './footer.css'
 
 export default function Footer() {
    return (
        <>
        {/* FOOTER */}
      <footer className="chefify-footer">
        <div className="footer-grid">
          <div className="footer-col about">
            <h3>About Us</h3>
            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email" />
              <button>Send</button>
            </div>
          </div>
          <div className="footer-col">
            <h3>Learn More</h3>
            <ul>
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
            </ul>
            <h3 style={{marginTop: '20px'}}>Shop</h3>
            <ul>
              <li>Gift Subscription</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Recipes</h3>
            <ul>
              <li>What to Cook This Week</li>
              <li>Pasta</li>
              <li>Dinner</li>
              <li>Healthy</li>
              <li>Vegetarian</li>
              <li>Vegan</li>
              <li>Christmas</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">chefify</div>
          <span>2023 Chefify Company</span>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </div>
      </footer>
        </>
    )
 }
