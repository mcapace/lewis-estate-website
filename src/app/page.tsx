'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { WINE_COLLECTION, IMAGE_PATHS } from '@/lib/constants'
import { fadeIn, fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section - Full Screen with Wine Tasting Photo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <img
            src="/images/wine-tasting/wine-tasting-couple.png"
            alt="Lewis Estate luxury wine tasting experience"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </motion.div>
        
        <div className="relative z-20 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-xs lg:text-sm uppercase tracking-[0.3em] text-white/80 mb-8 font-inter font-medium">
              THE HOME OF BIG REDS AND SEXY CHARDONNAYS
            </h2>
            <h1 className="text-6xl lg:text-8xl font-playfair font-normal leading-[0.9] text-white mb-10">
              Napa Valley's Ultimate Experience Awaits
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 leading-relaxed mb-16 max-w-4xl mx-auto font-light">
              With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, 
              evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a 
              tasting room. It's Napa Valley's ultimate indulgence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wine Cellar Section - Black Background with Wine Bottles */}
      <section className="relative min-h-screen bg-black flex flex-col justify-center items-center py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          {/* Wine Bottles - Three distinct bottles */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center items-end space-x-16 lg:space-x-24 mb-24"
          >
            {/* Chardonnay Bottle */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col items-center group"
            >
              <motion.div
                className="relative mb-8"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative w-32 h-80 lg:w-40 lg:h-96">
                  <img
                    src="/images/wine-bottles/product-showcase.png"
                    alt="Lewis Cellars Chardonnay"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
              <div className="text-center">
                <h3 className="font-playfair text-lg lg:text-xl font-semibold text-white mb-2">
                  LEWIS CELLARS
                </h3>
                <p className="text-sm lg:text-base text-lewis-gold font-medium mb-1">
                  CHARDONNAY
                </p>
                <p className="text-xs text-white/60 uppercase tracking-wider">
                  NAPA VALLEY
                </p>
              </div>
            </motion.div>

            {/* Cabernet Bottle */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col items-center group"
            >
              <motion.div
                className="relative mb-8"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative w-32 h-80 lg:w-40 lg:h-96">
                  <img
                    src="/images/wine-bottles/product-showcase.png"
                    alt="Lewis Cellars Cabernet Sauvignon"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
              <div className="text-center">
                <h3 className="font-playfair text-lg lg:text-xl font-semibold text-white mb-2">
                  LEWIS CELLARS
                </h3>
                <p className="text-sm lg:text-base text-lewis-gold font-medium mb-1">
                  CABERNET SAUVIGNON
                </p>
                <p className="text-xs text-white/60 uppercase tracking-wider">
                  NAPA VALLEY
                </p>
              </div>
            </motion.div>

            {/* The Big Blend Bottle */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col items-center group"
            >
              <motion.div
                className="relative mb-8"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative w-32 h-80 lg:w-40 lg:h-96">
                  <img
                    src="/images/wine-bottles/product-showcase.png"
                    alt="Lewis Cellars The Big Blend"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
              <div className="text-center">
                <h3 className="font-playfair text-lg lg:text-xl font-semibold text-white mb-2">
                  LEWIS CELLARS
                </h3>
                <p className="text-sm lg:text-base text-lewis-gold font-medium mb-1">
                  THE BIG BLEND
                </p>
                <p className="text-xs text-white/60 uppercase tracking-wider">
                  NAPA VALLEY
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content Below Bottles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-xs lg:text-sm uppercase tracking-[0.3em] text-white/70 mb-8 font-inter font-medium">
              THE CELLAR AWAITS
            </h2>
            <h1 className="text-5xl lg:text-7xl font-playfair font-normal leading-[1.1] text-white mb-10">
              Discover Lewis Wines
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mx-auto mb-16 max-w-3xl font-light">
              Explore Lewis' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.
            </p>
            <motion.button
              className="btn-primary text-lg px-12 py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE WINES
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Salon Privé Section - Full Screen with Couple Photo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <img
            src="/images/salon-prive/couple-luxury.png"
            alt="Intimate couple in luxury wine setting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </motion.div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs lg:text-sm uppercase tracking-[0.3em] text-white/80 mb-8 font-inter font-medium">
              ENTER A SECLUDED WORLD
            </h2>
            <h1 className="text-6xl lg:text-8xl font-playfair font-normal text-white mb-10 leading-[0.9]">
              Salon Privé
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 leading-relaxed mb-16 max-w-4xl mx-auto font-light">
              Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy 
              white glove, on-call concierge service, customizable menus, access to both indoor and outdoor 
              Salons Privés, access to their private cellar, private car service, and more.
            </p>
            <motion.button
              className="btn-primary text-lg px-12 py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE THE SALON PRIVÉ
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Culinary Experiences Section - Black Background with Two Images */}
      <section className="relative min-h-screen bg-black flex items-center py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column - Two Images Stacked */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Top Image - Plated Dish */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-80 lg:h-96 rounded-lg overflow-hidden group"
              >
                <img
                  src="/images/culinary/plated-dish.png"
                  alt="Gourmet plated dish from MICHELIN-Starred chef"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              
              {/* Bottom Image - Dining Room */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-80 lg:h-96 rounded-lg overflow-hidden group"
              >
                <img
                  src="/images/culinary/dining-room.jpg"
                  alt="Elegant dining room at Lewis Estate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </motion.div>
            
            {/* Right Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl lg:text-7xl font-playfair font-normal text-white mb-8 leading-[1.1]">
                Culinary Experiences
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl font-light">
                Indulge in their MICHELIN-Starred chef's culinary experiences curated to heighten your every sensation.
              </p>
              <motion.button
                className="btn-primary text-lg px-12 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                BOOK A TASTE OF LEWIS
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wine Tasting Section - Full Screen with Couple Photo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <img
            src="/images/wine-tasting/wine-tasting-couple.png"
            alt="Wine tasting experience with couple"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </motion.div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs lg:text-sm uppercase tracking-[0.3em] text-white/80 mb-8 font-inter font-medium">
              A SENSORY EXPERIENCE
            </h2>
            <h1 className="text-6xl lg:text-8xl font-playfair font-normal text-white mb-10 leading-[0.9]">
              Wine Tastings
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 leading-relaxed mb-16 max-w-4xl mx-auto font-light">
              Explore the passion and craftsmanship of Lewis' winemaking with unique experiences designed to delight your every sense.
            </p>
            <motion.button
              className="btn-primary text-lg px-12 py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK A WINE TASTING
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}