import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// translate

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// uz page

import xeaderUz from '../src/assets/language/uz/Xeader.json'
import homeUz from '../src/assets/language/uz/Home.json'
import abautUz from '../src/assets/language/uz/Abaut.json'
import contactUz from '../src/assets/language/uz/Contact.json'
import connectionUz from '../src/assets/language/uz/Connection.json'
import commonUz from '../src/assets/language/uz/Common.json'
import sidebarUz from '../src/assets/language/uz/Sidebar.json'
import projectsUz from '../src/assets/language/uz/Project.json'

// eng page

import xeaderEng from '../src/assets/language/eng/Xeader.json'
import homeEng from '../src/assets/language/eng/Home.json'
import abautEng from '../src/assets/language/eng/Abaut.json'
import contactEng from '../src/assets/language/eng/Contact.json'
import connectionEng from '../src/assets/language/eng/Connection.json'
import commonEng from '../src/assets/language/eng/Common.json'
import sidebarEng from '../src/assets/language/eng/Sidebar.json'
import projectsEng from '../src/assets/language/eng/Project.json'


// ru page

import xeaderRu from '../src/assets/language/ru/Xeader.json'
import homeRu from '../src/assets/language/ru/Home.json'
import abautRu from '../src/assets/language/ru/Abaut.json'
import contactRu from '../src/assets/language/ru/Contact.json'
import connectionRu from '../src/assets/language/ru/Connection.json'
import commonRu from '../src/assets/language/ru/Common.json'
import sidebarRu from '../src/assets/language/ru/Sidebar.json'
import projectsRu from '../src/assets/language/ru/Project.json'

// ===============

i18next
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'uz',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // language is stored in localStorage
    },
    resources: {
      uz: {
        translation: {
          ...xeaderUz,
          ...homeUz,
          ...abautUz,
          ...contactUz,
          ...connectionUz,
          ...commonUz,
          ...sidebarUz,
          ...projectsUz,
        }
      },
      en: {
        translation: {
          ...xeaderEng,
          ...homeEng,
          ...abautEng,
          ...contactEng,
          ...connectionEng,
          ...commonEng,
          ...sidebarEng,
          ...projectsEng,
        }
      },
      ru: {
        translation: {
          ...xeaderRu,
          ...homeRu,
          ...abautRu,
          ...contactRu,
          ...connectionRu,
          ...commonRu,
          ...sidebarRu,
          ...projectsRu,
        }
      }
    }
  });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
