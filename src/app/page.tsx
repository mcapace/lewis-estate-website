'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8])
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.05])

  return (
    <main className="bg-black text-white">
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="text-[#D3A737] font-playfair text-2xl font-bold">
              LEWIS CELLARS
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#wines" className="text-white hover:text-[#D3A737] transition-colors tracking-wider uppercase text-sm">Our Wines</a>
              <a href="#tastings" className="text-white hover:text-[#D3A737] transition-colors tracking-wider uppercase text-sm">Tastings</a>
              <a href="#culinary" className="text-white hover:text-[#D3A737] transition-colors tracking-wider uppercase text-sm">Culinary</a>
              <a href="#salon" className="text-white hover:text-[#D3A737] transition-colors tracking-wider uppercase text-sm">Salon Privé</a>
              <a href="#visit" className="text-white hover:text-[#D3A737] transition-colors tracking-wider uppercase text-sm">Visit</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
              <div className="px-6 py-4 space-y-4">
                <a href="#wines" className="block text-white hover:text-[#D3A737] transition-colors tracking-wider uppercase text-sm">Our Wines</a>
                <a href="#tastings" className="block text-white hover:text-[#D3A737] transition-colors tracking-wider uppercase text-sm">Tastings</a>
                <a href="#culinary" className="block text-white hover:text-[#D3A737] transition-colors tracking-wider uppercase text-sm">Culinary</a>
                <a href="#salon" className="block text-white hover:text-[#D3A737] transition-colors tracking-wider uppercase text-sm">Salon Privé</a>
                <a href="#visit" className="block text-white hover:text-[#D3A737] transition-colors tracking-wider uppercase text-sm">Visit</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen relative">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <Image
            src="/images/hero/homepage-hero.png"
            alt="Lewis Cellars Wine Tasting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          {/* Wine Spectator Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#D3A737] text-black px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-8"
          >
            Wine Spectator
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6"
          >
            LEWIS CELLARS
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl"
          >
            Napa Valley&apos;s Ultimate Wine Experience
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-[#D3A737] text-black px-8 py-4 text-lg font-semibold tracking-wider uppercase hover:bg-[#E5C1A0] transition-colors"
          >
            Explore Our Wines
          </motion.button>

          {/* Bouncing Chevron */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="text-white" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-[#0D0D0D] py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed mb-8">
              &ldquo;A record of excellence that few California wineries can rival.&rdquo;
            </blockquote>
            <cite className="text-[#D3A737] text-lg font-semibold not-italic">
              Wine Enthusiast
            </cite>
          </motion.div>
        </div>
      </section>

      {/* TASTINGS SECTION */}
      <section id="tastings" className="bg-white text-black py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] md:h-[600px] rounded-lg shadow-2xl overflow-hidden"
            >
              <Image
                src="/images/wine-tasting/wine-tasting-couple.png"
                alt="Wine Tasting Experience"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-[#D3A737] text-sm font-semibold tracking-wider uppercase mb-4">
                TASTINGS
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">
                Discover Our Legacy
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Experience the artistry of Lewis Cellars through guided tastings that showcase our award-winning wines and the passion behind each vintage.
              </p>
              <button className="bg-[#D3A737] text-black px-8 py-4 text-lg font-semibold tracking-wider uppercase hover:bg-[#E5C1A0] transition-colors">
                Book Tasting
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CULINARY SECTION */}
      <section id="culinary" className="bg-[#F4F4F4] text-black py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="text-[#D3A737] text-sm font-semibold tracking-wider uppercase mb-4">
                CULINARY
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">
                MICHELIN-Starred Cuisine
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Indulge in extraordinary culinary experiences crafted by our MICHELIN-Starred chef, where each dish perfectly complements our exceptional wines.
              </p>
              <button className="bg-[#D3A737] text-black px-8 py-4 text-lg font-semibold tracking-wider uppercase hover:bg-[#E5C1A0] transition-colors">
                View Menu
              </button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] md:h-[600px] rounded-lg shadow-2xl overflow-hidden order-1 md:order-2"
            >
              <Image
                src="/images/culinary/plated-dish.png"
                alt="Culinary Experience"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SALON PRIVÉ SECTION */}
      <section id="salon" className="relative h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/salon-prive/couple-luxury.png"
            alt="Salon Privé"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center text-white px-6"
        >
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Salon Privé
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the ultimate in luxury with our exclusive Salon Privé, featuring rare vintages and personalized service.
          </p>
          <button className="bg-[#D3A737] text-black px-8 py-4 text-lg font-semibold tracking-wider uppercase hover:bg-[#E5C1A0] transition-colors">
            Inquire Now
          </button>
        </motion.div>
      </section>

      {/* OUR WINES SECTION */}
      <section id="wines" className="bg-[#0D0D0D] py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Our Wines
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Discover our collection of exceptional wines, each crafted with passion and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Chardonnay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative w-32 h-80 mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/wine-bottles/product-showcase.png"
                  alt="Lewis Cellars Chardonnay"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#D3A737] to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-black font-playfair text-2xl font-bold">L</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">Chardonnay</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Rich and buttery with notes of vanilla and oak, perfectly balanced with crisp acidity.
              </p>
            </motion.div>

            {/* Cabernet Sauvignon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group text-center"
            >
              <div className="relative w-32 h-80 mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/wine-bottles/product-showcase.png"
                  alt="Lewis Cellars Cabernet Sauvignon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#D3A737] to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-black font-playfair text-2xl font-bold">L</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">Cabernet Sauvignon</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Bold and complex with dark fruit flavors and smooth tannins, aged to perfection.
              </p>
            </motion.div>

            {/* Red Blend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group text-center"
            >
              <div className="relative w-32 h-80 mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/wine-bottles/product-showcase.png"
                  alt="Lewis Cellars Red Blend"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#D3A737] to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-black font-playfair text-2xl font-bold">L</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">Red Blend</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Our signature blend showcasing the best of Napa Valley&apos;s finest varietals.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="bg-[#D3A737] text-black px-8 py-4 text-lg font-semibold tracking-wider uppercase hover:bg-[#E5C1A0] transition-colors">
              View Full Collection
            </button>
          </motion.div>
        </div>
      </section>

      {/* VISIT US SECTION */}
      <section id="visit" className="bg-gradient-to-b from-[#0D0D0D] to-[#1a1a1a] py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#D3A737] to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="text-black font-playfair text-4xl font-bold">L</span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8">
              Lewis Cellars
            </h2>
            
            <div className="text-white/80 text-lg space-y-2 mb-12">
              <p>5050 Arundell Cir — Silverado Trail, Calistoga</p>
              <p>Calistoga, CA 94515</p>
              <p>info@lewiscellars.com</p>
            </div>
            
            <button className="bg-[#D3A737] text-black px-8 py-4 text-lg font-semibold tracking-wider uppercase hover:bg-[#E5C1A0] transition-colors">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Visit */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Visit</h3>
              <ul className="space-y-2">
                <li><a href="#tastings" className="text-white/60 hover:text-[#D3A737] transition-colors">Tastings</a></li>
                <li><a href="#culinary" className="text-white/60 hover:text-[#D3A737] transition-colors">Culinary</a></li>
                <li><a href="#salon" className="text-white/60 hover:text-[#D3A737] transition-colors">Salon Privé</a></li>
                <li><a href="#visit" className="text-white/60 hover:text-[#D3A737] transition-colors">Location</a></li>
              </ul>
            </div>

            {/* Wines */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Wines</h3>
              <ul className="space-y-2">
                <li><a href="#wines" className="text-white/60 hover:text-[#D3A737] transition-colors">Our Collection</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#D3A737] transition-colors">Current Release</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#D3A737] transition-colors">Library Wines</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#D3A737] transition-colors">Limited Edition</a></li>
              </ul>
            </div>

            {/* Experiences */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Experiences</h3>
              <ul className="space-y-2">
                <li><a href="#tastings" className="text-white/60 hover:text-[#D3A737] transition-colors">Wine Tastings</a></li>
                <li><a href="#culinary" className="text-white/60 hover:text-[#D3A737] transition-colors">Dining</a></li>
                <li><a href="#salon" className="text-white/60 hover:text-[#D3A737] transition-colors">Private Events</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#D3A737] transition-colors">Tours</a></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-[#D3A737] transition-colors">Our Story</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#D3A737] transition-colors">Winemaking</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#D3A737] transition-colors">Awards</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#D3A737] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/40 text-sm">
              © 2025 Lewis Cellars. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}