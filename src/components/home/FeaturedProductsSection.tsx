'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../ui/Container'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'

type Product = {
  id: number
  titleVi: string
  titleEn: string
  categoryVi: string
  categoryEn: string
  imageUrl: string
  slug: string
}

const featuredProducts: Product[] = [
  {
    id: 1,
    titleVi: "Dự án âm thanh kỹ thuật số",
    titleEn: "Digital Sound Project",
    categoryVi: "Âm thanh",
    categoryEn: "Sound",
    imageUrl: "/images/placeholder-1.jpg",
    slug: "du-an-am-thanh-ky-thuat-so"
  },
  {
    id: 2,
    titleVi: "Thiết kế dàn nhạc hòa tấu",
    titleEn: "Orchestral Design",
    categoryVi: "Âm nhạc",
    categoryEn: "Music",
    imageUrl: "/images/placeholder-2.jpg",
    slug: "thiet-ke-dan-nhac-hoa-tau"
  },
  {
    id: 3,
    titleVi: "Sản xuất phim tài liệu",
    titleEn: "Documentary Production",
    categoryVi: "Phim",
    categoryEn: "Film",
    imageUrl: "/images/placeholder-3.jpg",
    slug: "san-xuat-phim-tai-lieu"
  }
]

const FeaturedProductsSection = () => {
  const { language } = useLanguage()
  
  return (
    <section className="py-24">
      <Container size="xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">{translations.featuredProducts[language].title}</h2>
          <Link 
            href="/products" 
            className="text-accent font-medium hover:text-accent-dark transition-colors"
          >
            {translations.featuredProducts[language].viewAll} &rarr;
          </Link>
        </div>
        
        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                {/* Using a div as placeholder for product image */}
                <div className="w-full h-full bg-primary/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">
                  {language === 'vi' ? product.titleVi : product.titleEn}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === 'vi' ? product.categoryVi : product.categoryEn}
                </p>
              </div>
              <Link 
                href={`/products/${product.slug}`} 
                className="absolute inset-0 z-10" 
                aria-label={`${translations.featuredProducts[language].learnMore} ${language === 'vi' ? product.titleVi : product.titleEn}`}
              ></Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProductsSection 