'use client'

import React from 'react'
import Link from 'next/link'
import Container from '../ui/Container'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'

type NewsItem = {
  id: number
  titleVi: string
  titleEn: string
  date: string
  excerptVi: string
  excerptEn: string
  imageUrl: string
  slug: string
}

const latestNews: NewsItem[] = [
  {
    id: 1,
    titleVi: "Ra mắt studio mới tại thành phố Hồ Chí Minh",
    titleEn: "New Studio Launch in Ho Chi Minh City",
    date: "15/05/2023",
    excerptVi: "Chúng tôi vui mừng thông báo về việc khai trương studio mới tại trung tâm thành phố Hồ Chí Minh, mở rộng khả năng sản xuất của chúng tôi.",
    excerptEn: "We are excited to announce the opening of our new studio in central Ho Chi Minh City, expanding our production capabilities.",
    imageUrl: "/images/news-1.jpg",
    slug: "ra-mat-studio-moi"
  },
  {
    id: 2,
    titleVi: "Giải thưởng Thiết kế Âm thanh Xuất sắc",
    titleEn: "Excellence in Sound Design Award",
    date: "28/06/2023",
    excerptVi: "Dự án âm nhạc mới nhất của chúng tôi đã được vinh danh tại Lễ trao giải Thiết kế Âm thanh Châu Á năm 2023.",
    excerptEn: "Our latest music project has been honored at the 2023 Asian Sound Design Awards.",
    imageUrl: "/images/news-2.jpg",
    slug: "giai-thuong-thiet-ke-am-thanh"
  },
  {
    id: 3,
    titleVi: "Hợp tác với các nghệ sĩ quốc tế",
    titleEn: "Collaboration with International Artists",
    date: "10/07/2023",
    excerptVi: "The Soul of Wind Group bắt đầu chương trình hợp tác với các nghệ sĩ và nhà sản xuất quốc tế để mở rộng phạm vi sáng tạo.",
    excerptEn: "The Soul of Wind Group begins collaboration program with international artists and producers to expand creative reach.",
    imageUrl: "/images/news-3.jpg",
    slug: "hop-tac-voi-nghe-si-quoc-te"
  }
]

const LatestNewsSection = () => {
  const { language } = useLanguage()
  
  return (
    <section className="py-24">
      <Container>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">{translations.latestNews[language].title}</h2>
          <Link 
            href="/news" 
            className="text-accent font-medium hover:text-accent-dark transition-colors"
          >
            {translations.latestNews[language].viewAll} &rarr;
          </Link>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((item) => (
            <div key={item.id} className="group">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden mb-4">
                {/* Placeholder for news image */}
                <div className="w-full h-full bg-primary/10"></div>
              </div>
              <div className="p-2">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  <Link href={`/news/${item.slug}`}>
                    {language === 'vi' ? item.titleVi : item.titleEn}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-3">
                  {language === 'vi' ? item.excerptVi : item.excerptEn}
                </p>
                <Link 
                  href={`/news/${item.slug}`}
                  className="text-accent font-medium hover:underline inline-flex items-center"
                >
                  {translations.latestNews[language].readMore}
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path 
                      d="M6 12L10 8L6 4" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default LatestNewsSection 