import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh'}}>
    <h2>Упс, ошибка 404</h2>
    <p>Тут ничего нет.</p>
    <Link to="/" className="btn" style={{marginTop: '2rem'}}>На главную</Link>
  </main>
);

export default NotFound; 