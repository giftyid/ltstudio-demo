'use client'

import React from 'react'
import Container from '../ui/Container'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'

type Feature = {
  icon: string;
  title: string;
  description: string;
}

const FeaturesSection = () => {
  const { language } = useLanguage()
  
  // Check if features exists in translations, otherwise use fallback
  const features = translations.features?.[language] || {
    title: 'Platform Features',
    subtitle: 'Everything you need to succeed in the digital music world',
    items: [
      {
        icon: '🌐',
        title: 'Global Reach',
        description: 'Distribute your music to over 200 platforms including Spotify, Apple Music, TikTok, and more.'
      },
      {
        icon: '📊',
        title: 'Advanced Analytics',
        description: 'Track your performance with detailed statistics and insights about your listeners and streams.'
      },
      {
        icon: '💰',
        title: 'Clear Royalties',
        description: 'Receive 100% of your royalties with our premium plan. No hidden fees or complicated splits.'
      },
      {
        icon: '🔄',
        title: 'Automatic Updates',
        description: 'Update your music and metadata across all platforms with a single click.'
      },
      {
        icon: '🛡️',
        title: 'Copyright Protection',
        description: 'We help protect your music with content ID systems and anti-piracy measures.'
      },
      {
        icon: '🎧',
        title: 'Pre-Release Promotion',
        description: 'Build anticipation with pre-save links and promotional tools before your official release.'
      },
      {
        icon: '📱',
        title: 'Mobile Management',
        description: 'Manage your catalog, check statistics, and receive payments from your mobile device.'
      },
      {
        icon: '🤝',
        title: 'Artist Support',
        description: 'Our team of experts is available to help you with any questions or issues.'
      }
    ]
  }
  
  return (
    <section className="bg-gray-800 py-20">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {features.title}
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {features.subtitle}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.items.map((feature: Feature, index: number) => (
            <motion.div 
              key={index}
              className="bg-gray-900 rounded-lg p-6 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturesSection 