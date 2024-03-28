// Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Your one-stop shop for all your ecommerce needs. We provide high-quality products and excellent customer service.</p>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><a href="/shop">Shop</a></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h2>Subscribe to Our Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-media">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p>&copy; 2024 Your Ecommerce App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
