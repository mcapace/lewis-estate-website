'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '' 
}: ButtonProps) {
  const baseClasses = `
    px-8 lg:px-10 py-4 lg:py-5
    font-semibold uppercase tracking-wider
    transition-all duration-300
    inline-block text-center
  `

  const variantClasses = {
    primary: `
      bg-lewis-gold hover:bg-lewis-gold-hover
      text-black
    `,
    secondary: `
      bg-transparent border-2 border-lewis-gold
      text-lewis-gold hover:bg-lewis-gold hover:text-black
    `
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="block"
        >
          {children}
        </motion.span>
      </Link>
    )
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
