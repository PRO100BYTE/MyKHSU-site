import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/globals.css';
import App from './App';

// Функция для принудительного обновления стилей
const forceStylesRefresh = () => {
  if (process.env.NODE_ENV === 'development') {
    // В режиме разработки периодически обновляем стили
    setInterval(() => {
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(link => {
        const url = new URL(link.href);
        url.searchParams.set('forceRefresh', Date.now());
        link.href = url.href;
      });
    }, 1000);
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// Обработчик для сброса прокрутки при загрузке страницы
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// Обработчик для предотвращения сохранения позиции скролла при навигации
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Инициализация принудительного обновления стилей
forceStylesRefresh();