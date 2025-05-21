'use client'

import React, { useState } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'
import { motion } from 'framer-motion'

const CallToActionSection = () => {
  const { language } = useLanguage()
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the email to your backend
    console.log('Email submitted:', email)
    setIsSubmitted(true)
    setEmail('')
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              {translations.callToAction[language].title}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {translations.callToAction[language].description}
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {language === 'en' ? 'Start your journey today' : 'Bắt đầu hành trình của bạn ngay hôm nay'}
              </h3>
              <p className="text-gray-400">
                {language === 'en' ? 'Join thousands of artists distributing their music globally' : 'Tham gia cùng hàng nghìn nghệ sĩ phân phối âm nhạc của họ trên toàn cầu'}
              </p>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'en' ? 'Enter your email' : 'Nhập email của bạn'}
                    required
                    className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  {language === 'en' ? 'Get Started Free' : 'Bắt Đầu Miễn Phí'}
                </button>
              </form>
            ) : (
              <div className="text-center py-3 bg-blue-500/20 rounded-md text-blue-300 border border-blue-500/30">
                {language === 'en' ? 'Thank you! We\'ll be in touch soon.' : 'Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.'}
              </div>
            )}
            
            <div className="mt-6 text-center text-sm text-gray-500">
              {language === 'en' ? 'No credit card required. Start with a free 14-day trial.' : 'Không cần thẻ tín dụng. Bắt đầu với bản dùng thử miễn phí 14 ngày.'}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default CallToActionSection 