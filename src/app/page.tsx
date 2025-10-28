'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import WineBottle from '@/components/sections/WineBottle'
import { WINE_COLLECTION, IMAGE_PATHS } from '@/lib/constants'
import { fadeIn, fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section - Exact Figma Specifications */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <Image
            src={IMAGE_PATHS.hero.homepage}
            alt="Lewis Estate luxury wine experience"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </motion.div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-xs uppercase tracking-widest text-white/80 mb-4 font-inter">
              THE HOME OF BIG REDS AND SEXY CHARDONNAYS
            </h2>
            <h1 className="hero-title text-white mb-6">
              Napa Valley's Ultimate Experience Awaits
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, 
              evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a 
              tasting room. It's Napa Valley's ultimate indulgence.
            </p>
          </motion.div>
        </div>
        
        {/* Pagination - Bottom Center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-sm text-white/60 mb-2">1 / 9</div>
          <div className="flex items-center space-x-4">
            <button className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Wine Cellar Section */}
      <section className="min-h-screen bg-black flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Wine Bottles - Centered horizontally */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-12 md:space-x-20 mb-20"
        >
          {WINE_COLLECTION.map((wine, index) => (
            <motion.div key={wine.type} variants={staggerItem}>
              <WineBottle wine={wine} index={index} />
            </motion.div>
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
            src={IMAGE_PATHS.salonPrive.couple}
            alt="Intimate couple in luxury wine setting"
            fill
            className="object-cover"
            quality={90}
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
                src={IMAGE_PATHS.culinary.platedDish}
                alt="Gourmet plated dish from MICHELIN-Starred chef"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                quality={90}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={IMAGE_PATHS.culinary.diningRoom}
                alt="Elegant dining room at Lewis Estate"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                quality={90}
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
            src={IMAGE_PATHS.tastings.couple}
            alt="Wine tasting experience with couple"
            fill
            className="object-cover"
            quality={90}
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

      <Footer />
    </main>
  )
}