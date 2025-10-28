import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useForceRefresh = () => {
  const location = useLocation();

  useEffect(() => {
    // Принудительное обновление стилей при смене маршрута
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      const href = link.href;
      link.href = '';
      link.href = href;
    });

    // Сброс CSS переменных и пересчет стилей
    document.body.style.display = 'none';
    document.body.offsetHeight; // Принудительный reflow
    document.body.style.display = '';
  }, [location.pathname]);
};