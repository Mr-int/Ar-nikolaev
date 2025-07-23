import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{
    width: '100vw',
    left: 0,
    top: 0,
    position: 'sticky',
    zIndex: 100,
    background: 'linear-gradient(90deg, #f7f7fa 0%, #e0e7ff 100%)',
    boxShadow: '0 2px 12px rgba(37,99,235,0.06)',
    borderBottom: '1px solid #e5e7eb',
    minHeight: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  }}>
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.2rem',
      width: '100%',
      maxWidth: 900,
      padding: '0 1rem',
    }}>
      <Link to="/" className="btn" style={{background: 'none', color: '#2563eb', fontWeight: 800}}>Главная</Link>
      <Link to="/nikolaev" className="btn" style={{background: 'none', color: '#2563eb'}}>AR Nikolaev</Link>
      <Link to="/gagarin" className="btn" style={{background: 'none', color: '#2563eb'}}>AR Gagarin</Link>
      <Link to="/quest" className="btn" style={{background: 'none', color: '#2563eb'}}>Квесты</Link>
    </nav>
  </header>
);

export default Header; 