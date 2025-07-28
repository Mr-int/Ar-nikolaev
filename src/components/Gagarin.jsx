import React, { useEffect, useState } from 'react';
import '../styles/buttons.css';
import '../redirect.css';

const getLink = () => {
  const hours = new Date().getHours();
  return 'http://example.com/gagarin';
};

const Gagarin = () => {
  const [link, setLink] = useState('#');

  useEffect(() => {
    setLink(getLink());
  }, []);

  return (
    <div className="white-block">
      <div className="ar-header">
        <a href="/" className="back-btn">Вернуться назад</a>
      </div>
      
      <div className="ar-hero">
        <div className="ar-icon">🚀</div>
        <h2>AR Гагарин</h2>
        <p className="ar-subtitle">
          Оживите памятник Юрию Алексеевичу Гагарину с помощью дополненной реальности
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
          Оживить историю
        </a>
      </div>
    </div>
  );
};

export default Gagarin; 