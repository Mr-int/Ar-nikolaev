import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="main-header">
      <nav className="header-nav">
        <Link to="/" className="header-link">Главное</Link>
        <div className="header-ar-buttons">
          <Link to="/nikolaev" className="header-link">AR Nikolaev</Link>
          <Link to="/gagarin" className="header-link">AR Gagarin</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 