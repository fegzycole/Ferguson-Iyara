import React from 'react';
import './Navbar.styles.scss'

const Navbar = () => {
  return(
    <header className="header">
      <ul>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#publications">Publications</a></li>
        <li><a href="#contact-me">Contact</a></li>
      </ul>
    </header>
  );
};

export default Navbar;
