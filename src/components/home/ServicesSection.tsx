'use client'

import React from 'react'
import Link from 'next/link'
import Container from '../ui/Container'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'

type Service = {
  id: number
  titleVi: string
  titleEn: string
  descriptionVi: string
  descriptionEn: string
  icon: React.ReactNode
  slug: string
}

const services: Service[] = [
  {
    id: 1,
    titleVi: "Sản xuất nội dung",
    titleEn: "Content Production",
    descriptionVi: "Sản xuất nội dung video và âm thanh chất lượng cao cho nhiều nền tảng và mục đích khác nhau.",
    descriptionEn: "High-quality video and audio content production for multiple platforms and purposes.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 13.5H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 10.5H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 6C5 5.05719 5 4.58579 5.29289 4.29289C5.58579 4 6.05719 4 7 4H17C17.9428 4 18.4142 4 18.7071 4.29289C19 4.58579 19 5.05719 19 6V18C19 18.9428 19 19.4142 18.7071 19.7071C18.4142 20 17.9428 20 17 20H7C6.05719 20 5.58579 20 5.29289 19.7071C5 19.4142 5 18.9428 5 18V6Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    slug: "san-xuat-noi-dung"
  },
  {
    id: 2,
    titleVi: "Chiến lược truyền thông",
    titleEn: "Media Strategy",
    descriptionVi: "Lập kế hoạch và phát triển chiến lược truyền thông toàn diện cho thương hiệu và tổ chức.",
    descriptionEn: "Plan and develop comprehensive media strategies for brands and organizations.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.75 12V10.8C9.75 9.26 10.84 8.73 12.17 9.52L13.21 10.14L14.25 10.76C15.58 11.55 15.58 12.83 14.25 13.62L13.21 14.24L12.17 14.86C10.84 15.65 9.75 15.12 9.75 13.58V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    slug: "chien-luoc-truyen-thong"
  },
  {
    id: 3,
    titleVi: "Marketing số",
    titleEn: "Digital Marketing",
    descriptionVi: "Dịch vụ tiếp thị kỹ thuật số có mục tiêu để tối đa hóa phạm vi tiếp cận và tương tác cho nội dung của bạn.",
    descriptionEn: "Targeted digital marketing services to maximize reach and engagement for your content.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 8L8 11H11L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8L13 11H16L13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    slug: "marketing-so"
  }
]

const ServicesSection = () => {
  const { language } = useLanguage()
  
  return (
    <section className="py-24 bg-secondary">
      <Container>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          {translations.servicesSection[language].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'vi' ? service.titleVi : service.titleEn}
              </h3>
              <p className="mb-4 text-gray-600">
                {language === 'vi' ? service.descriptionVi : service.descriptionEn}
              </p>
              <Link 
                href={`/services/${service.slug}`} 
                className="text-accent font-medium hover:underline transition-colors"
              >
                {translations.featuredProducts[language].learnMore} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection 