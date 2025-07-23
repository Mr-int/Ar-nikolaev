import React from 'react';
import '../index.css';
import '../redirect.css';
import '../styles/home.css';

const Home = () => (
  <div className="home-root">
    <div className="stars"></div>
    <div className="home-container home-about-center">
      <div className="home-icon">🎮</div>
      <h1 className="home-title">GameCheb</h1>
      <p className="home-about-text">
        GameCheb — это проект, объединяющий современные AR-технологии, квесты и интерактивные маршруты по Чебоксарам. Мы делаем город интереснее и доступнее для всех!<br/><br/>
        Присоединяйтесь к нам и откройте новые грани города вместе с GameCheb.
      </p>
    </div>
  </div>
);

export default Home; 