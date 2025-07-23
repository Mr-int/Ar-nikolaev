import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  width: '100%',
  background: 'rgba(24,24,26,0.98)',
  borderBottom: '1px solid #23232b',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60px',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.7rem',
  width: '100%',
  maxWidth: 420,
  margin: '0 auto',
  padding: '0.3rem 0.5rem',
  borderRadius: '18px',
  background: '#23232b',
  boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
};

const linkStyle = {
  background: 'linear-gradient(90deg, #ffb347 0%, #60a5fa 100%)',
  color: '#18181a',
  fontWeight: 700,
  borderRadius: '20px',
  padding: '0.5em 1.2em',
  fontSize: '1em',
  border: 'none',
  boxShadow: '0 1px 4px rgba(96,165,250,0.10)',
  transition: 'background 0.2s, color 0.2s, transform 0.2s',
  textAlign: 'center',
  minWidth: 90,
  display: 'inline-block',
};

const Header = () => (
  <header style={headerStyle}>
    <nav style={navStyle}>
      <Link to="/" className="btn" style={linkStyle}>Главная</Link>
      <Link to="/nikolaev" className="btn" style={linkStyle}>AR Nikolaev</Link>
      <Link to="/gagarin" className="btn" style={linkStyle}>AR Gagarin</Link>
      <Link to="/quest" className="btn" style={linkStyle}>Квесты</Link>
    </nav>
  </header>
);

export default Header; 