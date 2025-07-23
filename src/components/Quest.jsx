import React from 'react';

const Quest = () => (
  <main className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh'}}>
    <h2>Квесты GameCheb</h2>
    <a
      href="https://gamechebminiapp.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
      style={{marginBottom: '1.5rem'}}
      onClick={() => window.ym && window.ym(103368921, 'reachGoal', 'quest_click')}
    >
      Перейти к квестам
    </a>
    <a href="/" className="btn" style={{background: 'none', color: '#2563eb'}}>Вернуться назад</a>
  </main>
);

export default Quest; 