import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from "react-router-dom";
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import App from './app';

const Root = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/register' || location.pathname === '/login';

  return (
    <>
      <AppHeader />
      <App />
      {!hideFooter && <AppFooter />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode >
);

reportWebVitals();
