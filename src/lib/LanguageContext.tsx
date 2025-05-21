'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react'
import { Language } from './translations'

type LanguageContextType = {
  language: Language
  isTransitioning: boolean
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Set default language to Vietnamese or get from localStorage if available
  const [language, setLanguageState] = useState<Language>('vi')
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  // Initialize from localStorage when component mounts (client-side only)
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'vi')) {
      setLanguageState(savedLanguage)
    }
  }, [])
  
  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])
  
  // Set language with transition effect
  const setLanguage = (lang: Language) => {
    if (lang === language) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setLanguageState(lang)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }, 100)
  }
  
  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi')
  }
  
  return (
    <LanguageContext.Provider value={{ language, isTransitioning, setLanguage, toggleLanguage }}>
      <div className={isTransitioning ? 'opacity-95' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 