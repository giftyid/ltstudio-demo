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
      title: 'Sẵn sàng phát hành âm nhạc của bạn?',
      description: 'Phân phối nhạc của bạn đến các nền tảng trực tuyến hàng đầu thế giới chỉ với vài bước đơn giản.',
      contactUs: 'Đăng ký ngay'
    },
    en: {
      title: 'Ready to Release Your Music?',
      description: 'Distribute your music to the world\'s leading streaming platforms in just a few simple steps.',
      contactUs: 'Sign Up Now'
    }
  },
  
  // Home page - How It Works Section
  howItWorks: {
    vi: {
      title: 'Cách Thức Hoạt Động',
      subtitle: 'Quá trình phân phối nhạc của bạn đơn giản và hiệu quả.',
      cta: 'Xem Các Gói',
      step1: {
        title: 'Tải Nhạc Lên',
        description: 'Tải nhạc và thông tin của bạn lên nền tảng của chúng tôi.'
      },
      step2: {
        title: 'Kiểm Duyệt',
        description: 'Chúng tôi kiểm tra chất lượng và đảm bảo mọi thứ đều hoàn hảo.'
      },
      step3: {
        title: 'Phân Phối',
        description: 'Chúng tôi phân phối nhạc của bạn đến hơn 200 nền tảng trên toàn cầu.'
      },
      step4: {
        title: 'Phân Tích & Thanh Toán',
        description: 'Theo dõi hiệu suất và nhận thanh toán của bạn đúng hạn.'
      }
    },
    en: {
      title: 'How It Works',
      subtitle: 'Your music distribution process is simple and efficient.',
      cta: 'View Plans',
      step1: {
        title: 'Upload Music',
        description: 'Upload your music and information to our platform.'
      },
      step2: {
        title: 'Review',
        description: 'We check for quality and ensure everything is perfect.'
      },
      step3: {
        title: 'Distribution',
        description: 'We distribute your music to over 200 platforms worldwide.'
      },
      step4: {
        title: 'Analytics & Payment',
        description: 'Track performance and receive your payments on time.'
      }
    }
  },
  
  // Home page - Distribution Plans Section
  distributionPlans: {
    vi: {
      title: 'Các Gói Phân Phối',
      subtitle: 'Chọn gói phù hợp với nhu cầu phân phối âm nhạc của bạn',
      cta: 'Bắt Đầu Ngay',
      monthly: 'Hàng Tháng',
      yearly: 'Hàng Năm',
      mostPopular: 'Phổ Biến Nhất',
      plans: [
        {
          name: 'Cơ Bản',
          price: '9.99',
          yearlyPrice: '99.99',
          description: 'Hoàn hảo cho nghệ sĩ mới',
          features: [
            'Tối đa 2 bản phát hành mỗi năm',
            'Phân phối tới 50+ nền tảng',
            'Phân tích cơ bản',
            'Hỗ trợ tiêu chuẩn',
            'Chia sẻ doanh thu 85%'
          ]
        },
        {
          name: 'Chuyên Nghiệp',
          price: '19.99',
          yearlyPrice: '199.99',
          description: 'Dành cho nghệ sĩ đang phát triển',
          features: [
            'Phát hành không giới hạn',
            'Phân phối tới 150+ nền tảng',
            'Phân tích nâng cao',
            'Hỗ trợ ưu tiên',
            'Chia sẻ doanh thu 90%',
            'Liên kết pre-save'
          ]
        },
        {
          name: 'Cao Cấp',
          price: '29.99',
          yearlyPrice: '299.99',
          description: 'Dành cho nghệ sĩ đã thành danh',
          features: [
            'Phát hành không giới hạn',
            'Phân phối tới 200+ nền tảng',
            'Phân tích & thông tin chuyên sâu',
            'Hỗ trợ 24/7',
            'Chia sẻ doanh thu 100%',
            'Công cụ marketing',
            'Đề xuất vào playlist'
          ]
        }
      ]
    },
    en: {
      title: 'Distribution Plans',
      subtitle: 'Choose the right plan for your music distribution needs',
      cta: 'Get Started',
      monthly: 'Monthly',
      yearly: 'Yearly',
      mostPopular: 'Most Popular',
      plans: [
        {
          name: 'Basic',
          price: '9.99',
          yearlyPrice: '99.99',
          description: 'Perfect for new artists',
          features: [
            'Up to 2 releases per year',
            'Distribution to 50+ platforms',
            'Basic analytics',
            'Standard support',
            '85% revenue share'
          ]
        },
        {
          name: 'Pro',
          price: '19.99',
          yearlyPrice: '199.99',
          description: 'For growing artists',
          features: [
            'Unlimited releases',
            'Distribution to 150+ platforms',
            'Advanced analytics',
            'Priority support',
            '90% revenue share',
            'Pre-save links'
          ]
        },
        {
          name: 'Premium',
          price: '29.99',
          yearlyPrice: '299.99',
          description: 'For established artists',
          features: [
            'Unlimited releases',
            'Distribution to 200+ platforms',
            'Premium analytics & insights',
            '24/7 dedicated support',
            '100% revenue share',
            'Marketing tools',
            'Playlist pitching'
          ]
        }
      ]
    }
  },
  
  // Home page - Features Section
  features: {
    vi: {
      title: 'Tính Năng Nền Tảng',
      subtitle: 'Mọi thứ bạn cần để thành công trong thế giới âm nhạc kỹ thuật số',
      items: [
        {
          icon: '🌐',
          title: 'Phạm Vi Toàn Cầu',
          description: 'Phân phối âm nhạc của bạn đến hơn 200 nền tảng bao gồm Spotify, Apple Music, TikTok và nhiều hơn nữa.'
        },
        {
          icon: '📊',
          title: 'Phân Tích Nâng Cao',
          description: 'Theo dõi hiệu suất của bạn với thống kê chi tiết và thông tin chi tiết về người nghe và lượt phát của bạn.'
        },
        {
          icon: '💰',
          title: 'Tiền Bản Quyền Rõ Ràng',
          description: 'Nhận 100% tiền bản quyền với gói cao cấp của chúng tôi. Không có phí ẩn hoặc chia sẻ phức tạp.'
        },
        {
          icon: '🔄',
          title: 'Cập Nhật Tự Động',
          description: 'Cập nhật nhạc và metadata của bạn trên tất cả các nền tảng chỉ với một cú nhấp chuột.'
        },
        {
          icon: '🛡️',
          title: 'Bảo Vệ Bản Quyền',
          description: 'Chúng tôi giúp bảo vệ âm nhạc của bạn với hệ thống nhận dạng nội dung và các biện pháp chống vi phạm bản quyền.'
        },
        {
          icon: '🎧',
          title: 'Quảng Bá Trước Khi Phát Hành',
          description: 'Tạo sự mong đợi với các liên kết pre-save và công cụ quảng bá trước khi phát hành chính thức.'
        },
        {
          icon: '📱',
          title: 'Quản Lý Trên Di Động',
          description: 'Quản lý danh mục, kiểm tra thống kê và nhận thanh toán từ thiết bị di động của bạn.'
        },
        {
          icon: '🤝',
          title: 'Hỗ Trợ Nghệ Sĩ',
          description: 'Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn với bất kỳ câu hỏi hoặc vấn đề nào.'
        }
      ]
    },
    en: {
      title: 'Platform Features',
      subtitle: 'Everything you need to succeed in the digital music world',
      items: [
        {
          icon: '🌐',
          title: 'Global Reach',
          description: 'Distribute your music to over 200 platforms including Spotify, Apple Music, TikTok, and more.'
        },
        {
          icon: '📊',
          title: 'Advanced Analytics',
          description: 'Track your performance with detailed statistics and insights about your listeners and streams.'
        },
        {
          icon: '💰',
          title: 'Clear Royalties',
          description: 'Receive 100% of your royalties with our premium plan. No hidden fees or complicated splits.'
        },
        {
          icon: '🔄',
          title: 'Automatic Updates',
          description: 'Update your music and metadata across all platforms with a single click.'
        },
        {
          icon: '🛡️',
          title: 'Copyright Protection',
          description: 'We help protect your music with content ID systems and anti-piracy measures.'
        },
        {
          icon: '🎧',
          title: 'Pre-Release Promotion',
          description: 'Build anticipation with pre-save links and promotional tools before your official release.'
        },
        {
          icon: '📱',
          title: 'Mobile Management',
          description: 'Manage your catalog, check statistics, and receive payments from your mobile device.'
        },
        {
          icon: '🤝',
          title: 'Artist Support',
          description: 'Our team of experts is available to help you with any questions or issues.'
        }
      ]
    }
  },
  
  // Home page - Success Stories Section
  successStories: {
    vi: {
      title: 'Câu Chuyện Thành Công',
      subtitle: 'Chia sẻ từ các nghệ sĩ đã phát triển sự nghiệp với nền tảng của chúng tôi',
      testimonials: [
        {
          name: 'Alex Rivers',
          image: '/images/artist1.jpg',
          role: 'Nhà sản xuất nhạc điện tử',
          quote: 'Kể từ khi tham gia Mirai Ongaku, lượt stream của tôi đã tăng 400%. Mạng lưới phân phối của họ thật đáng kinh ngạc, và các công cụ phân tích giúp tôi hiểu khán giả của mình tốt hơn.'
        },
        {
          name: 'Melody Chen',
          image: '/images/artist2.jpg',
          role: 'Ca sĩ - Nhạc sĩ',
          quote: 'Tôi thích việc dễ dàng cập nhật các bản phát hành của mình trên tất cả các nền tảng. Đội ngũ luôn phản hồi nhanh chóng và tôi luôn được thanh toán đúng hạn. Không thể hài lòng hơn!'
        },
        {
          name: 'The Nova Collective',
          image: '/images/artist3.jpg',
          role: 'Ban nhạc Indie',
          quote: 'Chúng tôi chuyển sang Mirai Ongaku năm ngoái và đó là quyết định tuyệt vời nhất. Các công cụ quảng bá đã giúp chúng tôi tiếp cận nhiều người nghe mới và doanh thu của chúng tôi đã tăng gấp đôi.'
        }
      ]
    },
    en: {
      title: 'Success Stories',
      subtitle: 'Hear from artists who have grown their careers with our platform',
      testimonials: [
        {
          name: 'Alex Rivers',
          image: '/images/artist1.jpg',
          role: 'Electronic Music Producer',
          quote: 'Since joining Mirai Ongaku, my streams have increased by 400%. Their distribution network is incredible, and the analytics tools help me understand my audience better.'
        },
        {
          name: 'Melody Chen',
          image: '/images/artist2.jpg',
          role: 'Singer-Songwriter',
          quote: 'I love how easy it is to update my releases across all platforms. The team is always responsive and I get paid on time, every time. Couldn\'t be happier!'
        },
        {
          name: 'The Nova Collective',
          image: '/images/artist3.jpg',
          role: 'Indie Band',
          quote: 'We switched to Mirai Ongaku last year and it was the best decision we made. The promotional tools helped us reach new listeners and our revenue has doubled.'
        }
      ]
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