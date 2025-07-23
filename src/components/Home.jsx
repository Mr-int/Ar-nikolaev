import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <main className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh'}}>
    <h1>GameCheb</h1>
    <p style={{maxWidth: 500, textAlign: 'center'}}>
      GameCheb — это проект, объединяющий современные AR-технологии, квесты и интерактивные маршруты по Чебоксарам.<br/><br/>
      Мы делаем город интереснее и доступнее для всех!<br/><br/>
      Присоединяйтесь к нам и откройте новые грани города вместе с GameCheb.
    </p>
    <Link to="/quest" className="btn" style={{marginTop: '2rem'}}>Перейти к квестам</Link>
  </main>
);

export default Home; 