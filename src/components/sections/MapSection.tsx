'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MapSection() {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">
            VISIT US
          </p>
          <h2 className="text-5xl lg:text-6xl font-heading text-white">
            Find Us in Napa Valley
          </h2>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden h-[400px] lg:h-[600px] shadow-2xl bg-gray-900"
        >
          {/* Static Map Background */}
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="cursor-pointer mb-4"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}
              >
                <Image
                  src="/images/logos/lewis-logo.png"
                  width={64}
                  height={64}
                  alt="Lewis Estate"
                  className="mx-auto"
                />
              </motion.div>
              <p className="text-white/80 text-lg">Lewis Estate</p>
              <p className="text-white/60 text-sm">Napa Valley, California</p>
            </div>
          </div>

          {/* Desktop Info Card */}
          <div className="hidden lg:block absolute top-8 right-8 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-8 max-w-sm">
            <h3 className="text-2xl font-heading text-white mb-4">
              Lewis Estate
            </h3>
            <p className="text-white/90 mb-2">
              Napa Valley, California
            </p>
            <p className="text-white/70 text-sm mb-6">
              Award-winning wines and MICHELIN-Starred dining
            </p>
            <a
              href="https://maps.google.com/?q=38.2975,-122.2869"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lewis-gold hover:bg-lewis-gold-hover text-black px-6 py-3 font-semibold uppercase tracking-wider transition-colors inline-block"
            >
              GET DIRECTIONS
            </a>
          </div>
        </motion.div>

        {/* Mobile Info Card */}
        <div className="lg:hidden mt-8 bg-lewis-gray border border-white/10 rounded-lg p-8">
          <h3 className="text-2xl font-heading text-white mb-4">
            Lewis Estate
          </h3>
          <p className="text-white/90 mb-2">
            Napa Valley, California
          </p>
          <p className="text-white/70 text-sm mb-6">
            Award-winning wines and MICHELIN-Starred dining
          </p>
          <a
            href="https://maps.google.com/?q=38.2975,-122.2869"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lewis-gold hover:bg-lewis-gold-hover text-black px-6 py-3 font-semibold uppercase tracking-wider transition-colors inline-block"
          >
            GET DIRECTIONS
          </a>
        </div>
      </div>
    </section>
  )
}
