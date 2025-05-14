import React from 'react'
import Container from '../ui/Container'

const PhilosophySection = () => {
  const philosophies = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Sáng tạo',
      description: 'Luôn tìm tòi, đổi mới và khám phá những khả năng mới trong lĩnh vực truyền thông.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7L9 18L4 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Chất lượng',
      description: 'Duy trì tiêu chuẩn cao nhất trong mọi khía cạnh của công việc.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Hợp tác',
      description: 'Làm việc cùng nhau để tạo ra thành quả lớn hơn tổng các thành phần riêng lẻ.'
    },
  ]

  return (
    <section className="py-24 bg-secondary">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Triết lý của chúng tôi</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Chúng tôi tin vào sức mạnh chuyển đổi của truyền thông để kết nối, truyền cảm hứng và 
            tác động đến mọi người. Cách tiếp cận của chúng tôi kết hợp giữa sự xuất sắc về kỹ thuật 
            và tầm nhìn nghệ thuật, tạo ra những trải nghiệm có ý nghĩa, đồng cảm với khán giả 
            và đáp ứng mong muốn của khách hàng.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {philosophies.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PhilosophySection 