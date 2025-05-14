import React from 'react'
import Link from 'next/link'
import Container from '../ui/Container'
import Button from '../ui/Button'

const CallToActionSection = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hãy bắt đầu dự án của bạn với chúng tôi</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            Bạn đang có ý tưởng về một dự án truyền thông? Chúng tôi sẵn sàng lắng nghe và biến ý tưởng của bạn thành hiện thực.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              href="/contact" 
              variant="primary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Liên hệ với chúng tôi
            </Button>
            <Button 
              href="/services" 
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10"
            >
              Khám phá dịch vụ
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CallToActionSection 