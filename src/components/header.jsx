import React from 'react';
import './Header.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/SignUp">SignUp</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/addtoCard">My Card</Link></li>
          <li><Link to="/ProductList">Product Lists</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
