'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn } from '@/lib/animations'

export default function SalonPriveSection() {
  return (
    <section id="salon-prive" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/salon-prive/couple-luxury.png"
          alt="Salon Privé intimate experience"
          fill
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Small Headline */}
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/70 mb-6 font-inter">
            ENTER A SECLUDED WORLD
          </h2>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-normal italic leading-none text-white mb-8">
            Salon Privé
          </h1>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
            Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy white glove, on-call concierge service, customizable menus, access to both indoor and outdoor Salons Privés, access to their private cellar, private car service, and more.
          </p>
          
          {/* CTA Button */}
          <motion.button
            className="bg-lewis-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE THE SALON PRIVÉ
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
