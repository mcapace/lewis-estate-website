'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn, staggerContainer, staggerItem } from '@/lib/animations'

export default function DiscoverWinesSection() {
  return (
    <section id="wines" className="min-h-screen bg-black flex flex-col justify-center items-center py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Small Headline */}
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6 font-inter">
            THE CELLAR AWAITS
          </h2>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-tight text-white mb-8">
            Discover Lewis Wines
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mx-auto mb-16 max-w-2xl">
            Explore Lewis' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.
          </p>
          
          {/* CTA Button */}
          <motion.button
            className="bg-lewis-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors mb-16"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE WINES
          </motion.button>
        </motion.div>

        {/* Wine Bottles */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center items-end space-x-8 lg:space-x-16"
        >
          {/* Chardonnay Bottle */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col items-center group"
          >
            <motion.div
              className="relative w-20 h-80 lg:w-24 lg:h-96"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/wine-bottles/product-showcase.png"
                alt="Lewis Cellars Chardonnay"
                width={280}
                height={700}
                quality={90}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
            <div className="text-center mt-4">
              <h3 className="text-white font-semibold text-sm mb-1">LEWIS CELLARS</h3>
              <p className="text-lewis-gold text-sm mb-1">CHARDONNAY</p>
              <p className="text-white/60 text-xs uppercase tracking-widest">NAPA VALLEY</p>
            </div>
          </motion.div>

          {/* Cabernet Sauvignon Bottle */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col items-center group"
          >
            <motion.div
              className="relative w-20 h-80 lg:w-24 lg:h-96"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/wine-bottles/product-showcase.png"
                alt="Lewis Cellars Cabernet Sauvignon"
                width={280}
                height={700}
                quality={90}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
            <div className="text-center mt-4">
              <h3 className="text-white font-semibold text-sm mb-1">LEWIS CELLARS</h3>
              <p className="text-lewis-gold text-sm mb-1">CABERNET SAUVIGNON</p>
              <p className="text-white/60 text-xs uppercase tracking-widest">NAPA VALLEY</p>
            </div>
          </motion.div>

          {/* The Big Blend Bottle */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col items-center group"
          >
            <motion.div
              className="relative w-20 h-80 lg:w-24 lg:h-96"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/wine-bottles/product-showcase.png"
                alt="Lewis Cellars The Big Blend"
                width={280}
                height={700}
                quality={90}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
            <div className="text-center mt-4">
              <h3 className="text-white font-semibold text-sm mb-1">LEWIS CELLARS</h3>
              <p className="text-lewis-gold text-sm mb-1">THE BIG BLEND</p>
              <p className="text-white/60 text-xs uppercase tracking-widest">NAPA VALLEY</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
