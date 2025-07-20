import React, { useEffect, useState } from 'react';
import './turing.css';

const getLink = () => {
  const hours = new Date().getHours();
  if (hours >= 6 && hours < 20) {
    return 'http://example.com/turing';
  } else {
    return 'http://example.com/turing';
  }
};

const Turing = () => {
  const [link, setLink] = useState('#');

  useEffect(() => {
    setLink(getLink());
    if (new Date().getHours() >= 20 || new Date().getHours() < 6) {
      createStars();
    }
  }, []);

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
    <div className="instruction-block">
      <div className="iphone-note">
        Если у вас <span className="iphone-label">iPhone</span>,<br />
        откройте сайт через Safari
      </div>
      <ol>
        <li>Нажмите «Оживить историю».</li>
        <li>В открывшемся сайте — нажмите «View».</li>
        <li>Установите приложение MixAR, если потребуется.</li>
        <li>В приложении разрешите доступ к камере.</li>
        <li>Наведите камеру на памятник — и смотрите, как он оживает!</li>
      </ol>
      <a href={link} className="cta-button" id="ar-button">Оживить историю</a>
      <a href="/" className="cta-button" style={{ marginTop: '20px', display: 'inline-block' }}>
        Вернуться назад
      </a>
    </div>
  );
};

export default Turing; 