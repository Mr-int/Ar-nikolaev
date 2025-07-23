import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/buttons.css';

const Monuments = () => (
  <main className="container">
    <h1>Памятники AR</h1>
    <h2 style={{fontWeight: 500, color: '#555', marginBottom: '2rem'}}>Выберите памятник для AR-экскурсии</h2>
    <div style={{display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%', maxWidth: 320}}>
      <Link to="/nikolaev" className="btn">AR Nikolaev</Link>
      <Link to="/gagarin" className="btn">AR Gagarin</Link>
      <Link to="/" className="btn">Назад</Link>
    </div>
  </main>
);

export default Monuments; 