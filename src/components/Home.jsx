import React from 'react';
import '../index.css';
import '../styles/buttons.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <main className="container">
    <div className="hero-section">
      <h1>GameCheb</h1>
      <div className="hero-subtitle">
        <span className="gradient-text">AR-технологии</span> • <span className="gradient-text">Квесты</span> • <span className="gradient-text">Чебоксары</span>
      </div>
    </div>
    
    <div className="content-section">
      <p className="hero-description">
        GameCheb — это инновационный проект, объединяющий современные AR-технологии, 
        увлекательные квесты и интерактивные маршруты по Чебоксарам.
      </p>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <h3>AR-технологии</h3>
          <p>Оживляем историю с помощью дополненной реальности</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🎮</div>
          <h3>Интерактивные квесты</h3>
          <p>Исследуйте город в формате увлекательной игры</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🗺️</div>
          <h3>Маршруты</h3>
          <p>Откройте новые грани любимого города</p>
        </div>
      </div>
      
      <div className="how-it-works">
        <h2>Как это работает</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Выбор маршрута</h3>
            <p>Выбирайте интересный маршрут из доступных квестов</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Начало квеста</h3>
            <p>Запускайте квест и следуйте инструкциям бота</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Прохождение точек</h3>
            <p>Посещайте локации и выполняйте задания</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">04</div>
            <h3>Получение наград</h3>
            <p>Получайте призы и скидки от партнеров</p>
          </div>
        </div>
      </div>
      
      <p className="cta-text">
        Присоединяйтесь к нам и откройте новые грани города вместе с GameCheb!
      </p>
    </div>
    
    <div className="action-section">
      <Link to="/quest" className="btn btn-large btn-game glow">
        Перейти к квестам
      </Link>
      
      <div className="secondary-actions">
        <Link to="/nikolaev" className="btn btn-secondary btn-camera">
          AR Николаев
        </Link>
        <Link to="/gagarin" className="btn btn-accent btn-camera">
          AR Гагарин
        </Link>
      </div>
    </div>
  </main>
);

export default Home; 