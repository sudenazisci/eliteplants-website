import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n';
import type { Language, TranslationDict } from '../i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('elite_plants_lang');
    if (saved && ['tr', 'en', 'es', 'fr', 'de', 'ru', 'zh', 'ja', 'ar'].includes(saved)) {
      return saved as Language;
    }
    // Detect browser language if possible, fallback to 'tr'
    const browserLang = navigator.language.split('-')[0];
    if (['tr', 'en', 'es', 'fr', 'de', 'ru', 'zh', 'ja', 'ar'].includes(browserLang)) {
      return browserLang as Language;
    }
    return 'tr';
  });

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('elite_plants_lang', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
