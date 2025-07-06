import React from 'react';
import '../index.css';
import '../redirect.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
    <div className="stars"></div>
    <div className="container" style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.25)', padding: '48px 32px', marginTop: '60px' }}>
      <div style={{ fontSize: '3.5rem', marginBottom: '18px' }}>🌟</div>
      <h1 style={{ fontWeight: 700, letterSpacing: '1px', marginBottom: '10px' }}>Добро пожаловать!</h1>
      <h2 style={{ fontWeight: 400, fontSize: '1.4em', color: '#aad8ff', marginBottom: '32px' }}>Выберите раздел</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', alignItems: 'center', marginTop: '30px' }}>
        <Link to="/monuments" className="cta-button" style={{ width: '80%', maxWidth: 320, fontSize: '1.15em', borderRadius: '25px', background: 'linear-gradient(90deg, #43cea2 60%, #185a9d 100%)', boxShadow: '0 4px 16px rgba(67,206,162,0.15)' }}>
          AR
        </Link>
        <a href="https://gamechebminiapp.onrender.com/" className="cta-button" style={{ width: '80%', maxWidth: 320, fontSize: '1.15em', borderRadius: '25px', background: 'linear-gradient(90deg, #007BFF 60%, #00c6ff 100%)', boxShadow: '0 4px 16px rgba(0,123,255,0.15)' }} target="_blank" rel="noopener noreferrer">
          Квесты
        </a>
      </div>
    </div>
  </div>
);

export default Home; 