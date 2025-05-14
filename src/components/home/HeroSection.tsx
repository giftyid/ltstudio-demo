import React from 'react'
import Link from 'next/link'
import Button from '../ui/Button'
import Container from '../ui/Container'

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-20">
      {/* Video background (placeholder) */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-primary-dark">
          {/* Placeholder for video background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
        </div>
      </div>
      
      {/* Hero content */}
      <Container className="relative z-20 text-center text-white py-10 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-down">
          The Soul of Wind Group
        </h1>
        <p className="text-base sm:text-xl md:text-2xl max-w-xs sm:max-w-xl md:max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in opacity-90">
          Sáng tạo những trải nghiệm truyền thông đắm chìm, thu hút và truyền cảm hứng cho khán giả trên toàn thế giới.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          <Button 
            href="/products" 
            variant="primary"
            size="lg"
            rightIcon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            Khám phá sản phẩm
          </Button>
          <Button 
            href="/about"
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white/10"
          >
            Về chúng tôi
          </Button>
        </div>
        
        {/* Feature highlights */}
        <div className="hidden sm:flex justify-center space-x-6 md:space-x-12 mt-12 md:mt-16">
          {[
            { icon: '🎬', text: 'Sáng tạo' },
            { icon: '🚀', text: 'Chuyên nghiệp' },
            { icon: '💡', text: 'Đổi mới' }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl mb-2">{item.icon}</span>
              <span className="text-sm md:text-base font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </Container>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden sm:block">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path 
            d="M12 5V19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection 