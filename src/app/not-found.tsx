import React from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'

export const metadata = {
  title: 'Không tìm thấy trang | The Soul of Wind Group',
  description: 'Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.',
}

export default function NotFound() {
  return (
    <div className="py-32">
      <Container size="md">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-accent">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Không tìm thấy trang</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Vui lòng kiểm tra lại URL hoặc quay lại trang chủ.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors"
          >
            Quay lại trang chủ
          </Link>
        </div>
      </Container>
    </div>
  )
} 