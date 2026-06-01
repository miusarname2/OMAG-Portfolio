"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';

const dictionaries = { en, es };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect user language
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('es')) {
      setLanguage('es');
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    return dictionaries[language]?.[key] || key;
  };

  if (!mounted) {
    // Avoid hydration mismatch by rendering a generic frame or waiting
    // For a simple app, rendering english initially is fine, but can cause flash.
    // We'll return children wrapped, but t() will use 'en' until mounted.
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
