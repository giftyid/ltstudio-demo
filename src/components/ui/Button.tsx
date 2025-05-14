import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Tạo interface riêng cho các props của Link
interface LinkButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

// Interface chính cho Button
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'outline' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  href?: string
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled,
  fullWidth = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent-dark',
    outline: 'border-2 border-accent text-accent hover:bg-accent/10',
    ghost: 'hover:bg-accent/10 text-accent',
    link: 'text-accent underline-offset-4 hover:underline'
  }

  const sizeStyles = {
    xs: 'text-xs h-7 px-2 rounded-md',
    sm: 'text-sm h-8 px-3 sm:h-9 sm:px-4 rounded-md',
    md: 'text-sm h-10 px-4 sm:text-base sm:h-11 sm:px-6 rounded-md',
    lg: 'text-base h-11 px-5 sm:text-lg sm:h-12 sm:px-8 rounded-md',
    xl: 'text-lg h-12 px-6 sm:text-xl sm:h-14 sm:px-10 rounded-md'
  }

  const widthStyles = fullWidth ? 'w-full' : ''

  const classes = cn(
    baseStyles, 
    variantStyles[variant], 
    sizeStyles[size], 
    widthStyles,
    className
  )

  const content = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  )

  if (href) {
    return (
      <Link 
        href={href} 
        className={classes}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button 