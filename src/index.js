import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initializeApp } from 'firebase/app';

// Импорт Firebase конфигурации
const firebaseConfig = {
  apiKey: "AIzaSyAPNasTDuiZ0VAmK888CM9pXBZi0lus_hc",
  authDomain: "ddive-c5c2a.firebaseapp.com",
  projectId: "ddive-c5c2a",
  storageBucket: "ddive-c5c2a.appspot.com",
  messagingSenderId: "1022483861692",
  appId: "1:1022483861692:web:bc7431a9a2b54e416040b9"
};

// Инициализация Firebase
initializeApp(firebaseConfig);

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();