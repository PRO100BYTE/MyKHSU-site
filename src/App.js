import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import './App.css';

// Lazy loading для страниц
const Home = lazy(() => import('./pages/Home/Home'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicy'));
const HelpUs = lazy(() => import('./pages/HelpUs/HelpUs'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/help-us" element={<HelpUs />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;