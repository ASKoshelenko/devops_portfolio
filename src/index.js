import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


// Инициализация i18next
i18n
  .use(HttpBackend) // загрузка переводов с сервера
  .use(LanguageDetector) // определение предпочитаемого языка
  .use(initReactI18next) // передача i18n в react-i18next
  .init({
    fallbackLng: 'en', // язык по умолчанию
    debug: true, // вывод отладочной информации в консоль
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // путь к файлам локализации
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