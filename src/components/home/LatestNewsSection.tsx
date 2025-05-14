import React from 'react'
import Link from 'next/link'
import Container from '../ui/Container'

type NewsItem = {
  id: number
  title: string
  date: string
  excerpt: string
  imageUrl: string
  slug: string
}

const latestNews: NewsItem[] = [
  {
    id: 1,
    title: "Ra mắt studio mới tại thành phố Hồ Chí Minh",
    date: "15/05/2023",
    excerpt: "Chúng tôi vui mừng thông báo về việc khai trương studio mới tại trung tâm thành phố Hồ Chí Minh, mở rộng khả năng sản xuất của chúng tôi.",
    imageUrl: "/images/news-1.jpg",
    slug: "ra-mat-studio-moi"
  },
  {
    id: 2,
    title: "Giải thưởng Thiết kế Âm thanh Xuất sắc",
    date: "28/06/2023",
    excerpt: "Dự án âm nhạc mới nhất của chúng tôi đã được vinh danh tại Lễ trao giải Thiết kế Âm thanh Châu Á năm 2023.",
    imageUrl: "/images/news-2.jpg",
    slug: "giai-thuong-thiet-ke-am-thanh"
  },
  {
    id: 3,
    title: "Hợp tác với các nghệ sĩ quốc tế",
    date: "10/07/2023",
    excerpt: "The Soul of Wind Group bắt đầu chương trình hợp tác với các nghệ sĩ và nhà sản xuất quốc tế để mở rộng phạm vi sáng tạo.",
    imageUrl: "/images/news-3.jpg",
    slug: "hop-tac-voi-nghe-si-quoc-te"
  }
]

const LatestNewsSection = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Tin tức mới nhất</h2>
          <Link 
            href="/news" 
            className="text-accent font-medium hover:text-accent-dark transition-colors"
          >
            Xem tất cả tin tức &rarr;
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
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </h3>
                <p className="text-gray-600 mb-3">{item.excerpt}</p>
                <Link 
                  href={`/news/${item.slug}`}
                  className="text-accent font-medium hover:underline inline-flex items-center"
                >
                  Đọc thêm
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