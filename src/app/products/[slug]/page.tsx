import React from 'react'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Product = {
  id: number
  title: string
  category: string
  description: string
  imageUrl: string
  slug: string
  details?: {
    client?: string
    services?: string[]
    year?: string
    duration?: string
    challenge?: string
    solution?: string
  }
}

const products: Product[] = [
  {
    id: 1,
    title: "Dự án âm thanh kỹ thuật số",
    category: "Âm thanh",
    description: "Dự án âm thanh kỹ thuật số phục vụ cho các sự kiện trực tuyến và trực tiếp với hệ thống âm thanh chất lượng cao.",
    imageUrl: "/images/placeholder-1.jpg",
    slug: "du-an-am-thanh-ky-thuat-so",
    details: {
      client: "Festival Âm nhạc Việt Nam",
      services: ["Thiết kế âm thanh", "Sản xuất âm nhạc", "Kỹ thuật âm thanh sự kiện"],
      year: "2023",
      duration: "3 tháng",
      challenge: "Tạo ra hệ thống âm thanh có khả năng phục vụ cả trực tiếp và trực tuyến trong một sự kiện âm nhạc lớn với nhiều thể loại âm nhạc khác nhau và yêu cầu kỹ thuật cao.",
      solution: "Chúng tôi đã phát triển một hệ thống âm thanh hybrid kết hợp các công nghệ mới nhất để đảm bảo chất lượng âm thanh tốt nhất cho cả khán giả trực tiếp và trực tuyến. Giải pháp bao gồm hệ thống loa chuyên dụng, mixer kỹ thuật số và phần mềm xử lý âm thanh tiên tiến."
    }
  },
  {
    id: 2,
    title: "Thiết kế dàn nhạc hòa tấu",
    category: "Âm nhạc",
    description: "Thiết kế và biên soạn nhạc cho dàn nhạc hòa tấu với sự kết hợp độc đáo giữa nhạc cụ truyền thống và hiện đại.",
    imageUrl: "/images/placeholder-2.jpg",
    slug: "thiet-ke-dan-nhac-hoa-tau",
    details: {
      client: "Nhà hát Hòa nhạc và Nhạc kịch TP.HCM",
      services: ["Sáng tác âm nhạc", "Biên soạn hòa âm", "Chỉ đạo dàn nhạc"],
      year: "2022",
      duration: "6 tháng",
      challenge: "Kết hợp các nhạc cụ truyền thống Việt Nam với dàn nhạc giao hưởng hiện đại để tạo ra một tác phẩm âm nhạc đương đại nhưng vẫn giữ được bản sắc văn hóa.",
      solution: "Chúng tôi đã nghiên cứu sâu về đặc tính âm thanh của các nhạc cụ truyền thống và tìm ra cách kết hợp hài hòa với dàn nhạc giao hưởng. Chúng tôi cũng đã phát triển các kỹ thuật biên soạn mới để tạo ra một ngôn ngữ âm nhạc độc đáo, vừa hiện đại vừa mang đậm bản sắc Việt Nam."
    }
  },
  {
    id: 3,
    title: "Sản xuất phim tài liệu",
    category: "Phim",
    description: "Sản xuất phim tài liệu kể những câu chuyện chân thực và sâu sắc về các chủ đề văn hóa, xã hội và môi trường.",
    imageUrl: "/images/placeholder-3.jpg",
    slug: "san-xuat-phim-tai-lieu",
    details: {
      client: "Tổ chức Bảo tồn Thiên nhiên Việt Nam",
      services: ["Biên kịch", "Đạo diễn", "Quay phim", "Hậu kỳ"],
      year: "2023",
      duration: "9 tháng",
      challenge: "Ghi lại và kể câu chuyện về công tác bảo tồn các loài động vật hoang dã quý hiếm ở Việt Nam, thường ở những khu vực xa xôi với điều kiện quay phim khó khăn.",
      solution: "Đội ngũ của chúng tôi đã sử dụng thiết bị quay phim chuyên dụng cho điều kiện khắc nghiệt, kết hợp với kỹ thuật kể chuyện độc đáo và công nghệ hậu kỳ tiên tiến để tạo ra một bộ phim tài liệu hấp dẫn, chân thực và giàu tính giáo dục."
    }
  }
]

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const product = products.find(p => p.slug === params.slug)
  
  if (!product) {
    return {
      title: 'Sản phẩm không tồn tại | The Soul of Wind Group',
    }
  }
  
  return {
    title: `${product.title} | The Soul of Wind Group`,
    description: product.description,
  }
}

const ProductDetailPage = ({ params }: PageProps) => {
  const product = products.find(p => p.slug === params.slug)
  
  if (!product) {
    notFound()
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-primary text-white">
        <Container>
          <div className="text-center">
            <p className="text-accent-dark mb-4">{product.category}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{product.title}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {product.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Product Detail Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gray-200 rounded-lg aspect-w-16 aspect-h-9">
              {/* Placeholder for product image */}
              <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                <p className="text-gray-500">Hình ảnh sản phẩm</p>
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              {product.details && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Thông tin chi tiết</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.details.client && (
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Khách hàng</h3>
                          <p className="text-gray-600">{product.details.client}</p>
                        </div>
                      )}
                      
                      {product.details.year && (
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Năm thực hiện</h3>
                          <p className="text-gray-600">{product.details.year}</p>
                        </div>
                      )}
                      
                      {product.details.duration && (
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Thời gian</h3>
                          <p className="text-gray-600">{product.details.duration}</p>
                        </div>
                      )}
                      
                      {product.details.services && (
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Dịch vụ</h3>
                          <div className="flex flex-wrap gap-2">
                            {product.details.services.map((service, index) => (
                              <span key={index} className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {product.details.challenge && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Thách thức</h3>
                      <p className="text-gray-600">{product.details.challenge}</p>
                    </div>
                  )}
                  
                  {product.details.solution && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Giải pháp</h3>
                      <p className="text-gray-600">{product.details.solution}</p>
                    </div>
                  )}
                </div>
              )}
              
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Bạn quan tâm đến dự án này?</h3>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors"
                >
                  Liên hệ với chúng tôi
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-secondary">
        <Container>
          <h2 className="text-2xl font-semibold mb-8">Các sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="group">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden mb-4">
                    {/* Placeholder for product image */}
                    <div className="w-full h-full bg-primary/10"></div>
                  </div>
                  <div className="p-2">
                    <div className="text-sm text-accent mb-2">{relatedProduct.category}</div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      <Link href={`/products/${relatedProduct.slug}`}>{relatedProduct.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-3">{relatedProduct.description}</p>
                    <Link 
                      href={`/products/${relatedProduct.slug}`}
                      className="text-accent font-medium hover:underline inline-flex items-center"
                    >
                      Xem chi tiết
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
    </>
  )
}

export default ProductDetailPage 