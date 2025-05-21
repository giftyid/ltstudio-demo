'use client'

import React from 'react'
import Link from 'next/link'
import Container from '../ui/Container'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'

const Footer = () => {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  // Get translated footer links
  const footerLinks = [
    { 
      title: translations.footer[language].quickLinks, 
      links: [
        { name: translations.nav[language].home, href: '/' },
        { name: translations.nav[language].about, href: '/about' },
        { name: translations.nav[language].products, href: '/products' },
        { name: translations.nav[language].services, href: '/services' },
        { name: translations.nav[language].news, href: '/news' },
        { name: translations.nav[language].contact, href: '/contact' },
      ]
    },
    { 
      title: translations.footer[language].servicesTitle, 
      links: [
        { name: translations.services[language].brandConsulting, href: '/services/brand-consulting' },
        { name: translations.services[language].contentProduction, href: '/services/content-production' },
        { name: translations.services[language].digitalMarketing, href: '/services/digital-marketing' },
      ]
    },
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
    { name: 'Twitter', href: 'https://twitter.com', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95721 14.8821 3.28444C14.0247 3.61167 13.2884 4.19445 12.773 4.95372C12.2575 5.71299 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
    { name: 'Instagram', href: 'https://instagram.com', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
  ]

  // Footer collapsible section for mobile
  const FooterSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    
    return (
      <div className="border-b border-white/10 sm:border-none">
        <div 
          className="flex justify-between items-center py-3 sm:py-0 sm:mb-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h4 className="font-semibold sm:text-lg">{title}</h4>
          <button className="sm:hidden" aria-label={isOpen ? "Close section" : "Open section"}>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "transition-transform duration-200",
                isOpen ? "rotate-180" : ""
              )}
            >
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className={cn(
          "overflow-hidden transition-all duration-300 sm:block",
          isOpen ? "max-h-[500px] mb-3" : "max-h-0 sm:max-h-none"
        )}>
          {children}
        </div>
      </div>
    )
  }
  
  return (
    <footer className="bg-primary text-white pt-10 pb-8 sm:pt-12 sm:pb-10">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-6 lg:gap-8">
          <div className="py-4 sm:py-0">
            <Link href="/" className="inline-block">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">The Soul of Wind</h3>
            </Link>
            <p className="text-white/70 text-sm sm:text-base max-w-md sm:max-w-xs">
              {translations.company[language].slogan}
            </p>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3">{translations.footer[language].followUs}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors p-2 -ml-2 rounded-full hover:bg-white/10"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <FooterSection key={section.title} title={section.title}>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm sm:text-base block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          ))}
          
          <FooterSection title={translations.footer[language].contact}>
            <ul className="space-y-2 text-white/70 text-sm sm:text-base">
              <li className="flex items-start py-1">
                <svg className="mt-1 mr-2 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{translations.footer[language].address}</span>
              </li>
              <li className="flex items-center py-1">
                <svg className="mr-2 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{translations.footer[language].phone}</span>
              </li>
              <li className="flex items-center py-1">
                <svg className="mr-2 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7-10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{translations.footer[language].email}</span>
              </li>
            </ul>
          </FooterSection>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} The Soul of Wind Group. {translations.footer[language].allRightsReserved}</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer 