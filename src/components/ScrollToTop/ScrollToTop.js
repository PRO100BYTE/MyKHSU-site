import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокрутка к верху страницы при изменении маршрута
    window.scrollTo(0, 0);
    
    // Принудительное обновление стилей для предотвращения проблем с рендерингом
    const forceStyleRefresh = () => {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 10);
    };
    
    forceStyleRefresh();
  }, [pathname]);

  return null;
};

export default ScrollToTop;