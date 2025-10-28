'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { fadeIn, fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section - Black Background with Text Only */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/80 mb-8 font-inter font-medium">
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
          {/* Wine Bottles - Six bottles in two rows like Figma */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-8 lg:space-x-12 mb-16"
          >
            {/* Left Group - 3 bottles */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold text-sm">LEWIS CELLARS</h3>
                <p className="text-lewis-gold text-sm">CHARDONNAY</p>
                <p className="text-white/60 text-xs">NAPA VALLEY</p>
              </div>
              <div className="flex space-x-4">
                <div className="w-16 h-40 bg-gray-800 rounded-lg"></div>
                <div className="w-16 h-40 bg-gray-800 rounded-lg"></div>
                <div className="w-16 h-40 bg-gray-800 rounded-lg"></div>
              </div>
            </div>

            {/* Right Group - 3 bottles */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold text-sm">LEWIS CELLARS</h3>
                <p className="text-lewis-gold text-sm">CABERNET SAUVIGNON</p>
                <p className="text-white/60 text-xs">NAPA VALLEY</p>
              </div>
              <div className="flex space-x-4">
                <div className="w-16 h-40 bg-gray-800 rounded-lg"></div>
                <div className="w-16 h-40 bg-gray-800 rounded-lg"></div>
                <div className="w-16 h-40 bg-gray-800 rounded-lg"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Below Bottles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/70 mb-8 font-inter font-medium">
              THE CELLAR
            </h2>
            <h1 className="text-5xl lg:text-7xl font-playfair font-normal leading-[1.1] text-white mb-10">
              Discover Lewis Wines
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mx-auto mb-16 max-w-3xl font-light">
              Tap into the world of legendary wines and discover the story behind every bottle.
            </p>
            <motion.button
              className="btn-primary text-lg px-12 py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE THE CELLAR
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Salon Privé Section - Black Background with Text Only */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/80 mb-8 font-inter font-medium">
              ENTER A SECLUDED WORLD
            </h2>
            <h1 className="text-6xl lg:text-8xl font-playfair font-normal text-white mb-10 leading-[0.9]">
              Salon Privé
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 leading-relaxed mb-16 max-w-4xl mx-auto font-light">
              Experience the ultimate in exclusivity with our Salon Privé membership. Enjoy access to limited-release wines, private tastings, and events.
            </p>
            <motion.button
              className="btn-primary text-lg px-12 py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN SALON PRIVÉ
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Culinary Experiences Section - Black Background with Image */}
      <section className="relative min-h-screen bg-black flex items-center py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column - Culinary Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden group"
            >
              <img
                src="/images/culinary/plated-dish.png"
                alt="Gourmet plated dish from MICHELIN-Starred chef"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
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
                Indulge in exquisite food pairings crafted to complement our exceptional wines.
              </p>
              <motion.button
                className="btn-primary text-lg px-12 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                BOOK A TABLE
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wine Tasting Section - Black Background with Interior Image */}
      <section className="relative min-h-screen bg-black flex items-center py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column - Interior Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden group"
            >
              <img
                src="/images/culinary/dining-room.jpg"
                alt="Elegant interior at Lewis Estate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            {/* Right Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-sm uppercase tracking-[0.3em] text-white/80 mb-8 font-inter font-medium">
                A SENSORY EXPERIENCE
              </h2>
              <h1 className="text-5xl lg:text-7xl font-playfair font-normal text-white mb-8 leading-[1.1]">
                Wine Tastings
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl font-light">
                Join us for a unique and immersive tasting experience designed to delight your senses.
              </p>
              <motion.button
                className="btn-primary text-lg px-12 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                BOOK A TASTING
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}