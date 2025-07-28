import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/buttons.css';

const Monuments = () => (
  <main className="container">
    <div className="monuments-hero">
      <h1>Памятники AR</h1>
      <p className="monuments-subtitle">
        Выберите памятник для AR-экскурсии и оживите историю
      </p>
    </div>
    
    <div className="monuments-grid">
      <div className="monument-card">
        <div className="monument-icon">📷</div>
        <h3>AR Николаев</h3>
        <p>Памятник Николаю Ивановичу Николаеву</p>
        <Link to="/nikolaev" className="btn btn-secondary btn-camera">
          Открыть AR
        </Link>
      </div>
      
      <div className="monument-card">
        <div className="monument-icon">🚀</div>
        <h3>AR Гагарин</h3>
        <p>Памятник Юрию Алексеевичу Гагарину</p>
        <Link to="/gagarin" className="btn btn-accent btn-camera">
          Открыть AR
        </Link>
      </div>
    </div>
    
    <div className="monuments-actions">
      <Link to="/" className="btn btn-outline">
        Вернуться на главную
      </Link>
    </div>
  </main>
);

export default Monuments; 