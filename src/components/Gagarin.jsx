import React, { useEffect, useState } from 'react';

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
    <main className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh'}}>
      <a href="/" className="btn" style={{background: 'none', color: '#2563eb', marginBottom: '1.5rem'}}>Вернуться назад</a>
      <h2>AR Гагарин</h2>
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
      <a href={link} className="btn" id="ar-button">Оживить историю</a>
    </main>
  );
};

export default Gagarin; 