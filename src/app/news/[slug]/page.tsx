import React from 'react'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type NewsItem = {
  id: number
  title: string
  date: string
  excerpt: string
  content?: string
  imageUrl: string
  slug: string
  category: string
  author?: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Ra mắt studio mới tại thành phố Hồ Chí Minh",
    date: "15/05/2023",
    excerpt: "Chúng tôi vui mừng thông báo về việc khai trương studio mới tại trung tâm thành phố Hồ Chí Minh, mở rộng khả năng sản xuất của chúng tôi.",
    content: `
      <p>The Soul of Wind Group vui mừng thông báo về việc khai trương studio âm thanh mới nhất của chúng tôi tại trung tâm thành phố Hồ Chí Minh. Studio mới này là một phần trong kế hoạch mở rộng hoạt động của chúng tôi và đánh dấu một cột mốc quan trọng trong sự phát triển của công ty.</p>
      
      <p>Với diện tích hơn 200 mét vuông, studio mới được trang bị những thiết bị âm thanh hiện đại nhất, bao gồm hệ thống ghi âm chuyên nghiệp, phòng cách âm tiêu chuẩn quốc tế và các công nghệ xử lý âm thanh tiên tiến. Không gian làm việc mới này sẽ cho phép chúng tôi nâng cao chất lượng sản xuất và mở rộng danh mục dịch vụ của mình.</p>
      
      <p>"Studio mới này không chỉ là một không gian làm việc, mà còn là một trung tâm sáng tạo nơi các nghệ sĩ, nhà sản xuất và khách hàng có thể hợp tác để tạo ra những sản phẩm âm thanh xuất sắc," ông Nguyễn Văn An, Giám đốc Điều hành của The Soul of Wind Group cho biết.</p>
      
      <p>Với sự ra mắt của studio mới, chúng tôi dự định mở rộng dịch vụ sản xuất podcast, thu âm nhạc phim và thiết kế âm thanh cho các dự án truyền thông. Chúng tôi cũng có kế hoạch tổ chức các workshop và sự kiện networking cho cộng đồng âm thanh và nhạc sĩ tại Việt Nam.</p>
      
      <p>Buổi khai trương đã diễn ra vào ngày 15/05/2023 với sự tham dự của nhiều khách mời quan trọng trong ngành công nghiệp âm nhạc và truyền thông. Chúng tôi xin chân thành cảm ơn tất cả những ai đã đến tham dự và ủng hộ chúng tôi trong sự kiện quan trọng này.</p>
    `,
    imageUrl: "/images/news-1.jpg",
    slug: "ra-mat-studio-moi",
    category: "Công ty",
    author: "Nguyễn Minh Tuấn"
  },
  {
    id: 2,
    title: "Giải thưởng Thiết kế Âm thanh Xuất sắc",
    date: "28/06/2023",
    excerpt: "Dự án âm nhạc mới nhất của chúng tôi đã được vinh danh tại Lễ trao giải Thiết kế Âm thanh Châu Á năm 2023.",
    content: `
      <p>Chúng tôi vô cùng tự hào thông báo rằng The Soul of Wind Group đã được vinh danh tại Lễ trao giải Thiết kế Âm thanh Châu Á năm 2023 với dự án "Âm vang đại ngàn" - một bộ sưu tập âm thanh kết hợp giữa âm nhạc dân tộc và công nghệ âm thanh hiện đại.</p>
      
      <p>Giải thưởng "Thiết kế Âm thanh Xuất sắc" là một trong những giải thưởng danh giá nhất trong lĩnh vực thiết kế âm thanh tại châu Á, ghi nhận những đóng góp và sáng tạo trong việc sử dụng âm thanh để kể chuyện và truyền tải cảm xúc.</p>
      
      <p>Dự án "Âm vang đại ngàn" là kết quả của hơn một năm làm việc tận tụy của đội ngũ nhạc sĩ, kỹ sư âm thanh và nhà sản xuất của chúng tôi. Dự án đã thu thập và xử lý hàng trăm mẫu âm thanh từ các vùng miền khác nhau tại Việt Nam, từ âm thanh tự nhiên của rừng núi đến nhạc cụ dân tộc truyền thống.</p>
      
      <p>"Đây là một vinh dự lớn không chỉ cho công ty mà còn cho toàn bộ đội ngũ đã nỗ lực không ngừng để hoàn thành dự án này. Giải thưởng này khẳng định cam kết của chúng tôi trong việc bảo tồn và phát huy giá trị âm nhạc dân tộc thông qua công nghệ hiện đại," Trưởng nhóm dự án Lê Thanh Hà chia sẻ khi nhận giải.</p>
      
      <p>Bộ sưu tập âm thanh này không chỉ được sử dụng trong các sản phẩm truyền thông mà còn được áp dụng trong nhiều dự án nghệ thuật và giáo dục, góp phần nâng cao nhận thức về sự phong phú của âm nhạc dân tộc Việt Nam.</p>
      
      <p>Chúng tôi xin chân thành cảm ơn Ban tổ chức Lễ trao giải Thiết kế Âm thanh Châu Á và tất cả những ai đã ủng hộ và đồng hành cùng chúng tôi trong dự án này.</p>
    `,
    imageUrl: "/images/news-2.jpg",
    slug: "giai-thuong-thiet-ke-am-thanh",
    category: "Giải thưởng",
    author: "Lê Thanh Hà"
  },
  {
    id: 3,
    title: "Hợp tác với các nghệ sĩ quốc tế",
    date: "10/07/2023",
    excerpt: "The Soul of Wind Group bắt đầu chương trình hợp tác với các nghệ sĩ và nhà sản xuất quốc tế để mở rộng phạm vi sáng tạo.",
    content: `
      <p>The Soul of Wind Group vui mừng thông báo về sự khởi đầu của chương trình hợp tác quốc tế với các nghệ sĩ và nhà sản xuất từ nhiều quốc gia khác nhau. Đây là một bước đi chiến lược trong kế hoạch mở rộng phạm vi hoạt động và tăng cường sự đa dạng sáng tạo của công ty.</p>
      
      <p>Chương trình hợp tác này sẽ tập trung vào việc kết nối các nghệ sĩ Việt Nam với các đồng nghiệp quốc tế, tạo ra những sản phẩm âm nhạc và truyền thông có tính giao thoa văn hóa cao. Các dự án ban đầu sẽ bao gồm sản xuất album âm nhạc, sáng tác nhạc phim và phát triển nội dung podcast đa ngôn ngữ.</p>
      
      <p>Trong giai đoạn đầu tiên, chúng tôi đã ký kết thỏa thuận hợp tác với các nghệ sĩ từ Nhật Bản, Hàn Quốc và Singapore. Các nghệ sĩ này mang đến những phong cách âm nhạc đa dạng, từ nhạc điện tử đương đại đến âm nhạc truyền thống phương Đông.</p>
      
      <p>"Việc hợp tác với các nghệ sĩ quốc tế không chỉ mở rộng thị trường cho công ty mà còn là cơ hội quý báu để chúng tôi học hỏi và trao đổi kinh nghiệm sáng tạo," ông Trần Minh Đức, Giám đốc Sáng tạo của The Soul of Wind Group chia sẻ.</p>
      
      <p>Dự án đầu tiên trong khuôn khổ chương trình hợp tác này sẽ là một album fusion kết hợp giữa nhạc cụ dân tộc Việt Nam và âm nhạc điện tử hiện đại, dự kiến phát hành vào quý 4 năm 2023. Album này sẽ có sự tham gia của nghệ sĩ đàn tranh Việt Nam Ngọc Anh và nhà sản xuất nhạc điện tử Nhật Bản Taka Hiromi.</p>
      
      <p>Chúng tôi kỳ vọng rằng chương trình hợp tác quốc tế này sẽ không chỉ mang lại giá trị cho công ty mà còn góp phần quảng bá văn hóa âm nhạc Việt Nam ra thế giới.</p>
    `,
    imageUrl: "/images/news-3.jpg",
    slug: "hop-tac-voi-nghe-si-quoc-te",
    category: "Hợp tác",
    author: "Trần Minh Đức"
  }
]

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const newsItem = newsItems.find(item => item.slug === params.slug)
  
  if (!newsItem) {
    return {
      title: 'Tin tức không tồn tại | The Soul of Wind Group',
    }
  }
  
  return {
    title: `${newsItem.title} | The Soul of Wind Group`,
    description: newsItem.excerpt,
  }
}

const NewsDetailPage = ({ params }: PageProps) => {
  const newsItem = newsItems.find(item => item.slug === params.slug)
  
  if (!newsItem) {
    notFound()
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-primary text-white">
        <Container>
          <div className="text-center">
            <p className="text-accent-dark mb-4">{newsItem.category}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{newsItem.title}</h1>
            <div className="text-white/80 flex items-center justify-center gap-3">
              <time dateTime={newsItem.date}>{newsItem.date}</time>
              {newsItem.author && (
                <>
                  <span>•</span>
                  <span>Tác giả: {newsItem.author}</span>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* News Content */}
      <section className="py-16">
        <Container size="md">
          <div className="bg-white rounded-lg overflow-hidden">
            {/* News Image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* Placeholder for news image */}
              <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                <p className="text-gray-500">Hình ảnh bài viết</p>
              </div>
            </div>
            
            {/* News Content */}
            <div className="p-8">
              <div className="prose max-w-none">
                {newsItem.content ? (
                  <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
                ) : (
                  <p className="text-gray-600">{newsItem.excerpt}</p>
                )}
              </div>
              
              {/* Social Share */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Chia sẻ bài viết:</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="text-gray-500 hover:text-accent transition-colors"
                        aria-label="Share on Facebook"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="text-gray-500 hover:text-accent transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95721 14.8821 3.28444C14.0247 3.61167 13.2884 4.19445 12.773 4.95372C12.2575 5.71299 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="text-gray-500 hover:text-accent transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <Link 
                    href="/news" 
                    className="flex items-center text-accent hover:underline"
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1"
                    >
                      <path 
                        d="M10 12L6 8L10 4" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                    Quay lại tin tức
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related News */}
      <section className="py-16 bg-secondary">
        <Container>
          <h2 className="text-2xl font-semibold mb-8">Tin tức liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems
              .filter(item => item.category === newsItem.category && item.id !== newsItem.id)
              .slice(0, 3)
              .map((relatedItem) => (
                <div key={relatedItem.id} className="group">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden mb-4">
                    {/* Placeholder for news image */}
                    <div className="w-full h-full bg-primary/10"></div>
                  </div>
                  <div className="p-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-accent">{relatedItem.category}</span>
                      <span className="text-sm text-gray-500">{relatedItem.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      <Link href={`/news/${relatedItem.slug}`}>{relatedItem.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-3">{relatedItem.excerpt}</p>
                    <Link 
                      href={`/news/${relatedItem.slug}`}
                      className="text-accent font-medium hover:underline inline-flex items-center"
                    >
                      Đọc thêm
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

export default NewsDetailPage 