import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import ar from '../locales/ar.json'

export const LANGUAGE_STORAGE_KEY = 'language'

function getStoredLanguage() {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
  return stored === 'ar' || stored === 'en' ? stored : 'en'
}

export function applyDocumentLanguage(lng) {
  if (typeof document === 'undefined') return
  const language = lng?.startsWith('ar') ? 'ar' : 'en'
  document.documentElement.lang = language
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
}

const initialLng = getStoredLanguage()
applyDocumentLanguage(initialLng)

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: initialLng,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  const language = lng?.startsWith('ar') ? 'ar' : 'en'
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  applyDocumentLanguage(language)
})

export default i18n
