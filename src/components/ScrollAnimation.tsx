'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function ScrollAnimation({ children, delay = 0, className = '' }: ScrollAnimationProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

