import React from 'react'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Service = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  slug: string
  details?: {
    overview?: string
    process?: string[]
    benefits?: string[]
    cases?: Array<{
      title: string
      description: string
    }>
  }
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
    slug: "san-xuat-noi-dung",
    details: {
      overview: "Dịch vụ sản xuất nội dung của The Soul of Wind Group cung cấp giải pháp toàn diện từ khi lên ý tưởng đến khi hoàn thiện sản phẩm. Chúng tôi kết hợp giữa nghệ thuật kể chuyện và công nghệ tiên tiến để tạo ra những nội dung video và âm thanh hấp dẫn, độc đáo và hiệu quả.",
      process: [
        "Tư vấn và lên ý tưởng: Chúng tôi làm việc cùng bạn để xác định mục tiêu, đối tượng và thông điệp chính.",
        "Phát triển kịch bản: Phát triển kịch bản chi tiết và storyboard để đảm bảo tính mạch lạc và hiệu quả của nội dung.",
        "Sản xuất: Quay phim, thu âm và tạo các yếu tố hình ảnh/âm thanh với thiết bị chuyên nghiệp.",
        "Hậu kỳ: Biên tập, chỉnh sửa, thêm hiệu ứng và hoàn thiện sản phẩm.",
        "Phát hành: Hỗ trợ phân phối nội dung trên các nền tảng phù hợp để đạt hiệu quả tối đa."
      ],
      benefits: [
        "Nội dung chất lượng cao phù hợp với thương hiệu và mục tiêu của bạn",
        "Tối ưu ngân sách và thời gian sản xuất",
        "Tiếp cận đối tượng mục tiêu hiệu quả",
        "Tạo sự khác biệt trong thị trường cạnh tranh",
        "Đội ngũ sản xuất chuyên nghiệp với kinh nghiệm đa dạng"
      ],
      cases: [
        {
          title: "Chiến dịch quảng cáo cho thương hiệu thời trang",
          description: "Phát triển series video ngắn quảng bá bộ sưu tập mới, tăng lượng tương tác trên mạng xã hội 45%."
        },
        {
          title: "Podcast về khởi nghiệp sáng tạo",
          description: "Sản xuất series podcast 10 tập với các khách mời là doanh nhân thành công, đạt hơn 50,000 lượt nghe mỗi tập."
        }
      ]
    }
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
    slug: "chien-luoc-truyen-thong",
    details: {
      overview: "Dịch vụ chiến lược truyền thông của chúng tôi giúp các tổ chức và thương hiệu xây dựng, triển khai và đánh giá những chiến lược truyền thông hiệu quả, phù hợp với mục tiêu kinh doanh. Chúng tôi kết hợp giữa nghiên cứu thị trường, phân tích đối thủ cạnh tranh và hiểu biết sâu sắc về hành vi người tiêu dùng để tạo ra những chiến lược độc đáo và hiệu quả.",
      process: [
        "Đánh giá hiện trạng: Phân tích tình hình truyền thông hiện tại, xác định điểm mạnh, điểm yếu và cơ hội.",
        "Xác định mục tiêu: Thiết lập các mục tiêu truyền thông rõ ràng, đo lường được và phù hợp với mục tiêu kinh doanh.",
        "Phân tích đối tượng: Nghiên cứu và xác định đối tượng mục tiêu, hiểu rõ nhu cầu và hành vi của họ.",
        "Phát triển chiến lược: Xây dựng chiến lược truyền thông toàn diện với thông điệp, kênh truyền thông và lịch trình cụ thể.",
        "Triển khai và đánh giá: Hỗ trợ triển khai chiến lược, theo dõi và đánh giá hiệu quả, điều chỉnh khi cần thiết."
      ],
      benefits: [
        "Truyền thông nhất quán và hiệu quả",
        "Tối ưu hóa ngân sách truyền thông",
        "Tăng cường nhận diện thương hiệu",
        "Tiếp cận đúng đối tượng mục tiêu",
        "Đo lường được kết quả và ROI"
      ],
      cases: [
        {
          title: "Chiến lược tái định vị thương hiệu",
          description: "Giúp một thương hiệu thực phẩm truyền thống chuyển đổi hình ảnh để tiếp cận khách hàng trẻ, tăng doanh số 30% sau 6 tháng."
        },
        {
          title: "Chiến dịch ra mắt sản phẩm mới",
          description: "Phát triển chiến lược truyền thông tích hợp cho một sản phẩm công nghệ mới, đạt 150% chỉ tiêu đặt hàng trước."
        }
      ]
    }
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
    slug: "marketing-so",
    details: {
      overview: "Dịch vụ marketing số của The Soul of Wind Group cung cấp các giải pháp tiếp thị kỹ thuật số toàn diện giúp các doanh nghiệp tăng cường hiện diện trực tuyến, thu hút khách hàng mục tiêu và tăng trưởng doanh thu. Chúng tôi kết hợp sự sáng tạo, phân tích dữ liệu và công nghệ tiên tiến để phát triển và triển khai các chiến dịch marketing số hiệu quả.",
      process: [
        "Đánh giá hiện trạng số: Phân tích hiện diện trực tuyến hiện tại, website, mạng xã hội và các kênh số.",
        "Xây dựng chiến lược: Phát triển chiến lược marketing số phù hợp với mục tiêu kinh doanh và đối tượng mục tiêu.",
        "Tối ưu hóa kênh: Tối ưu website, mạng xã hội và các kênh số khác để tăng hiệu suất.",
        "Phát triển nội dung: Tạo nội dung hấp dẫn và có giá trị cho các kênh số.",
        "Quảng cáo và đo lường: Triển khai và quản lý các chiến dịch quảng cáo số, theo dõi hiệu suất và tối ưu hóa liên tục."
      ],
      benefits: [
        "Tăng lượng truy cập website và tỷ lệ chuyển đổi",
        "Cải thiện thứ hạng tìm kiếm trên Google",
        "Tăng cường tương tác trên mạng xã hội",
        "Phát triển cơ sở khách hàng tiềm năng",
        "ROI có thể đo lường được cho các hoạt động marketing"
      ],
      cases: [
        {
          title: "Chiến dịch SEO và content marketing",
          description: "Tăng lưu lượng truy cập hữu cơ 200% trong 6 tháng cho một công ty du lịch thông qua chiến lược SEO và content marketing."
        },
        {
          title: "Chiến dịch quảng cáo Facebook",
          description: "Phát triển và triển khai chiến dịch quảng cáo trên Facebook cho một thương hiệu mỹ phẩm mới, đạt tỷ lệ ROI 300%."
        }
      ]
    }
  }
]

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const service = services.find(s => s.slug === params.slug)
  
  if (!service) {
    return {
      title: 'Dịch vụ không tồn tại | The Soul of Wind Group',
    }
  }
  
  return {
    title: `${service.title} | The Soul of Wind Group`,
    description: service.description,
  }
}

const ServiceDetailPage = ({ params }: PageProps) => {
  const service = services.find(s => s.slug === params.slug)
  
  if (!service) {
    notFound()
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-primary text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Tổng quan dịch vụ</h2>
              {service.details && service.details.overview && (
                <p className="text-lg text-gray-700 mb-6">
                  {service.details.overview}
                </p>
              )}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Dịch vụ chính của chúng tôi</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
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
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-w-16 aspect-h-9">
              {/* Placeholder for service image */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">Hình ảnh dịch vụ</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      {service.details && service.details.process && service.details.process.length > 0 && (
        <section className="py-16 bg-secondary">
          <Container>
            <h2 className="text-3xl font-semibold mb-12 text-center">Quy trình làm việc</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {service.details.process.map((step, index) => {
                // Kiểm tra lại process để TypeScript hiểu rằng nó không phải undefined
                const processArray = service.details?.process;
                if (!processArray) return null;
                
                return (
                  <div key={index} className="relative">
                    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold mb-4">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                    {index < processArray.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Benefits Section */}
      {service.details && service.details.benefits && service.details.benefits.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="text-3xl font-semibold mb-12 text-center">Lợi ích của dịch vụ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.details.benefits.map((benefit, index) => {
                // Kiểm tra lại benefits để TypeScript hiểu rằng nó không phải undefined
                if (!service.details?.benefits) return null;
                
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Case Studies */}
      {service.details && service.details.cases && service.details.cases.length > 0 && (
        <section className="py-16 bg-secondary">
          <Container>
            <h2 className="text-3xl font-semibold mb-12 text-center">Dự án tiêu biểu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.details.cases.map((caseStudy, index) => {
                // Kiểm tra lại cases để TypeScript hiểu rằng nó không phải undefined
                if (!service.details?.cases) return null;
                
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">{caseStudy.title}</h3>
                    <p className="text-gray-700 mb-6">{caseStudy.description}</p>
                    <Link 
                      href="#" 
                      className="text-accent font-medium hover:underline inline-flex items-center"
                    >
                      Xem chi tiết dự án
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
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Sẵn sàng để bắt đầu?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Hãy liên hệ với chúng tôi ngay hôm nay để thảo luận về cách chúng tôi có thể hỗ trợ dự án của bạn.
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

      {/* Related Services */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-semibold mb-8">Dịch vụ liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <div key={relatedService.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    {relatedService.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{relatedService.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedService.description}</p>
                  <Link 
                    href={`/services/${relatedService.slug}`} 
                    className="text-accent font-medium hover:underline inline-flex items-center"
                  >
                    Tìm hiểu thêm
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
              ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default ServiceDetailPage 