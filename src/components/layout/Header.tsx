'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="relative w-44 h-auto">
            <Image
              src="/images/logos/wine-spectator-logo.png"
              alt="Wine Spectator"
              width={180}
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <button
              onClick={() => scrollToSection('wine-tastings')}
              className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors"
            >
              WINE TASTINGS
            </button>
            <button
              onClick={() => scrollToSection('culinary')}
              className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors"
            >
              CULINARY EXPERIENCES
            </button>
            <button
              onClick={() => scrollToSection('salon-prive')}
              className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors"
            >
              SALON PRIVÉ
            </button>
            <button
              onClick={() => scrollToSection('wines')}
              className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors"
            >
              WINES
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="py-4 space-y-4">
            <button
              onClick={() => scrollToSection('wine-tastings')}
              className="block w-full text-left text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors py-2"
            >
              WINE TASTINGS
            </button>
            <button
              onClick={() => scrollToSection('culinary')}
              className="block w-full text-left text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors py-2"
            >
              CULINARY EXPERIENCES
            </button>
            <button
              onClick={() => scrollToSection('salon-prive')}
              className="block w-full text-left text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors py-2"
            >
              SALON PRIVÉ
            </button>
            <button
              onClick={() => scrollToSection('wines')}
              className="block w-full text-left text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors py-2"
            >
              WINES
            </button>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}
