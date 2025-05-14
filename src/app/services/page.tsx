import React from 'react'
import Container from '@/components/ui/Container'
import Link from 'next/link'

export const metadata = {
  title: 'Dịch vụ | The Soul of Wind Group',
  description: 'Khám phá các dịch vụ chuyên nghiệp của The Soul of Wind Group trong lĩnh vực truyền thông',
}

type Service = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  slug: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Sản xuất nội dung",
    description: "Sản xuất nội dung video và âm thanh chất lượng cao cho nhiều nền tảng và mục đích khác nhau.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 13.5H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 10.5H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 6C5 5.05719 5 4.58579 5.29289 4.29289C5.58579 4 6.05719 4 7 4H17C17.9428 4 18.4142 4 18.7071 4.29289C19 4.58579 19 5.05719 19 6V18C19 18.9428 19 19.4142 18.7071 19.7071C18.4142 20 17.9428 20 17 20H7C6.05719 20 5.58579 20 5.29289 19.7071C5 19.4142 5 18.9428 5 18V6Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    features: [
      "Sản xuất video quảng cáo",
      "Sản xuất video tài liệu",
      "Sản xuất podcast",
      "Thiết kế âm thanh",
      "Xây dựng kịch bản sáng tạo"
    ],
    slug: "san-xuat-noi-dung"
  },
  {
    id: 2,
    title: "Chiến lược truyền thông",
    description: "Lập kế hoạch và phát triển chiến lược truyền thông toàn diện cho thương hiệu và tổ chức.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.75 12V10.8C9.75 9.26 10.84 8.73 12.17 9.52L13.21 10.14L14.25 10.76C15.58 11.55 15.58 12.83 14.25 13.62L13.21 14.24L12.17 14.86C10.84 15.65 9.75 15.12 9.75 13.58V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: [
      "Xây dựng chiến lược truyền thông tích hợp",
      "Tư vấn chiến lược thương hiệu",
      "Lập kế hoạch chiến dịch",
      "Nghiên cứu và phân tích đối tượng",
      "Đo lường hiệu quả truyền thông"
    ],
    slug: "chien-luoc-truyen-thong"
  },
  {
    id: 3,
    title: "Marketing số",
    description: "Dịch vụ tiếp thị kỹ thuật số có mục tiêu để tối đa hóa phạm vi tiếp cận và tương tác cho nội dung của bạn.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 8L8 11H11L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8L13 11H16L13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: [
      "Quảng cáo kỹ thuật số",
      "Tiếp thị nội dung",
      "Tối ưu hóa công cụ tìm kiếm (SEO)",
      "Tiếp thị mạng xã hội",
      "Email marketing"
    ],
    slug: "marketing-so"
  },
  {
    id: 4,
    title: "Tổ chức sự kiện",
    description: "Lập kế hoạch và thực hiện các sự kiện trực tuyến và trực tiếp, từ hội nghị đến buổi ra mắt sản phẩm.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: [
      "Sự kiện ra mắt và triển lãm",
      "Hội nghị và hội thảo",
      "Sự kiện âm nhạc và nghệ thuật",
      "Tổ chức sự kiện trực tuyến",
      "Quản lý và điều hành sự kiện"
    ],
    slug: "to-chuc-su-kien"
  }
]

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-primary text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Dịch vụ của chúng tôi</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Chúng tôi cung cấp các dịch vụ truyền thông chuyên nghiệp được thiết kế để giúp bạn kết nối với khán giả và đạt được mục tiêu kinh doanh.
            </p>
          </div>
        </Container>
      </section>

      {/* Service List */}
      <section className="py-16">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="bg-gray-100 rounded-lg p-8 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg 
                          className="w-5 h-5 text-accent mt-1 mr-2" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors mt-auto self-start"
                  >
                    Tìm hiểu thêm
                  </Link>
                </div>
                
                <div className="bg-gray-200 rounded-lg aspect-w-16 aspect-h-9 lg:aspect-auto flex items-center justify-center">
                  {/* Placeholder for service image */}
                  <p className="text-gray-500">Hình ảnh dịch vụ</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Bạn cần hỗ trợ cho dự án của mình?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Hãy liên hệ với chúng tôi ngay hôm nay để thảo luận về cách chúng tôi có thể hỗ trợ bạn 
              đạt được mục tiêu truyền thông và tiếp thị.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Liên hệ với chúng tôi
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ServicesPage 