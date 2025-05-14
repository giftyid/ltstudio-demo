import React from 'react'
import Container from '@/components/ui/Container'

export default function Loading() {
  return (
    <div className="py-32">
      <Container size="md">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-20 h-20">
            <div className="w-20 h-20 rounded-full border-4 border-gray-200"></div>
            <div className="w-20 h-20 rounded-full border-4 border-t-accent animate-spin absolute top-0 left-0"></div>
          </div>
          <p className="mt-6 text-lg font-medium text-gray-600">Đang tải...</p>
        </div>
      </Container>
    </div>
  )
} 