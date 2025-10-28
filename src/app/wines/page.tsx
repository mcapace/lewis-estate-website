'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { WINE_COLLECTION, IMAGE_PATHS } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function WinesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_PATHS.hero.homepage}
            alt="Lewis Estate wine collection"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <h2 className="section-subtitle mb-6">DISCOVER OUR COLLECTION</h2>
            <h1 className="hero-title text-white mb-8">
              Lewis Estate Wines
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Experience the artistry of Lewis Estate's legendary wines, each bottle 
              crafted with passion and precision to deliver Napa Valley's finest expressions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wine Collection */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {WINE_COLLECTION.map((wine, index) => (
              <motion.div
                key={wine.type}
                variants={staggerItem}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="wine-bottle mx-auto group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-8 bg-gray-800 rounded-t-full"></div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-5 h-2 bg-black rounded-t-full"></div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className={`label-emblem ${
                        wine.emblemColor === 'gold' ? 'emblem-gold' : 'emblem-bronze'
                      }`}>
                        L
                      </div>
                      <div className="label-text">
                        <div className="font-semibold tracking-wide">{wine.name}</div>
                        <div className="font-medium mt-1">{wine.type}</div>
                        <div className="text-gray-300 mt-1 text-xs">{wine.region}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-playfair text-2xl font-semibold mb-4">
                  {wine.type}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {wine.description}
                </p>
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LEARN MORE
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tasting Notes Section */}
      <section className="py-20 md:py-32 bg-lewis-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-subtitle mb-6">TASTING NOTES</h2>
            <h1 className="section-title text-white mb-8">
              Expert Guidance
            </h1>
            <p className="section-description max-w-3xl mx-auto">
              Our sommeliers guide you through each wine's unique characteristics, 
              helping you discover the perfect pairing for your palate.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Aroma",
                description: "Discover the complex bouquet of each wine, from fruity notes to subtle oak influences."
              },
              {
                title: "Palate",
                description: "Experience the full-bodied flavors and textures that make each wine unique."
              },
              {
                title: "Finish",
                description: "Savor the lingering aftertaste that completes the wine tasting experience."
              }
            ].map((note, index) => (
              <motion.div
                key={note.title}
                variants={staggerItem}
                className="bg-black/50 p-8 rounded-lg border border-gray-800"
              >
                <h3 className="font-playfair text-xl font-semibold mb-4 text-lewis-gold">
                  {note.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {note.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
