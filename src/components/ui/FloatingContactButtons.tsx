'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

const FloatingContactButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const contactOptions = [
    {
      name: 'Zalo',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.49 10.2722C12.9489 10.2722 13.3548 10.1047 13.6548 9.80472C13.9548 9.50472 14.1223 9.09875 14.1223 8.63989C14.1223 8.18102 13.9548 7.77506 13.6548 7.47506C13.3548 7.17506 12.9489 7.00757 12.49 7.00757C12.0311 7.00757 11.6252 7.17506 11.3252 7.47506C11.0252 7.77506 10.8577 8.18102 10.8577 8.63989C10.8577 9.09875 11.0252 9.50472 11.3252 9.80472C11.6252 10.1047 12.0311 10.2722 12.49 10.2722Z"/>
          <path d="M13.2193 14.9471L15.4557 11.4471C15.6232 11.1659 15.5451 10.8096 15.2639 10.6422L14.1229 9.93088C13.8418 9.76339 13.4855 9.84152 13.3181 10.1227L11.0817 13.6227C10.9142 13.9038 10.9924 14.2602 11.2735 14.4277L12.4145 15.1389C12.6957 15.3064 13.0519 15.2283 13.2193 14.9471Z"/>
          <path d="M16.791 5.60205C15.3388 4.14986 13.3702 3.33603 11.2453 3.33603C6.99575 3.33603 3.52734 6.80444 3.52734 11.0539C3.52734 12.2732 3.78359 13.4613 4.28359 14.551L3.33594 18.6648L7.5079 17.7172C8.5756 18.1822 9.73242 18.4232 10.9068 18.4448H10.9537C15.1959 18.4448 18.8912 14.9654 19.1412 10.7154C19.2506 8.60986 18.4537 6.61814 16.791 5.60205ZM16.371 14.9936C16.0129 15.6779 15.0887 16.2685 14.3121 16.4516C13.7622 16.5767 13.0153 16.6781 10.6958 15.7774C7.82461 14.6541 5.92851 11.751 5.77539 11.5523C5.62851 11.3541 4.65039 10.0635 4.65039 8.72959C4.65039 7.39564 5.33398 6.7291 5.6333 6.41306C5.88328 6.14993 6.31934 6.02649 6.73828 6.02649C6.89063 6.02649 7.02773 6.03427 7.15036 6.04048C7.45195 6.05444 7.60273 6.07461 7.80273 6.53661C8.05039 7.11621 8.63867 8.45024 8.71211 8.61157C8.78711 8.77277 8.86211 8.98966 8.75937 9.19902C8.66406 9.41603 8.57812 9.50988 8.41699 9.70215C8.25586 9.89443 8.10352 10.0389 7.94238 10.2389C7.79688 10.4155 7.63086 10.6077 7.81523 10.9249C7.99961 11.2343 8.63711 12.2655 9.56836 13.0935C10.7669 14.1398 11.7597 14.497 12.1106 14.6436C12.3661 14.7467 12.6747 14.7233 12.8669 14.5076C13.1067 14.2364 13.4009 13.7836 13.7009 13.3387C13.9209 13.0216 14.1997 12.9809 14.4941 13.084C14.7966 13.1794 16.121 13.8343 16.4458 13.997C16.7708 14.16 16.9794 14.238 17.0544 14.3723C17.1298 14.5061 17.1298 15.0857 16.371 14.9936Z"/>
        </svg>
      ),
      link: 'https://zalo.me/0962999866', // Replace with your Zalo link
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Phone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      link: 'tel:+84962999866', // Replace with your phone number
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Messenger',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.04C6.5 2.04 2 6.13 2 11.22C2 14.01 3.19 16.5 5.14 18.21C5.3 18.36 5.4 18.57 5.42 18.79L5.53 20.96C5.56 21.44 6.03 21.76 6.47 21.59L8.83 20.65C9.02 20.57 9.23 20.56 9.42 20.61C10.25 20.83 11.12 20.95 12 20.95C17.5 20.95 22 16.86 22 11.77C22 6.68 17.5 2.04 12 2.04ZM9.93 14.7L7.81 12.47C7.56 12.21 7.56 11.78 7.81 11.53L9.93 9.3C10.19 9.04 10.63 9.04 10.88 9.3L13 11.53C13.25 11.79 13.25 12.22 13 12.48L10.88 14.7C10.63 14.96 10.19 14.96 9.93 14.7ZM16.19 14.7L14.07 12.47C13.82 12.21 13.82 11.78 14.07 11.53L16.19 9.3C16.44 9.04 16.88 9.04 17.13 9.3L19.25 11.53C19.5 11.79 19.5 12.22 19.25 12.48L17.13 14.7C16.88 14.96 16.44 14.96 16.19 14.7Z" />
        </svg>
      ),
      link: 'https://m.me/miraiongaku', // Replace with your Facebook Messenger link
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ]
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <div className="fixed left-5 bottom-20 z-50 flex flex-col items-start space-y-3">
      {/* Main toggle button */}
      <button 
        onClick={toggleExpanded}
        className="w-12 h-12 rounded-full bg-accent text-white shadow-lg flex items-center justify-center hover:bg-accent-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
        aria-label={isExpanded ? "Close contact options" : "Open contact options"}
      >
        {isExpanded ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      
      {/* Contact options */}
      <div className="space-y-3">
        {contactOptions.map((option, index) => (
          <a
            key={option.name}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-12 h-12 rounded-full text-white shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50",
              option.color,
              isExpanded
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100px] opacity-0 pointer-events-none"
            )}
            style={{ transitionDelay: `${index * 50}ms` }}
            aria-label={option.name}
          >
            {option.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default FloatingContactButtons 