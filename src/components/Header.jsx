import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{
    width: '100%',
    background: '#fff',
    borderBottom: '1px solid #e5e7eb',
    padding: '0.5rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
  }}>
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.5rem',
      maxWidth: 900,
      margin: '0 auto',
      padding: '0 1rem'
    }}>
      <Link to="/" className="btn" style={{background: 'none', color: '#2563eb'}}>Главная</Link>
      <Link to="/nikolaev" className="btn">AR Nikolaev</Link>
      <Link to="/gagarin" className="btn">AR Gagarin</Link>
      <Link to="/quest" className="btn">Квесты</Link>
    </nav>
  </header>
);

export default Header; 