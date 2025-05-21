// Translations for the application
// This file contains all text content in both English and Vietnamese

export type Language = 'vi' | 'en';

export const translations = {
  // Navigation
  nav: {
    vi: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      products: 'Sản phẩm',
      services: 'Dịch vụ',
      news: 'Tin tức',
      contact: 'Liên hệ',
    },
    en: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      services: 'Services',
      news: 'News',
      contact: 'Contact',
    }
  },
  
  // Product submenu
  products: {
    vi: {
      videoMarketing: 'Video Marketing',
      graphicDesign: 'Thiết kế đồ họa',
      filmProduction: 'Sản xuất phim',
    },
    en: {
      videoMarketing: 'Video Marketing',
      graphicDesign: 'Graphic Design',
      filmProduction: 'Film Production',
    }
  },
  
  // Services submenu
  services: {
    vi: {
      brandConsulting: 'Tư vấn thương hiệu',
      contentProduction: 'Sản xuất nội dung',
      digitalMarketing: 'Digital Marketing',
    },
    en: {
      brandConsulting: 'Brand Consulting',
      contentProduction: 'Content Production',
      digitalMarketing: 'Digital Marketing',
    }
  },
  
  // Home page - Hero Section
  hero: {
    vi: {
      slogan: 'Sáng tạo những trải nghiệm truyền thông đắm chìm, thu hút và truyền cảm hứng cho khán giả trên toàn thế giới.',
      exploreProducts: 'Khám phá sản phẩm',
      aboutUs: 'Về chúng tôi',
      creative: 'Sáng tạo',
      professional: 'Chuyên nghiệp',
      innovative: 'Đổi mới'
    },
    en: {
      slogan: 'Creating immersive media experiences that captivate and inspire audiences around the world.',
      exploreProducts: 'Explore Products',
      aboutUs: 'About Us',
      creative: 'Creative',
      professional: 'Professional',
      innovative: 'Innovative'
    }
  },
  
  // Home page - Philosophy Section
  philosophy: {
    vi: {
      title: 'Triết lý của chúng tôi',
      description: 'Chúng tôi tin vào sức mạnh chuyển đổi của truyền thông để kết nối, truyền cảm hứng và tác động đến mọi người. Cách tiếp cận của chúng tôi kết hợp giữa sự xuất sắc về kỹ thuật và tầm nhìn nghệ thuật, tạo ra những trải nghiệm có ý nghĩa, đồng cảm với khán giả và đáp ứng mong muốn của khách hàng.',
      creative: {
        title: 'Sáng tạo',
        description: 'Luôn tìm tòi, đổi mới và khám phá những khả năng mới trong lĩnh vực truyền thông.'
      },
      quality: {
        title: 'Chất lượng',
        description: 'Duy trì tiêu chuẩn cao nhất trong mọi khía cạnh của công việc.'
      },
      collaboration: {
        title: 'Hợp tác',
        description: 'Làm việc cùng nhau để tạo ra thành quả lớn hơn tổng các thành phần riêng lẻ.'
      }
    },
    en: {
      title: 'Our Philosophy',
      description: 'We believe in the transformative power of media to connect, inspire, and impact people. Our approach combines technical excellence with artistic vision, creating experiences that are meaningful, resonant with audiences, and aligned with client objectives.',
      creative: {
        title: 'Creativity',
        description: 'Always exploring, innovating, and discovering new possibilities in media.'
      },
      quality: {
        title: 'Quality',
        description: 'Maintaining the highest standards in every aspect of our work.'
      },
      collaboration: {
        title: 'Collaboration',
        description: 'Working together to create results greater than the sum of their parts.'
      }
    }
  },
  
  // Home page - Featured Products Section
  featuredProducts: {
    vi: {
      title: 'Sản phẩm nổi bật',
      viewAll: 'Xem tất cả',
      learnMore: 'Tìm hiểu thêm'
    },
    en: {
      title: 'Featured Products',
      viewAll: 'View All',
      learnMore: 'Learn More'
    }
  },
  
  // Home page - Services Section
  servicesSection: {
    vi: {
      title: 'Dịch vụ của chúng tôi',
      description: 'Chúng tôi cung cấp các giải pháp truyền thông toàn diện, từ tư vấn thương hiệu đến sản xuất nội dung và chiến lược tiếp thị.',
      viewService: 'Xem dịch vụ'
    },
    en: {
      title: 'Our Services',
      description: 'We offer comprehensive media solutions, from brand consulting to content production and marketing strategies.',
      viewService: 'View Service'
    }
  },
  
  // Home page - Latest News Section
  latestNews: {
    vi: {
      title: 'Tin tức mới nhất',
      viewAll: 'Xem tất cả tin tức',
      readMore: 'Đọc tiếp'
    },
    en: {
      title: 'Latest News',
      viewAll: 'View All News',
      readMore: 'Read More'
    }
  },
  
  // Home page - Call to Action Section
  callToAction: {
    vi: {
      title: 'Sẵn sàng hợp tác?',
      description: 'Hãy liên hệ với chúng tôi ngay hôm nay để thảo luận về dự án của bạn.',
      contactUs: 'Liên hệ ngay'
    },
    en: {
      title: 'Ready to Collaborate?',
      description: 'Get in touch with us today to discuss your project.',
      contactUs: 'Contact Us Now'
    }
  },
  
  // Footer
  footer: {
    vi: {
      quickLinks: 'Liên kết nhanh',
      servicesTitle: 'Dịch vụ',
      followUs: 'Theo dõi chúng tôi',
      contact: 'Liên hệ',
      address: '123 đường Media, Quận 1, Thành phố Hồ Chí Minh, Việt Nam',
      phone: '+84 123 456 789',
      email: 'info@soulofwind.com',
      copyright: 'Bản quyền',
      allRightsReserved: 'Đã đăng ký Bản quyền.'
    },
    en: {
      quickLinks: 'Quick Links',
      servicesTitle: 'Services',
      followUs: 'Follow Us',
      contact: 'Contact',
      address: '123 Media Street, District 1, Ho Chi Minh City, Vietnam',
      phone: '+84 123 456 789',
      email: 'info@soulofwind.com',
      copyright: 'Copyright',
      allRightsReserved: 'All Rights Reserved.'
    }
  },
  
  // About page
  about: {
    vi: {
      title: 'Giới thiệu',
      ourStory: 'Câu chuyện của chúng tôi',
      ourVision: 'Tầm nhìn',
      ourMission: 'Sứ mệnh',
      ourTeam: 'Đội ngũ của chúng tôi',
      joinUs: 'Tham gia cùng chúng tôi'
    },
    en: {
      title: 'About Us',
      ourStory: 'Our Story',
      ourVision: 'Our Vision',
      ourMission: 'Our Mission',
      ourTeam: 'Our Team',
      joinUs: 'Join Our Team'
    }
  },
  
  // Products page
  productsPage: {
    vi: {
      title: 'Sản phẩm',
      description: 'Khám phá bộ sưu tập các sản phẩm sáng tạo của chúng tôi.',
      allCategories: 'Tất cả danh mục',
      filter: 'Lọc',
      sort: 'Sắp xếp',
      newest: 'Mới nhất',
      popular: 'Phổ biến',
      showDetails: 'Xem chi tiết'
    },
    en: {
      title: 'Products',
      description: 'Explore our collection of creative products.',
      allCategories: 'All Categories',
      filter: 'Filter',
      sort: 'Sort By',
      newest: 'Newest',
      popular: 'Popular',
      showDetails: 'Show Details'
    }
  },
  
  // Services page
  servicesPage: {
    vi: {
      title: 'Dịch vụ',
      description: 'Chúng tôi cung cấp các dịch vụ chuyên nghiệp để đáp ứng nhu cầu của khách hàng.',
      requestService: 'Yêu cầu dịch vụ',
      ourProcess: 'Quy trình của chúng tôi',
      consultation: 'Tư vấn',
      strategy: 'Chiến lược',
      execution: 'Thực hiện',
      delivery: 'Bàn giao'
    },
    en: {
      title: 'Services',
      description: 'We provide professional services to meet your needs.',
      requestService: 'Request Service',
      ourProcess: 'Our Process',
      consultation: 'Consultation',
      strategy: 'Strategy',
      execution: 'Execution',
      delivery: 'Delivery'
    }
  },
  
  // News page
  news: {
    vi: {
      title: 'Tin tức',
      description: 'Cập nhật tin tức và hoạt động mới nhất.',
      allNews: 'Tất cả tin tức',
      categories: 'Danh mục',
      recentPosts: 'Bài viết gần đây',
      readMore: 'Đọc tiếp',
      share: 'Chia sẻ',
      dateFormat: 'dd/MM/yyyy'
    },
    en: {
      title: 'News',
      description: 'Stay updated with our latest news and activities.',
      allNews: 'All News',
      categories: 'Categories',
      recentPosts: 'Recent Posts',
      readMore: 'Read More',
      share: 'Share',
      dateFormat: 'MM/dd/yyyy'
    }
  },
  
  // Contact page
  contact: {
    vi: {
      title: 'Liên hệ',
      description: 'Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào.',
      getInTouch: 'Liên hệ',
      name: 'Họ và tên',
      email: 'Email',
      phone: 'Số điện thoại',
      subject: 'Tiêu đề',
      message: 'Tin nhắn',
      submit: 'Gửi',
      location: 'Địa chỉ',
      emailUs: 'Email',
      callUs: 'Điện thoại',
      thankYou: 'Cảm ơn!',
      sentMessage: 'Chúng tôi đã nhận được tin nhắn của bạn và sẽ liên hệ sớm.'
    },
    en: {
      title: 'Contact',
      description: 'Get in touch with us for any questions or inquiries.',
      getInTouch: 'Get In Touch',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message',
      submit: 'Submit',
      location: 'Location',
      emailUs: 'Email Us',
      callUs: 'Call Us',
      thankYou: 'Thank You!',
      sentMessage: 'We have received your message and will get back to you soon.'
    }
  },
  
  // Company description
  company: {
    vi: {
      slogan: 'Sáng tạo những trải nghiệm truyền thông đắm chìm, thu hút và truyền cảm hứng cho khán giả trên toàn thế giới.'
    },
    en: {
      slogan: 'Creating immersive media experiences that captivate and inspire audiences around the world.'
    }
  },
  
  // Language toggle
  language: {
    vi: {
      current: 'VI',
      switch: 'EN',
    },
    en: {
      current: 'EN',
      switch: 'VI',
    }
  }
} 