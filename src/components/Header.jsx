import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="main-header">
      <nav className="header-nav">
        <Link 
          to="/" 
          className={`header-link ${isActive('/') ? 'active' : ''}`}
        >
          Главная
        </Link>
        <Link 
          to="/nikolaev" 
          className={`header-link ${isActive('/nikolaev') ? 'active' : ''}`}
        >
          AR Nikolaev
        </Link>
        <Link 
          to="/gagarin" 
          className={`header-link ${isActive('/gagarin') ? 'active' : ''}`}
        >
          AR Gagarin
        </Link>
        <Link 
          to="/quest" 
          className={`header-link ${isActive('/quest') ? 'active' : ''}`}
        >
          Квесты
        </Link>
      </nav>
    </header>
  );
};

export default Header; 