import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import tr from './tr.json'

const savedLanguage = localStorage.getItem('orbacle_language') || 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: savedLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('orbacle_language', lng)
})

export default i18n
