import React from 'react';
import '../index.css';
import '../styles/buttons.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <main className="container">
    <h1>GameCheb</h1>
    <p>
      GameCheb — это проект, объединяющий современные AR-технологии, квесты и интерактивные маршруты по Чебоксарам.
    </p>
    <p>
      Мы делаем город интереснее и доступнее для всех!
    </p>
    <p>
      Присоединяйтесь к нам и откройте новые грани города вместе с GameCheb.
    </p>
    <Link to="/quest" className="btn">Перейти к квестам</Link>
  </main>
);

export default Home; 