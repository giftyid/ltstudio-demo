'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Define the shake animation keyframes
const addShakeAnimation = () => {
  // Create a style element
  const styleEl = document.createElement('style');
  // Define the animation
  styleEl.textContent = `
    @keyframes shake {
      0% { transform: translateX(0); }
      10%, 90% { transform: translateX(-1px); }
      20%, 80% { transform: translateX(2px); }
      30%, 50%, 70% { transform: translateX(-2px); }
      40%, 60% { transform: translateX(2px); }
      100% { transform: translateX(0); }
    }

    .shake-animation {
      animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) 3;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
  `;
  // Add it to the head
  document.head.appendChild(styleEl);
};

const SocialButtons = () => {
  const pathname = usePathname();

  useEffect(() => {
    addShakeAnimation();
  }, []);

  useEffect(() => {
    // On route change, re-add shake-animation to all social buttons
    const buttons = document.querySelectorAll('.social-shake-btn');
    buttons.forEach(btn => {
      btn.classList.remove('shake-animation');
      // Force reflow to restart animation
      void (btn as HTMLElement).offsetWidth;
      btn.classList.add('shake-animation');
    });
    // Remove shake-animation after 2.5s (0.82s * 3)
    const timeout = setTimeout(() => {
      buttons.forEach(btn => {
        btn.classList.remove('shake-animation');
      });
    }, 2500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  const socialButtons = [
    {
      name: 'Facebook',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
        </svg>
      ),
      link: 'https://facebook.com/miraiongaku', // Replace with your Facebook page
      color: 'bg-[#1877F2]'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      link: 'https://wa.me/84962999866', // Replace with your WhatsApp number
      color: 'bg-[#25D366]'
    },
    {
      name: 'Phone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.384 17.752a2.108 2.108 0 00-.64-1.32c-.441-.434-1.352-.97-2.731-1.605a2.134 2.134 0 00-1.984.133c-.613.39-1 .814-1.165 1.275-.763-.22-1.735-.747-2.916-1.58-1.181-.834-2.169-1.74-2.962-2.72.416-.242.782-.683 1.098-1.325.316-.641.395-1.23.235-1.766-.345-1.448-.783-2.47-1.311-3.065A1.89 1.89 0 008.05 5.138c-.431 0-.96.153-1.59.46-.63.306-1.185.755-1.667 1.345-.483.59-.773 1.227-.872 1.912-.148 1.009.038 2.136.558 3.382.52 1.246 1.206 2.364 2.057 3.352.85.989 1.797 1.922 2.839 2.798 1.041.876 2.07 1.546 3.086 2.01.66.285 1.304.508 1.93.67.627.162 1.23.232 1.812.21a4.01 4.01 0 001.409-.254c.46-.165.89-.394 1.293-.685.402-.291.72-.59.953-.894.233-.305.35-.605.35-.9 0-.207-.055-.405-.163-.596-.109-.19-.15-.313-.126-.369.025-.056.113-.028.266.084.152.113.32.206.502.28.183.075.352.112.507.112.28 0 .483-.052.609-.154.125-.103.209-.196.251-.28a.734.734 0 00.064-.27c.008-.11.008-.19 0-.239-.025-.075-.107-.173-.245-.294z" />
        </svg>
      ),
      link: 'tel:+84962999866', // Replace with your phone number
      color: 'bg-[#FF0000]'
    }
  ]
  
  return (
    <div className="fixed right-2 top-3/4 -translate-y-1/2 z-50 flex flex-col items-end space-y-4">
      {socialButtons.map((button) => (
        <a
          key={button.name}
          href={button.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-16 h-16 rounded-full text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-opacity-50 ${button.color} social-shake-btn shake-animation`}
          aria-label={button.name}
        >
          {button.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialButtons 