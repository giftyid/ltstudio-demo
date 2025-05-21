'use client'

import React from 'react'
import Image from 'next/image'
import Container from '../ui/Container'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'

type Testimonial = {
  name: string;
  image: string;
  role: string;
  quote: string;
}

const SuccessStoriesSection = () => {
  const { language } = useLanguage()
  
  // Add successStories to translations if it doesn't exist yet
  const t = translations.successStories?.[language] || {
    title: 'Success Stories',
    subtitle: 'Hear from artists who have grown their careers with our platform',
    testimonials: [
      {
        name: 'Alex Rivers',
        image: '/images/artist1.jpg',
        role: 'Electronic Music Producer',
        quote: 'Since joining Mirai Ongaku, my streams have increased by 400%. Their distribution network is incredible, and the analytics tools help me understand my audience better.'
      },
      {
        name: 'Melody Chen',
        image: '/images/artist2.jpg',
        role: 'Singer-Songwriter',
        quote: 'I love how easy it is to update my releases across all platforms. The team is always responsive and I get paid on time, every time. Couldn\'t be happier!'
      },
      {
        name: 'The Nova Collective',
        image: '/images/artist3.jpg',
        role: 'Indie Band',
        quote: 'We switched to Mirai Ongaku last year and it was the best decision we made. The promotional tools helped us reach new listeners and our revenue has doubled.'
      }
    ]
  }
  
  return (
    <section className="bg-gray-900 py-20">
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial: Testimonial, index: number) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-700 flex-shrink-0">
                  {/* Placeholder for artist image */}
                  <div className="w-full h-full bg-blue-800/30 flex items-center justify-center text-blue-400">
                    <span className="text-xl font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                  <p className="text-blue-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <svg className="text-blue-600 w-10 h-10 absolute -top-6 -left-2 opacity-20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8c-4.418 0-8 3.582-8 8v12h12v-12h-6c0-3.314 2.686-6 6-6v-2zm20 0c-4.418 0-8 3.582-8 8v12h12v-12h-6c0-3.314 2.686-6 6-6v-2z" />
                </svg>
                <p className="text-gray-300 italic relative z-10">{testimonial.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SuccessStoriesSection 