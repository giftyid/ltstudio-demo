import React from 'react'
import Container from '@/components/ui/Container'
import Link from 'next/link'

export const metadata = {
  title: 'Sản phẩm | The Soul of Wind Group',
  description: 'Khám phá bộ sưu tập các sản phẩm và dự án của The Soul of Wind Group',
}

type Product = {
  id: number
  title: string
  category: string
  description: string
  imageUrl: string
  slug: string
}

const products: Product[] = [
  {
    id: 1,
    title: "Dự án âm thanh kỹ thuật số",
    category: "Âm thanh",
    description: "Dự án âm thanh kỹ thuật số phục vụ cho các sự kiện trực tuyến và trực tiếp với hệ thống âm thanh chất lượng cao.",
    imageUrl: "/images/placeholder-1.jpg",
    slug: "du-an-am-thanh-ky-thuat-so"
  },
  {
    id: 2,
    title: "Thiết kế dàn nhạc hòa tấu",
    category: "Âm nhạc",
    description: "Thiết kế và biên soạn nhạc cho dàn nhạc hòa tấu với sự kết hợp độc đáo giữa nhạc cụ truyền thống và hiện đại.",
    imageUrl: "/images/placeholder-2.jpg",
    slug: "thiet-ke-dan-nhac-hoa-tau"
  },
  {
    id: 3,
    title: "Sản xuất phim tài liệu",
    category: "Phim",
    description: "Sản xuất phim tài liệu kể những câu chuyện chân thực và sâu sắc về các chủ đề văn hóa, xã hội và môi trường.",
    imageUrl: "/images/placeholder-3.jpg",
    slug: "san-xuat-phim-tai-lieu"
  },
  {
    id: 4,
    title: "Hệ thống âm thanh sự kiện",
    category: "Âm thanh",
    description: "Cung cấp hệ thống âm thanh chuyên nghiệp cho các sự kiện từ nhỏ đến lớn với chất lượng âm thanh hàng đầu.",
    imageUrl: "/images/placeholder-4.jpg",
    slug: "he-thong-am-thanh-su-kien"
  },
  {
    id: 5,
    title: "Sản xuất video quảng cáo",
    category: "Video",
    description: "Sản xuất các video quảng cáo sáng tạo và hiệu quả cho các thương hiệu và doanh nghiệp.",
    imageUrl: "/images/placeholder-5.jpg",
    slug: "san-xuat-video-quang-cao"
  },
  {
    id: 6,
    title: "Sản xuất podcast",
    category: "Âm thanh",
    description: "Sản xuất podcast với chất lượng âm thanh tốt nhất và nội dung hấp dẫn cho các khách hàng cá nhân và doanh nghiệp.",
    imageUrl: "/images/placeholder-6.jpg",
    slug: "san-xuat-podcast"
  }
]

const ProductsPage = () => {
  const categories = Array.from(new Set(products.map(product => product.category)))

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-primary text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Sản phẩm của chúng tôi</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Khám phá bộ sưu tập đa dạng các sản phẩm và dự án sáng tạo của The Soul of Wind Group.
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

      {/* Products Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden mb-4">
                  {/* Placeholder for product image */}
                  <div className="w-full h-full bg-primary/10"></div>
                </div>
                <div className="p-2">
                  <div className="text-sm text-accent mb-2">{product.category}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    <Link href={`/products/${product.slug}`}>{product.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <Link 
                    href={`/products/${product.slug}`}
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

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Bạn có dự án riêng cần thực hiện?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Nhóm chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn từ khâu lên ý tưởng đến sản xuất 
              và phân phối sản phẩm truyền thông của bạn.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors"
            >
              Liên hệ ngay
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProductsPage 