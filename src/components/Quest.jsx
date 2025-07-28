import React from 'react';
import '../styles/buttons.css';

const Quest = () => (
  <main className="container">
    <div className="quest-hero">
      <h2>Квесты GameCheb</h2>
      <p className="quest-description">
        Отправьтесь в увлекательное путешествие по Чебоксарам! 
        Решайте загадки, находите артефакты и узнавайте историю города.
      </p>
    </div>
    
    <div className="quest-features">
      <div className="quest-feature">
        <div className="quest-icon">🎯</div>
        <h3>Интерактивные задания</h3>
        <p>Решайте головоломки и выполняйте миссии</p>
      </div>
      
      <div className="quest-feature">
        <div className="quest-icon">🗺️</div>
        <h3>Маршруты по городу</h3>
        <p>Исследуйте интересные места Чебоксар</p>
      </div>
      
      <div className="quest-feature">
        <div className="quest-icon">📚</div>
        <h3>История города</h3>
        <p>Узнавайте интересные факты о Чебоксарах</p>
      </div>
    </div>
    
    <div className="quest-actions">
      <a
        href="https://gamechebminiapp.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-large btn-game glow"
        onClick={() => window.ym && window.ym(103368921, 'reachGoal', 'quest_click')}
      >
        Начать квест
      </a>
      
      <a href="/" className="btn btn-outline">
        Вернуться на главную
      </a>
    </div>
  </main>
);

export default Quest; 