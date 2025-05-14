import React from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Liên hệ | The Soul of Wind Group',
  description: 'Liên hệ với The Soul of Wind Group để thảo luận về dự án truyền thông của bạn',
}

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-primary text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Liên hệ với chúng tôi</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe ý tưởng và câu hỏi của bạn. Hãy liên hệ với chúng tôi ngay hôm nay.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Gửi tin nhắn cho chúng tôi</h2>
              <p className="text-lg mb-8">
                Điền vào biểu mẫu bên dưới và chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">Họ</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Nhập họ của bạn"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Tên</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Nhập tên của bạn"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="0912345678"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Chủ đề</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  >
                    <option value="">Chọn một chủ đề</option>
                    <option value="general">Thông tin chung</option>
                    <option value="project">Đề xuất dự án</option>
                    <option value="partnership">Hợp tác</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Tin nhắn</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Nhập tin nhắn của bạn ở đây..."
                    required
                  />
                </div>
                
                <Button type="submit" variant="primary" size="lg">
                  Gửi tin nhắn
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold mb-6">Thông tin liên hệ</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Địa chỉ</h3>
                  <p className="text-gray-600">
                    123 đường Media<br />
                    Quận 1<br />
                    Thành phố Hồ Chí Minh<br />
                    Việt Nam
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:info@soulofwind.com" className="text-accent hover:underline">
                    info@soulofwind.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Điện thoại</h3>
                  <a href="tel:+84123456789" className="text-accent hover:underline">
                    +84 123 456 789
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Giờ làm việc</h3>
                  <p className="text-gray-600">
                    Thứ Hai - Thứ Sáu: 9:00 - 18:00<br />
                    Thứ Bảy: 9:00 - 12:00<br />
                    Chủ Nhật: Đóng cửa
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Theo dõi chúng tôi</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                      aria-label="Facebook"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                      aria-label="Twitter"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95721 14.8821 3.28444C14.0247 3.61167 13.2884 4.19445 12.773 4.95372C12.2575 5.71299 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                      aria-label="Instagram"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 w-full">
                {/* Placeholder for map */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Google Map sẽ được hiển thị ở đây</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ContactPage 