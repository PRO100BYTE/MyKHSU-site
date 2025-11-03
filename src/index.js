import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/globals.css';
import App from './App';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://f45db8a56846766f9d2b6b26162a9d76@sentry.sculkmetrics.com/7",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

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