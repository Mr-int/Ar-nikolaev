import React from 'react';
import '../index.css';
import '../redirect.css';
import '../styles/monuments.css';
import { Link } from 'react-router-dom';

const Monuments = () => (
  <div className="monuments-root">
    <div className="stars"></div>
    <div className="monuments-container">
      <div className="monuments-icon">🏛️</div>
      <h1 className="monuments-title">Выберите памятник</h1>
      <h2 className="monuments-subtitle">Для AR-экскурсии</h2>
      <div className="monuments-links">
        <Link to="/nikolaev" className="cta-button monuments-link-nikolaev">
          Nikolaev
        </Link>
        <Link to="/gagarin" className="cta-button monuments-link-gagarin">
          Gagarin
        </Link>
        <Link to="/" className="cta-button monuments-link-back">
          Назад
        </Link>
      </div>
    </div>
  </div>
);

export default Monuments; 