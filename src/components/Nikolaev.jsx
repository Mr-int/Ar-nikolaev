import React, { useEffect, useState } from 'react';
import '../styles/buttons.css';
import '../redirect.css';

const getLink = () => {
  const hours = new Date().getHours();
  if (hours >= 6 && hours < 20) {
    return 'https://xr.mix-ar.ru/q?id=2776';
  } else {
    return 'https://xr.mix-ar.ru/q?id=2912';
  }
};

const Nikolaev = () => {
  const [link, setLink] = useState('#');

  useEffect(() => {
    setLink(getLink());
  }, []);

  return (
    <div className="white-block">
      <div style={{width: '100%', display: 'flex'}}>
        <a href="/" className="back-btn">Вернуться назад</a>
      </div>
      <h2>AR Николаев</h2>
      <div style={{color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center'}}>
        Если у вас <b>iPhone</b>, откройте сайт через Safari
      </div>
      <ol style={{margin: 0, paddingLeft: '1.2em', marginBottom: '2rem', color: '#444'}}>
        <li>Нажмите «Оживить историю».</li>
        <li>В открывшемся сайте — нажмите «View».</li>
        <li>Установите приложение MixAR, если потребуется.</li>
        <li>В приложении разрешите доступ к камере.</li>
        <li>Наведите камеру на памятник — и смотрите, как он оживает!</li>
      </ol>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <a href={link} className="btn" id="ar-button">Оживить историю</a>
      </div>
    </div>
  );
};

export default Nikolaev; 