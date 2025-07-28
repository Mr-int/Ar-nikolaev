import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/buttons.css';
import '../redirect.css';

const NotFound = () => (
  <div className="white-block">
    <div className="not-found-hero">
      <div className="not-found-icon">🔍</div>
      <h2>Упс, ошибка 404</h2>
      <p className="not-found-description">
        Похоже, что страница, которую вы ищете, не существует или была перемещена.
      </p>
    </div>
    
    <div className="not-found-suggestions">
      <h3>Попробуйте:</h3>
      <ul>
        <li>Проверить правильность URL</li>
        <li>Вернуться на главную страницу</li>
        <li>Использовать навигацию вверху</li>
      </ul>
    </div>
    
    <div className="not-found-actions">
      <Link to="/" className="btn btn-large">
        Вернуться на главную
      </Link>
    </div>
  </div>
);

export default NotFound; 