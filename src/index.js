import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function YandexMetrikaHit() {
  const location = useLocation();
  useEffect(() => {
    if (window.ym) {
      window.ym(103368921, 'hit', location.pathname + location.search);
    }
  }, [location]);
  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <YandexMetrikaHit />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
