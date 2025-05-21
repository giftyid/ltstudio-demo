'use client'

import React from 'react'
import Link from 'next/link'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'

const CallToActionSection = () => {
  const { language } = useLanguage()
  
  return (
    <section className="py-24 bg-primary text-white">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations.callToAction[language].title}</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            {translations.callToAction[language].description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              href="/contact" 
              variant="primary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              {translations.callToAction[language].contactUs}
            </Button>
            <Button 
              href="/services" 
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10"
            >
              {translations.nav[language].services}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CallToActionSection 