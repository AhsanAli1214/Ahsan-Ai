'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type PersonalityMode = 'friendly' | 'professional' | 'creative' | 'teacher';
export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'zh' | 'ar' | 'pt' | 'ko' | 'it' | 'hi' | 'tr' | 'ru' | 'nl' | 'sv' | 'pl' | 'id' | 'th' | 'vi' | 'tl' | 'el' | 'he' | 'ur';

export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

interface AppContextType {
  geminiApiKey: string | null;
  setGeminiApiKey: (key: string | null) => void;
  personalityMode: PersonalityMode;
  setPersonalityMode: (mode: PersonalityMode) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [geminiApiKey, setGeminiApiKeyValue] = useState<string | null>(null);
  const [personalityMode, setPersonalityModeValue] = useState<PersonalityMode>('creative');
  const [language, setLanguageValue] = useState<Language>('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedApiKey = localStorage.getItem('geminiApiKey');
      const storedPersonality = localStorage.getItem('personalityMode') as PersonalityMode;
      const storedLanguage = localStorage.getItem('language') as Language;

      if (storedApiKey) setGeminiApiKeyValue(storedApiKey);
      if (storedPersonality) setPersonalityModeValue(storedPersonality);
      if (storedLanguage) setLanguageValue(storedLanguage);
    } catch (e) {
      console.error('Could not load settings from localStorage', e);
    }
  }, []);

  const setGeminiApiKey = (key: string | null) => {
    setGeminiApiKeyValue(key);
    if (isMounted) {
      if (key) {
        localStorage.setItem('geminiApiKey', key);
      } else {
        localStorage.removeItem('geminiApiKey');
      }
    }
  };

  const setPersonalityMode = (mode: PersonalityMode) => {
    setPersonalityModeValue(mode);
    if (isMounted) {
      localStorage.setItem('personalityMode', mode);
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageValue(lang);
    if (isMounted) {
      localStorage.setItem('language', lang);
    }
  };

  if (!isMounted) {
    return null; // Or a loading spinner
  }

  return (
    <AppContext.Provider value={{ geminiApiKey, setGeminiApiKey, personalityMode, setPersonalityMode, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
