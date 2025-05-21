'use client'

import React from 'react'
import Container from '../ui/Container'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'

type Plan = {
  name: string;
  price: string;
  yearlyPrice: string;
  description: string;
  features: string[];
}

const DistributionPlansSection = () => {
  const { language } = useLanguage()
  
  // Add distributionPlans to translations if it doesn't exist yet
  const t = translations.distributionPlans?.[language] || {
    title: 'Distribution Plans',
    subtitle: 'Choose the right plan for your music distribution needs',
    cta: 'Get Started',
    monthly: 'Monthly',
    yearly: 'Yearly',
    mostPopular: 'Most Popular',
    plans: [
      {
        name: 'Basic',
        price: '9.99',
        yearlyPrice: '99.99',
        description: 'Perfect for new artists',
        features: [
          'Up to 2 releases per year',
          'Distribution to 50+ platforms',
          'Basic analytics',
          'Standard support',
          '85% revenue share'
        ]
      },
      {
        name: 'Pro',
        price: '19.99',
        yearlyPrice: '199.99',
        description: 'For growing artists',
        features: [
          'Unlimited releases',
          'Distribution to 150+ platforms',
          'Advanced analytics',
          'Priority support',
          '90% revenue share',
          'Pre-save links'
        ]
      },
      {
        name: 'Premium',
        price: '29.99',
        yearlyPrice: '299.99',
        description: 'For established artists',
        features: [
          'Unlimited releases',
          'Distribution to 200+ platforms',
          'Premium analytics & insights',
          '24/7 dedicated support',
          '100% revenue share',
          'Marketing tools',
          'Playlist pitching'
        ]
      }
    ]
  }
  
  const [billing, setBilling] = React.useState('monthly')
  
  return (
    <section id="pricing" className="bg-gray-900 py-20">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t.title}
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t.subtitle}
          </motion.p>
          
          {/* Billing toggle */}
          <div className="flex justify-center mt-8">
            <div className="bg-gray-800 p-1 rounded-full flex items-center">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  billing === 'monthly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setBilling('monthly')}
              >
                {t.monthly}
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  billing === 'yearly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setBilling('yearly')}
              >
                {t.yearly}
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.plans.map((plan: Plan, index: number) => {
            const isPopular = index === 1
            return (
              <motion.div 
                key={index}
                className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg ${
                  isPopular ? 'border-2 border-blue-500 relative' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {isPopular && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t.mostPopular}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${billing === 'monthly' ? plan.price : plan.yearlyPrice}</span>
                    <span className="text-gray-400 ml-2">{billing === 'monthly' ? '/mo' : '/year'}</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 rounded-full font-semibold ${
                      isPopular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    {t.cta}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default DistributionPlansSection 