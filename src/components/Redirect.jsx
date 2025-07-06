import React, { useEffect, useState } from 'react';
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

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

const Redirect = () => {
  const [link, setLink] = useState('#');
  const [label, setLabel] = useState('Оживить историю');

  useEffect(() => {
    const name = getQueryParam('name');
    const hours = new Date().getHours();
    let url = '#';
    let text = 'Неизвестная ссылка';
    if (hours >= 6 && hours < 20 && linkMapDay.has(name)) {
      url = linkMapDay.get(name);
      text = 'Оживить историю';
    } else if ((hours < 6 || hours >= 20) && linkMapNight.has(name)) {
      url = linkMapNight.get(name);
      text = 'Оживить историю';
    }
    setLink(url);
    setLabel(text);

    // Генерация звёзд ночью
    if (hours >= 20 || hours < 6) {
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
      <a href={link} className="cta-button" id="ar-button">{label}</a>
    </div>
  );
};

export default Redirect; 