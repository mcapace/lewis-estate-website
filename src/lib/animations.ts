import { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
}

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0
  }
}

export const scaleHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 }
}

export const parallax: Variants = {
  initial: { y: 0 },
  animate: { y: -50 }
}

export const buttonHover: Variants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.05, y: -2 },
  tap: { scale: 0.98 }
}