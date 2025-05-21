'use client'

import React from 'react'
import Image from 'next/image'
import Container from '../ui/Container'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'

const HowItWorksSection = () => {
  const { language } = useLanguage()

  const steps = [
    {
      icon: '/images/upload-icon.svg',
      title: translations.howItWorks[language].step1.title,
      description: translations.howItWorks[language].step1.description,
    },
    {
      icon: '/images/review-icon.svg',
      title: translations.howItWorks[language].step2.title,
      description: translations.howItWorks[language].step2.description,
    },
    {
      icon: '/images/distribute-icon.svg',
      title: translations.howItWorks[language].step3.title,
      description: translations.howItWorks[language].step3.description,
    },
    {
      icon: '/images/analytics-icon.svg',
      title: translations.howItWorks[language].step4.title,
      description: translations.howItWorks[language].step4.description,
    },
  ]

  return (
    <section id="how-it-works" className="bg-gray-900 py-20 text-white">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {translations.howItWorks[language].title}
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {translations.howItWorks[language].subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image 
                  src={step.icon} 
                  alt={step.title} 
                  width={32} 
                  height={32}
                  className="text-blue-400"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {step.title}
              </h3>
              <p className="text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#pricing" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            {translations.howItWorks[language].cta}
          </a>
        </motion.div>
      </Container>
    </section>
  )
}

export default HowItWorksSection 