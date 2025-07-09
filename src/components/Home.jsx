import React from 'react';
import '../index.css';
import '../redirect.css';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-root">
    <div className="stars"></div>
    <div className="home-container">
      <div className="home-icon">🌟</div>
      <h1 className="home-title">Добро пожаловать!</h1>
      <h2 className="home-subtitle">Выберите раздел</h2>
      <div className="home-links">
        <Link to="/monuments" className="cta-button home-link-ar">
          AR
        </Link>
        <Link to="/quest" className="cta-button home-link-quest">
          Квесты
        </Link>
      </div>
    </div>
  </div>
);

export default Home; 