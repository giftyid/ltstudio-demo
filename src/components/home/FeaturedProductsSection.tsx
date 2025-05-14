import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../ui/Container'

type Product = {
  id: number
  title: string
  category: string
  imageUrl: string
  slug: string
}

const featuredProducts: Product[] = [
  {
    id: 1,
    title: "Dự án âm thanh kỹ thuật số",
    category: "Âm thanh",
    imageUrl: "/images/placeholder-1.jpg",
    slug: "du-an-am-thanh-ky-thuat-so"
  },
  {
    id: 2,
    title: "Thiết kế dàn nhạc hòa tấu",
    category: "Âm nhạc",
    imageUrl: "/images/placeholder-2.jpg",
    slug: "thiet-ke-dan-nhac-hoa-tau"
  },
  {
    id: 3,
    title: "Sản xuất phim tài liệu",
    category: "Phim",
    imageUrl: "/images/placeholder-3.jpg",
    slug: "san-xuat-phim-tai-lieu"
  }
]

const FeaturedProductsSection = () => {
  return (
    <section className="py-24">
      <Container size="xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Sản phẩm nổi bật</h2>
          <Link 
            href="/products" 
            className="text-accent font-medium hover:text-accent-dark transition-colors"
          >
            Xem tất cả sản phẩm &rarr;
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
                <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
              <Link 
                href={`/products/${product.slug}`} 
                className="absolute inset-0 z-10" 
                aria-label={`Xem ${product.title}`}
              ></Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProductsSection 