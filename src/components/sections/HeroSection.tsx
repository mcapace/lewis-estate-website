'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn } from '@/lib/animations'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/homepage-hero.png"
          alt="Lewis Estate wine cellar experience"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-6 lg:px-8 py-6">
        {/* Wine Spectator Logo */}
        <div className="relative w-44 h-auto">
          <Image
            src="/images/logos/wine-spectator-logo.png"
            alt="Wine Spectator"
            width={180}
            height={60}
            className="object-contain"
          />
        </div>
        
        {/* Navigation Menu */}
        <nav className="hidden lg:flex space-x-8">
          <a href="#wine-tastings" className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors">
            WINE TASTINGS
          </a>
          <a href="#culinary" className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors">
            CULINARY EXPERIENCES
          </a>
          <a href="#salon-prive" className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors">
            SALON PRIVÉ
          </a>
          <a href="#wines" className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors">
            WINES
          </a>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          {/* Small Headline */}
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/70 mb-6 font-inter">
            THE HOME OF BIG REDS AND SEXY CHARDONNAYS
          </h2>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-normal leading-[1.1] text-white mb-8">
            Napa Valley's Ultimate Experience Awaits
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a tasting room. It's Napa Valley's ultimate indulgence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
