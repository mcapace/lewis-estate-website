'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn, staggerContainer, staggerItem } from '@/lib/animations'

export default function CulinarySection() {
  return (
    <section id="culinary" className="min-h-screen bg-black flex items-center py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden group"
          >
            <Image
              src="/images/culinary/plated-dish.png"
              alt="Gourmet plated dish from MICHELIN-Starred chef"
              fill
              quality={90}
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Right Column - Text + Small Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Top: Text Content */}
            <div className="mb-8">
              {/* Small Headline */}
              <h2 className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6 font-inter">
                A MAGICAL INTERPLAY
              </h2>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-tight text-white mb-6">
                Culinary Experiences
              </h1>
              
              {/* Description */}
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-2xl">
                Indulge in their MICHELIN-Starred chef's culinary experiences curated to heighten your every sensation.
              </p>
              
              {/* CTA Button */}
              <motion.button
                className="bg-lewis-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                BOOK A TASTE OF LEWIS
              </motion.button>
            </div>

            {/* Bottom: Small Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-48 lg:h-[300px] rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/culinary/dining-room.jpg"
                alt="Elegant dining room at Lewis Estate"
                fill
                quality={90}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
