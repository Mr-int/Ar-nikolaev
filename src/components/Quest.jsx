import React from 'react';
import '../styles/buttons.css';

const Quest = () => (
  <main className="container">
    <h2>Квесты GameCheb</h2>
    <a
      href="https://gamechebminiapp.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
      onClick={() => window.ym && window.ym(103368921, 'reachGoal', 'quest_click')}
    >
      Перейти к квестам
    </a>
    <a href="/" className="btn">Вернуться назад</a>
  </main>
);

export default Quest; 