// NavBar.js

import React from 'react';
import '../index.css'

const Header = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;





