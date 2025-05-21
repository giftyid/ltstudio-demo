'use client'

import React from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'
import { cn } from '@/lib/utils'

type LanguageToggleProps = {
  className?: string
  type?: 'text' | 'button' | 'flag'
}

const LanguageToggle = ({ className, type = 'flag' }: LanguageToggleProps) => {
  const { language, toggleLanguage, isTransitioning } = useLanguage()

  if (type === 'flag') {
    return (
      <button 
        onClick={toggleLanguage}
        className={cn(
          "flex items-center justify-center h-8 w-8 rounded overflow-hidden border border-gray-200 hover:opacity-80 transition-all duration-300",
          isTransitioning ? "scale-95 opacity-50" : "",
          className
        )}
        aria-label={`Switch to ${language === 'vi' ? 'English' : 'Vietnamese'}`}
        title={language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
        disabled={isTransitioning}
      >
        {language === 'vi' ? (
          // UK Flag (when current language is Vietnamese)
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-[#012169]" />
            <div className="absolute inset-0">
              <div className="absolute left-0 top-0 right-0 bottom-0">
                {/* Red cross */}
                <div className="absolute left-0 right-0 top-[calc(50%-1px)] h-[2px] bg-white" />
                <div className="absolute top-0 bottom-0 left-[calc(50%-1px)] w-[2px] bg-white" />
                {/* Diagonal white stripes */}
                <div className="absolute w-[28px] h-[1px] bg-white origin-top-left rotate-45 translate-x-0 translate-y-0" />
                <div className="absolute w-[28px] h-[1px] bg-white origin-top-right -rotate-45 translate-x-full translate-y-0" />
                <div className="absolute w-[28px] h-[1px] bg-white origin-bottom-left -rotate-45 translate-x-0 translate-y-full" />
                <div className="absolute w-[28px] h-[1px] bg-white origin-bottom-right rotate-45 translate-x-full translate-y-full" />
              </div>
            </div>
          </div>
        ) : (
          // Vietnam Flag (when current language is English)
          <div className="w-full h-full bg-[#da251d] flex items-center justify-center">
            <div className="text-[#ffff00] text-xl">★</div>
          </div>
        )}
      </button>
    )
  }

  if (type === 'text') {
    return (
      <button 
        onClick={toggleLanguage}
        className={cn(
          "text-sm font-medium hover:text-accent transition-colors",
          isTransitioning ? "opacity-50" : "",
          className
        )}
        aria-label={`Switch to ${language === 'vi' ? 'English' : 'Vietnamese'}`}
        disabled={isTransitioning}
      >
        {translations.language[language].switch}
      </button>
    )
  }

  return (
    <button 
      onClick={toggleLanguage}
      className={cn(
        "px-2 py-1 text-sm font-medium rounded border border-gray-200 hover:bg-gray-50 hover:text-accent transition-colors",
        isTransitioning ? "opacity-50" : "",
        className
      )}
      aria-label={`Switch to ${language === 'vi' ? 'English' : 'Vietnamese'}`}
      disabled={isTransitioning}
    >
      {translations.language[language].switch}
    </button>
  )
}

export default LanguageToggle 