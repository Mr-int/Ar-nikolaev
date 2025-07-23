import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  width: '100%',
  background: '#18181a',
  borderBottom: '1px solid #23232b',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
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
  background: '#fff',
  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
};

const linkStyle = {
  background: '#18181a',
  color: '#fff',
  fontWeight: 700,
  borderRadius: '20px',
  padding: '0.5em 1.2em',
  fontSize: '1em',
  border: '2px solid #18181a',
  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
  transition: 'background 0.2s, color 0.2s, border 0.2s, transform 0.2s',
  textAlign: 'center',
  minWidth: 90,
  display: 'inline-block',
};

const linkHover = {
  background: '#fff',
  color: '#18181a',
  border: '2px solid #ff3333',
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