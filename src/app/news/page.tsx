import React from 'react'
import Container from '@/components/ui/Container'
import Link from 'next/link'

export const metadata = {
  title: 'Tin tức | The Soul of Wind Group',
  description: 'Các tin tức và cập nhật mới nhất từ The Soul of Wind Group',
}

type NewsItem = {
  id: number
  title: string
  date: string
  excerpt: string
  content?: string
  imageUrl: string
  slug: string
  category: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Ra mắt studio mới tại thành phố Hồ Chí Minh",
    date: "15/05/2023",
    excerpt: "Chúng tôi vui mừng thông báo về việc khai trương studio mới tại trung tâm thành phố Hồ Chí Minh, mở rộng khả năng sản xuất của chúng tôi.",
    imageUrl: "/images/news-1.jpg",
    slug: "ra-mat-studio-moi",
    category: "Công ty"
  },
  {
    id: 2,
    title: "Giải thưởng Thiết kế Âm thanh Xuất sắc",
    date: "28/06/2023",
    excerpt: "Dự án âm nhạc mới nhất của chúng tôi đã được vinh danh tại Lễ trao giải Thiết kế Âm thanh Châu Á năm 2023.",
    imageUrl: "/images/news-2.jpg",
    slug: "giai-thuong-thiet-ke-am-thanh",
    category: "Giải thưởng"
  },
  {
    id: 3,
    title: "Hợp tác với các nghệ sĩ quốc tế",
    date: "10/07/2023",
    excerpt: "The Soul of Wind Group bắt đầu chương trình hợp tác với các nghệ sĩ và nhà sản xuất quốc tế để mở rộng phạm vi sáng tạo.",
    imageUrl: "/images/news-3.jpg",
    slug: "hop-tac-voi-nghe-si-quoc-te",
    category: "Hợp tác"
  },
  {
    id: 4,
    title: "Tham gia Triển lãm Công nghệ Âm thanh Đông Nam Á",
    date: "05/08/2023",
    excerpt: "Đội ngũ của chúng tôi đã tham dự và trình bày tại Triển lãm Công nghệ Âm thanh Đông Nam Á 2023 tại Singapore.",
    imageUrl: "/images/news-4.jpg",
    slug: "tham-gia-trien-lam-cong-nghe-am-thanh",
    category: "Sự kiện"
  },
  {
    id: 5,
    title: "Ra mắt khóa học sản xuất podcast trực tuyến",
    date: "22/09/2023",
    excerpt: "Chúng tôi vui mừng giới thiệu khóa học sản xuất podcast trực tuyến mới dành cho những người mới bắt đầu và những nhà sản xuất đã có kinh nghiệm.",
    imageUrl: "/images/news-5.jpg",
    slug: "ra-mat-khoa-hoc-san-xuat-podcast",
    category: "Đào tạo"
  },
  {
    id: 6,
    title: "Dự án cộng đồng: Âm nhạc cho mọi người",
    date: "10/10/2023",
    excerpt: "Chúng tôi khởi động dự án cộng đồng 'Âm nhạc cho mọi người' nhằm mang âm nhạc đến với các khu vực nông thôn và vùng sâu vùng xa.",
    imageUrl: "/images/news-6.jpg",
    slug: "du-an-cong-dong-am-nhac-cho-moi-nguoi",
    category: "Cộng đồng"
  }
]

const NewsPage = () => {
  const categories = Array.from(new Set(newsItems.map(item => item.category)))

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-primary text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Tin tức & Sự kiện</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Cập nhật những tin tức và sự kiện mới nhất từ The Soul of Wind Group.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <Container>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium">Lọc theo:</span>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-accent text-white rounded-md">
                Tất cả
              </button>
              {categories.map((category) => (
                <button 
                  key={category} 
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className="group">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden mb-4">
                  {/* Placeholder for news image */}
                  <div className="w-full h-full bg-primary/10"></div>
                </div>
                <div className="p-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-accent">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
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

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Đăng ký nhận bản tin</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Đăng ký để nhận những cập nhật mới nhất, tin tức và thông báo về sự kiện từ The Soul of Wind Group.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Địa chỉ email của bạn" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors"
                >
                  Đăng ký
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-3">
                Chúng tôi tôn trọng quyền riêng tư của bạn. Bạn có thể hủy đăng ký bất cứ lúc nào.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default NewsPage 