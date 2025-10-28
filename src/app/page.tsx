'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Wine Spectator Logo */}
            <div className="relative w-44 h-auto">
              <Image
                src="/images/logos/wine-spectator-logo.png"
                alt="Wine Spectator"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            
            {/* Navigation Menu */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#wine-tastings" className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors">
                WINE TASTINGS
              </a>
              <a href="#culinary" className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors">
                CULINARY EXPERIENCES
              </a>
              <a href="#salon-prive" className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors">
                SALON PRIVÉ
              </a>
              <a href="#wines" className="text-sm uppercase tracking-wider text-white hover:text-lewis-gold transition-colors">
                WINES
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/homepage-hero.png"
            alt="Lewis Estate wine cellar experience"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/70 mb-6 font-inter">
              THE HOME OF BIG REDS AND SEXY CHARDONNAYS
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-normal leading-[1.1] text-white mb-8">
              Napa Valley's Ultimate Experience Awaits
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a tasting room. It's Napa Valley's ultimate indulgence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="min-h-screen bg-black flex items-center justify-center py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white text-center max-w-4xl mx-auto mb-6 leading-relaxed">
              "A record of excellence that few California wineries can rival."
            </blockquote>
            <cite className="text-sm uppercase tracking-widest text-lewis-gold text-center font-inter">
              - JAMES LAUBE, WINE SPECTATOR
            </cite>
          </motion.div>
        </div>
      </section>

      {/* Wine Tastings Section */}
      <section id="wine-tastings" className="min-h-screen bg-black flex items-center py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6 font-inter">
                A SENSORY EXPERIENCE
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-tight text-white mb-6">
                Wine Tastings
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-2xl">
                Explore the passion and craftsmanship of Lewis' winemaking with unique experiences designed to delight your every sense.
              </p>
              <button className="bg-lewis-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors">
                BOOK A WINE TASTING
              </button>
            </motion.div>

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

      {/* Culinary Section */}
      <section id="culinary" className="min-h-screen bg-black flex items-center py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="mb-8">
                <h2 className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6 font-inter">
                  A MAGICAL INTERPLAY
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-tight text-white mb-6">
                  Culinary Experiences
                </h1>
                <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-2xl">
                  Indulge in their MICHELIN-Starred chef's culinary experiences curated to heighten your every sensation.
                </p>
                <button className="bg-lewis-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors">
                  BOOK A TASTE OF LEWIS
                </button>
              </div>

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

      {/* Salon Privé Section */}
      <section id="salon-prive" className="relative min-h-screen flex items-center justify-center">
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
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/70 mb-6 font-inter">
              ENTER A SECLUDED WORLD
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-normal italic leading-none text-white mb-8">
              Salon Privé
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
              Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy white glove, on-call concierge service, customizable menus, access to both indoor and outdoor Salons Privés, access to their private cellar, private car service, and more.
            </p>
            <button className="bg-lewis-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors">
              EXPLORE THE SALON PRIVÉ
            </button>
          </motion.div>
        </div>
      </section>

      {/* Discover Wines Section */}
      <section id="wines" className="min-h-screen bg-black flex flex-col justify-center items-center py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6 font-inter">
              THE CELLAR AWAITS
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-tight text-white mb-8">
              Discover Lewis Wines
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mx-auto mb-16 max-w-2xl">
              Explore Lewis' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.
            </p>
            <button className="bg-lewis-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors mb-16">
              EXPLORE WINES
            </button>
          </motion.div>

          {/* Wine Bottles */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center items-end space-x-8 lg:space-x-16"
          >
            <div className="flex flex-col items-center group">
              <div className="relative w-20 h-80 lg:w-24 lg:h-96">
                <Image
                  src="/images/wine-bottles/product-showcase.png"
                  alt="Lewis Cellars Chardonnay"
                  width={280}
                  height={700}
                  quality={90}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white font-semibold text-sm mb-1">LEWIS CELLARS</h3>
                <p className="text-lewis-gold text-sm mb-1">CHARDONNAY</p>
                <p className="text-white/60 text-xs uppercase tracking-widest">NAPA VALLEY</p>
              </div>
            </div>

            <div className="flex flex-col items-center group">
              <div className="relative w-20 h-80 lg:w-24 lg:h-96">
                <Image
                  src="/images/wine-bottles/product-showcase.png"
                  alt="Lewis Cellars Cabernet Sauvignon"
                  width={280}
                  height={700}
                  quality={90}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white font-semibold text-sm mb-1">LEWIS CELLARS</h3>
                <p className="text-lewis-gold text-sm mb-1">CABERNET SAUVIGNON</p>
                <p className="text-white/60 text-xs uppercase tracking-widest">NAPA VALLEY</p>
              </div>
            </div>

            <div className="flex flex-col items-center group">
              <div className="relative w-20 h-80 lg:w-24 lg:h-96">
                <Image
                  src="/images/wine-bottles/product-showcase.png"
                  alt="Lewis Cellars The Big Blend"
                  width={280}
                  height={700}
                  quality={90}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white font-semibold text-sm mb-1">LEWIS CELLARS</h3>
                <p className="text-lewis-gold text-sm mb-1">THE BIG BLEND</p>
                <p className="text-white/60 text-xs uppercase tracking-widest">NAPA VALLEY</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 lg:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div>
              <h3 className="text-xl font-heading text-white mb-4">Lewis Cellars</h3>
              <p className="text-white/70 mb-4">Napa Valley, California</p>
              <p className="text-white/70 text-sm leading-relaxed">
                A family-owned winery dedicated to crafting exceptional, small-lot wines from Napa Valley's finest vineyards.
              </p>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-lewis-gold mb-6 font-inter">
                QUICK LINKS
              </h4>
              <nav className="space-y-3">
                <a href="#wine-tastings" className="block text-white/70 hover:text-lewis-gold transition-colors">
                  Wine Tastings
                </a>
                <a href="#culinary" className="block text-white/70 hover:text-lewis-gold transition-colors">
                  Culinary Experiences
                </a>
                <a href="#salon-prive" className="block text-white/70 hover:text-lewis-gold transition-colors">
                  Salon Privé
                </a>
                <a href="#wines" className="block text-white/70 hover:text-lewis-gold transition-colors">
                  Wines
                </a>
                <a href="#contact" className="block text-white/70 hover:text-lewis-gold transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-lewis-gold mb-6 font-inter">
                CONNECT
              </h4>
              <div className="space-y-3 text-white/70">
                <p>Phone: +1 (707) 265-8700</p>
                <p>Email: info@lewiscellars.com</p>
                <p>Address: 1200 Dowdell Lane, Napa Valley, CA 94558</p>
                <p>Hours: Daily 10 AM - 4 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-8 mt-12 border-t border-white/10 text-center"
          >
            <p className="text-sm text-white/40">
              © 2025 Lewis Cellars. All rights reserved.
            </p>
            <p className="text-xs text-white/30 mt-2">
              Powered by Wine Spectator
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}