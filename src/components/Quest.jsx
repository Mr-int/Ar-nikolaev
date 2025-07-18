import React from 'react';

const Quest = () => (
  <div className="quest-page">
    <h2>Страница квестов</h2>
    <a
      href="https://gamechebminiapp.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button"
      onClick={() => window.ym && window.ym(103368921, 'reachGoal', 'quest_click')}
    >
      Перейти к квестам
    </a>
  </div>
);

export default Quest; 