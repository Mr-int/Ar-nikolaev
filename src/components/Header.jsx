import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <header className="main-header">
    <nav className="header-nav">
      <Link to="/" className="header-link">Главная</Link>
      <Link to="/nikolaev" className="header-link">AR Nikolaev</Link>
      <Link to="/gagarin" className="header-link">AR Gagarin</Link>
      <Link to="/quest" className="header-link">Квесты</Link>
    </nav>
  </header>
);

export default Header; 