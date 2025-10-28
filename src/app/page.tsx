'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import WineBottle from '@/components/sections/WineBottle'

const wines = [
  {
    name: 'LEWIS CELLARS',
    type: 'CHARDONNAY',
    region: 'NAPA VALLEY',
    bottleType: 'chardonnay' as const,
    emblemColor: 'gold' as const
  },
  {
    name: 'LEWIS CELLARS',
    type: 'CABERNET SAUVIGNON',
    region: 'NAPA VALLEY',
    bottleType: 'cabernet' as const,
    emblemColor: 'gold' as const
  },
  {
    name: 'LEWIS CELLARS',
    type: 'THE BIG BLEND',
    region: 'NAPA VALLEY',
    bottleType: 'big-blend' as const,
    emblemColor: 'bronze' as const
  }
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <Image
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury wine tasting experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </motion.div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="section-subtitle mb-6">
              THE HOME OF BIG REDS AND SEXY CHARDONNAYS
            </h2>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-tight">
              Napa Valley's Ultimate Experience Awaits
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto">
              With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, 
              evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a 
              tasting room. It's Napa Valley's ultimate indulgence.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-sm text-gray-400 mb-2">1/9</div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Wine Cellar Section */}
      <section className="min-h-screen bg-black flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Wine Bottles - Centered horizontally */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-12 md:space-x-20 mb-20"
        >
          {wines.map((wine, index) => (
            <WineBottle key={wine.type} wine={wine} index={index} />
          ))}
        </motion.div>

        {/* Hero Text - Centered below bottles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="section-subtitle mb-6">THE CELLAR AWAITS</h2>
          <h1 className="section-title text-white mb-8">Discover Lewis Wines</h1>
          <p className="section-description mx-auto mb-10">
            Explore Lewis' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE WINES
          </motion.button>
        </motion.div>
      </section>

      {/* Salon Privé Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <Image
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Intimate couple in luxury wine setting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-subtitle mb-6">ENTER A SECLUDED WORLD</h2>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-tight">
              Salon Privé
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto">
              Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy 
              white glove, on-call concierge service, customizable menus, access to both indoor and outdoor 
              Salons Privés, access to their private cellar, private car service, and more.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE THE SALON PRIVÉ
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Culinary Experiences Section */}
      <section className="min-h-screen bg-black flex items-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt="Gourmet plated dish"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Elegant dining room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h1 className="section-title text-white mb-6">Culinary Experiences</h1>
            <p className="section-description mb-8">
              Indulge in their MICHELIN-Starred chef's culinary experiences curated to heighten your every sensation.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK A TASTE OF LEWIS
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Wine Tasting Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <Image
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Wine tasting experience with couple"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-subtitle mb-6">A SENSORY EXPERIENCE</h2>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-tight">
              Wine Tastings
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto">
              Explore the passion and craftsmanship of Lewis' winemaking with unique experiences designed to delight your every sense.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK A WINE TASTING
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}