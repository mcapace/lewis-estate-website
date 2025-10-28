import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export interface NavigationItem {
  name: string
  href: string
  isActive?: boolean
}

export interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export interface Wine {
  name: string
  type: string
  region: string
  bottleType: 'chardonnay' | 'cabernet' | 'big-blend' | 'rose'
  emblemColor: 'gold' | 'bronze'
  description?: string
  image?: string
}

export interface WineBottleProps {
  wine: Wine
  index: number
}

export interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage: string
  ctaText?: string
  ctaHref?: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: string
}
