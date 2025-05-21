'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn, useClickOutside, useWindowSize } from '@/lib/utils'
import Container from '../ui/Container'
import LanguageToggle from '../ui/LanguageToggle'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const { width } = useWindowSize()
  const { language } = useLanguage()
  
  // Get translated nav links
  const navLinks = [
    { name: translations.nav[language].home, href: '/' },
    { name: translations.nav[language].about, href: '/about' },
    { 
      name: translations.nav[language].products, 
      href: '/products',
      submenu: [
        { name: translations.products[language].videoMarketing, href: '/products/video-marketing' },
        { name: translations.products[language].graphicDesign, href: '/products/graphic-design' },
        { name: translations.products[language].filmProduction, href: '/products/film-production' },
      ]
    },
    { 
      name: translations.nav[language].services, 
      href: '/services',
      submenu: [
        { name: translations.services[language].brandConsulting, href: '/services/brand-consulting' },
        { name: translations.services[language].contentProduction, href: '/services/content-production' },
        { name: translations.services[language].digitalMarketing, href: '/services/digital-marketing' },
      ]
    },
    { name: translations.nav[language].news, href: '/news' },
    { name: translations.nav[language].contact, href: '/contact' },
  ]
  
  // Close menu when screen size changes to desktop
  useEffect(() => {
    if (width && width >= 768 && mobileMenuOpen) {
      setMobileMenuOpen(false)
      setActiveDropdown(null)
    }
  }, [width, mobileMenuOpen])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Close menu when clicking outside
  useClickOutside(navRef, () => {
    if (mobileMenuOpen) setMobileMenuOpen(false)
  })
  
  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (mobileMenuOpen) {
      setActiveDropdown(null)
    }
  }

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }
  
  // Check if a link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/90"
      )}
      ref={navRef}
    >
      <Container>
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            The Soul of Wind
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href}
                  className={cn(
                    "font-medium hover:text-accent transition-colors py-2 inline-block",
                    isActiveLink(link.href) && "text-accent font-semibold"
                  )}
                >
                  {link.name}
                  {link.submenu && (
                    <span className="ml-1 inline-block">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                </Link>
                
                {/* Desktop Dropdown */}
                {link.submenu && (
                  <div className="absolute left-0 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md overflow-hidden z-50">
                    <div className="py-2">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={cn(
                            "block px-4 py-2 hover:bg-gray-50 hover:text-accent transition-colors",
                            isActiveLink(subItem.href) && "text-accent bg-gray-50"
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Language Toggle Button */}
            <LanguageToggle type="flag" />
          </div>
          
          {/* Mobile Menu Button and Language Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle type="flag" />
            
            <button 
              className="p-2 tap-highlight-transparent"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300"
              >
                {mobileMenuOpen ? (
                  <path 
                    d="M18 6L6 18M6 6L18 18" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                ) : (
                  <path 
                    d="M3 12H21M3 6H21M3 18H21" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </Container>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed top-[72px] left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out max-h-[calc(100vh-72px)] overflow-y-auto z-50",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <Container className="py-4">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 last:border-0">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={cn(
                        "flex justify-between items-center w-full py-3 font-medium hover:text-accent transition-colors",
                        isActiveLink(link.href) && "text-accent font-semibold"
                      )}
                    >
                      {link.name}
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.name ? "rotate-180" : ""
                        )}
                      >
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div 
                      className={cn(
                        "overflow-hidden transition-all duration-300 bg-gray-50",
                        activeDropdown === link.name ? "max-h-[500px] py-2" : "max-h-0"
                      )}
                    >
                      {link.submenu.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          href={subItem.href}
                          className={cn(
                            "block pl-4 pr-2 py-2 hover:text-accent transition-colors",
                            isActiveLink(subItem.href) && "text-accent font-medium"
                          )}
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveDropdown(null)
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    href={link.href}
                    className={cn(
                      "block py-3 font-medium hover:text-accent transition-colors",
                      isActiveLink(link.href) && "text-accent font-semibold"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
      
      {/* Overlay when mobile menu is open */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-black/20 z-40 transition-opacity",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        onClick={toggleMenu}
        aria-hidden="true"
      />
    </header>
  )
}

export default NavBar 