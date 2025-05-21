'use client'

import React from 'react'
import Link from 'next/link'
import Button from '../ui/Button'
import Container from '../ui/Container'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const { language } = useLanguage()
  
  const features = [
    { 
      icon: '🎵', 
      text: language === 'en' ? 'Global Distribution' : 'Phân phối toàn cầu' 
    },
    { 
      icon: '💰', 
      text: language === 'en' ? 'Keep 100% Rights' : 'Giữ 100% quyền lợi' 
    },
    { 
      icon: '📊', 
      text: language === 'en' ? 'Advanced Analytics' : 'Phân tích nâng cao' 
    }
  ]
  
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background with music-related particle effects or waveform animation */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          {/* Add waveform animation background here */}
          <div className="absolute inset-0 bg-blue-900/20 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
        </div>
      </div>
      
      {/* Hero content */}
      <Container className="relative z-20 text-center text-white py-10 sm:py-16">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mirai Ongaku
        </motion.h1>
        <motion.div
          className="mb-2 text-blue-400 text-lg md:text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {language === 'en' ? 'Music Distribution Platform' : 'Nền Tảng Phân Phối Âm Nhạc'}
        </motion.div>
        <motion.p 
          className="text-base sm:text-xl md:text-2xl max-w-xs sm:max-w-xl md:max-w-3xl mx-auto mb-6 sm:mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {language === 'en' 
            ? 'Distribute your music to 200+ streaming platforms worldwide while keeping 100% of your rights and royalties.' 
            : 'Phân phối nhạc của bạn đến hơn 200 nền tảng trực tuyến trên toàn thế giới trong khi vẫn giữ 100% quyền lợi và tiền bản quyền.'}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            href="#pricing" 
            variant="primary"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            rightIcon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            {language === 'en' ? 'View Distribution Plans' : 'Xem Các Gói Phân Phối'}
          </Button>
          <Button 
            href="#how-it-works"
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white/10"
          >
            {language === 'en' ? 'How It Works' : 'Cách Thức Hoạt Động'}
          </Button>
        </motion.div>
        
        {/* Feature highlights */}
        <motion.div 
          className="hidden sm:flex justify-center space-x-6 md:space-x-12 mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl mb-2">{item.icon}</span>
              <span className="text-sm md:text-base font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </Container>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-400"
        >
          <path 
            d="M12 5V19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  )
}

export default HeroSection 