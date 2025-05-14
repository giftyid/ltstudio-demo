import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  fluid?: boolean
}

const Container = ({
  children,
  className,
  size = 'lg',
  fluid = false,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6',
        {
          'max-w-4xl': size === 'sm' && !fluid,
          'max-w-5xl': size === 'md' && !fluid,
          'max-w-6xl': size === 'lg' && !fluid,
          'max-w-7xl': size === 'xl' && !fluid,
          'max-w-none': size === 'full' || fluid,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container 