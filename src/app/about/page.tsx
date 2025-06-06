import React from 'react'
import Container from '@/components/ui/Container'
import CallToActionSection from '@/components/home/CallToActionSection'

export const metadata = {
  title: 'Giới thiệu | The Soul of Wind Group',
  description: 'Tìm hiểu thêm về The Soul of Wind Group - công ty truyền thông chuyên nghiệp tạo ra những trải nghiệm đắm chìm',
}

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-primary text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Về chúng tôi</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Chúng tôi là những nhà sáng tạo, kể chuyện và chiến lược gia truyền thông 
              đam mê tạo ra những nội dung có tác động mạnh mẽ.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Câu chuyện của chúng tôi</h2>
              <p className="text-lg mb-6">
                The Soul of Wind Group được thành lập vào năm 2018 bởi một nhóm các nhà sáng tạo 
                và chuyên gia truyền thông với niềm đam mê chung là xây dựng những trải nghiệm 
                truyền thông đầy ý nghĩa.
              </p>
              <p className="text-lg mb-6">
                Bắt đầu như một studio nhỏ tại Việt Nam, chúng tôi đã nhanh chóng phát triển để 
                trở thành một công ty truyền thông toàn diện với khách hàng trên khắp Đông Nam Á 
                và quốc tế.
              </p>
              <p className="text-lg">
                Tên gọi "Soul of Wind" phản ánh triết lý của chúng tôi rằng những ý tưởng sáng tạo 
                mạnh mẽ nhất - giống như gió - có thể đi qua mọi rào cản, kết nối con người và 
                truyền cảm hứng cho sự thay đổi.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-w-16 aspect-h-9">
              {/* Placeholder for company image */}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <Container size="md">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-6">Sứ mệnh & Tầm nhìn</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Chúng tôi được thúc đẩy bởi niềm tin rằng truyền thông có sức mạnh 
              thay đổi nhận thức và tạo ra tác động tích cực.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Sứ mệnh</h3>
              <p className="text-lg">
                Tạo ra những trải nghiệm truyền thông đẳng cấp thế giới kết hợp giữa kể chuyện 
                sáng tạo, công nghệ tiên tiến và chiến lược thông minh để mang lại giá trị 
                tối đa cho khách hàng và khán giả của họ.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Tầm nhìn</h3>
              <p className="text-lg">
                Trở thành đơn vị dẫn đầu trong lĩnh vực truyền thông sáng tạo tại Việt Nam và 
                khu vực Đông Nam Á, được công nhận vì sự đổi mới, chất lượng và tác động tích 
                cực của công việc chúng tôi.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-6">Đội ngũ của chúng tôi</h2>
            <p className="text-lg max-w-3xl mx-auto">
              The Soul of Wind Group là ngôi nhà của những người có tài năng và đam mê 
              từ nhiều lĩnh vực khác nhau trong ngành sáng tạo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4">
                  {/* Placeholder for team member photo */}
                </div>
                <h3 className="text-xl font-semibold">Thành viên {item}</h3>
                <p className="text-accent">Chức vụ</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-6">Giá trị cốt lõi</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Những giá trị này định hình cách chúng tôi làm việc, tương tác với khách hàng và 
              tạo ra nội dung có ý nghĩa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tính chính trực</h3>
              <p className="text-gray-600">
                Chúng tôi hành động với sự trung thực, minh bạch và trung thành với các 
                nguyên tắc của mình trong mọi tương tác.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Đổi mới liên tục</h3>
              <p className="text-gray-600">
                Chúng tôi không ngừng tìm kiếm những cách tiếp cận, công nghệ và giải pháp mới 
                để mang lại kết quả tốt hơn cho khách hàng.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12.5C16.8284 12.5 17.5 11.8284 17.5 11C17.5 10.1716 16.8284 9.5 16 9.5C15.1716 9.5 14.5 10.1716 14.5 11C14.5 11.8284 15.1716 12.5 16 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12.5C8.82843 12.5 9.5 11.8284 9.5 11C9.5 10.1716 8.82843 9.5 8 9.5C7.17157 9.5 6.5 10.1716 6.5 11C6.5 11.8284 7.17157 12.5 8 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16.5C12.8284 16.5 13.5 15.8284 13.5 15C13.5 14.1716 12.8284 13.5 12 13.5C11.1716 13.5 10.5 14.1716 10.5 15C10.5 15.8284 11.1716 16.5 12 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hợp tác</h3>
              <p className="text-gray-600">
                Chúng tôi coi trọng mối quan hệ đối tác với khách hàng và đồng nghiệp, 
                tin rằng sức mạnh tập thể dẫn đến kết quả xuất sắc.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <CallToActionSection />
    </>
  )
}

export default AboutPage 