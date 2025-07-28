import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../redirect.css';

const linkMapDay = new Map([
  ['nikolaev', 'https://xr.mix-ar.ru/q?id=2776'],
  ['gagarin', 'http://example.com/gagarin'],
  ['turing', 'http://example.com/turing'],
]);
const linkMapNight = new Map([
  ['nikolaev', 'https://xr.mix-ar.ru/q?id=2912'],
  ['gagarin', 'http://example.com/gagarin'],
  ['turing', 'http://example.com/turing'],
]);

const Redirect = () => {
  const { name } = useParams();
  const [link, setLink] = useState('#');
  const [label, setLabel] = useState('Оживить историю');
  const [monumentName, setMonumentName] = useState('');

  useEffect(() => {
    const hours = new Date().getHours();
    let url = '#';
    let text = 'Оживить историю';
    let name = '';
    
    if (hours >= 6 && hours < 20 && linkMapDay.has(name)) {
      url = linkMapDay.get(name);
      text = 'Оживить историю';
    } else if ((hours < 6 || hours >= 20) && linkMapNight.has(name)) {
      url = linkMapNight.get(name);
      text = 'Оживить историю';
    }
    
    // Определяем название памятника
    switch (name) {
      case 'nikolaev':
        name = 'Николаев';
        break;
      case 'gagarin':
        name = 'Гагарин';
        break;
      case 'turing':
        name = 'Тьюринг';
        break;
      default:
        name = 'Памятник';
    }
    
    setLink(url);
    setLabel(text);
    setMonumentName(name);

    // Генерация звёзд ночью
    if (hours >= 20 || hours < 6) {
      createStars();
    }
  }, [name]);

  function createStars() {
    if (document.querySelector('.stars')) return;
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    document.body.appendChild(starsContainer);
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * 100 + 'vh';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.animationDelay = Math.random() * 5 + 's';
      starsContainer.appendChild(star);
    }
  }

  return (
    <div className="white-block">
      <div className="ar-header">
        <a href="/" className="back-btn">Вернуться назад</a>
      </div>
      
      <div className="ar-hero">
        <div className="ar-icon">📷</div>
        <h2>AR {monumentName}</h2>
        <p className="ar-subtitle">
          Оживите памятник с помощью дополненной реальности
        </p>
      </div>
      
      <div className="instruction-block">
        <div className="iphone-note">
          <span className="iphone-label">iPhone</span> Откройте сайт через Safari для лучшего опыта
        </div>
        
        <ol>
          <li>Нажмите кнопку «Оживить историю» ниже</li>
          <li>В открывшемся сайте нажмите кнопку «View»</li>
          <li>Установите приложение MixAR, если потребуется</li>
          <li>В приложении разрешите доступ к камере</li>
          <li>Наведите камеру на памятник и смотрите, как он оживает!</li>
        </ol>
      </div>
      
      <div className="ar-action">
        <a href={link} className="cta-button ar-button btn-pulse" id="ar-button">
          {label}
        </a>
      </div>
    </div>
  );
};

export default Redirect; 