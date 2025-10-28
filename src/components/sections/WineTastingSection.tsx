'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn, staggerContainer, staggerItem } from '@/lib/animations'

export default function WineTastingSection() {
  return (
    <section id="wine-tastings" className="min-h-screen bg-black flex items-center py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Small Headline */}
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6 font-inter">
              A SENSORY EXPERIENCE
            </h2>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-tight text-white mb-6">
              Wine Tastings
            </h1>
            
            {/* Description */}
            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-2xl">
              Explore the passion and craftsmanship of Lewis' winemaking with unique experiences designed to delight your every sense.
            </p>
            
            {/* CTA Button */}
            <motion.button
              className="bg-lewis-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK A WINE TASTING
            </motion.button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden group"
          >
            <Image
              src="/images/wine-tasting/wine-tasting-couple.png"
              alt="Wine tasting experience with couple"
              fill
              quality={90}
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
