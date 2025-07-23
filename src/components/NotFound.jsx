import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/buttons.css';
import '../redirect.css';

const NotFound = () => (
  <div className="white-block">
    <h2>Упс, ошибка 404</h2>
    <p>Тут ничего нет.</p>
    <Link to="/" className="btn">На главную</Link>
  </div>
);

export default NotFound; 