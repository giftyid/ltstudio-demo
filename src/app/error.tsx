'use client'

import React from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="py-32">
      <Container size="md">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Đã xảy ra lỗi</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại sau hoặc quay lại trang chủ.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors"
            >
              Thử lại
            </button>
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent font-medium rounded-md hover:bg-accent/10 transition-colors"
            >
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
} 