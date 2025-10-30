'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [quoteRef, quoteInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [tastingsRef, tastingsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [culinaryRef, culinaryInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [salonRef, salonInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [winesRef, winesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <main className="bg-Brand-Black">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-Brand-Black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Wine Spectator Logo */}
            <div className="flex items-center">
              <span className="text-Brand-White font-neue-haas text-sm tracking-wider">Wine Spectator</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-Brand-White text-sm font-neue-haas hover:text-Brand-Gold-(Drk-BG) transition-colors tracking-wide uppercase">Wine Spectator</a>
              <a href="#" className="text-Brand-White text-sm font-neue-haas hover:text-Brand-Gold-(Drk-BG) transition-colors tracking-wide uppercase">Current Issue</a>
              <a href="#" className="text-Brand-White text-sm font-neue-haas hover:text-Brand-Gold-(Drk-BG) transition-colors tracking-wide uppercase">Restaurants</a>
              <a href="#" className="text-Brand-White text-sm font-neue-haas hover:text-Brand-Gold-(Drk-BG) transition-colors tracking-wide uppercase">Videos</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/homepage-hero.png"
            alt="Wine Tasting Experience"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-Brand-Black/40 via-Brand-Black/50 to-Brand-Black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20 pb-32">
          <motion.div
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={staggerChildren}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-Secondary-Light-Gold-(Drk-BG) text-xs font-neue-haas tracking-[0.2em] uppercase mb-6"
            >
              Welcome to Napa Valley at Lewis Cellars
            </motion.p>
            
            <motion.h1
              variants={fadeInUp}
              className="text-Brand-White font-playfair text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8"
            >
              Napa Valley&apos;s Ultimate Experience Awaits
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-Brand-White/90 font-neue-haas text-base md:text-lg leading-relaxed max-w-2xl mb-12"
            >
              We proudly welcome Wine Spectator subscribers and guests to our MICHELIN-Starred experiences and Wine Spectator Grand Award wine collection. Whether you plan to stay for more than a weekend, our newly different is a journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section ref={quoteRef} className="py-24 md:py-32 bg-Brand-Black">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            animate={quoteInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-Brand-White leading-[1.3] mb-8">
              &ldquo;A record of excellence that few California wineries can rival.&rdquo;
            </blockquote>
            <cite className="text-Secondary-Light-Gold-(Drk-BG) font-neue-haas text-sm tracking-[0.15em] uppercase not-italic">
              James Laube, Wine Spectator
            </cite>
          </motion.div>
        </div>
      </section>

      {/* Wine Tastings Section */}
      <section ref={tastingsRef} className="py-16 md:py-24 bg-Brand-Black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial="initial"
              animate={tastingsInView ? "animate" : "initial"}
              variants={fadeInUp}
              className="order-2 md:order-1"
            >
              <p className="text-Secondary-Light-Gold-(Drk-BG) text-xs font-neue-haas tracking-[0.2em] uppercase mb-4">
                A Perfect Experience
              </p>
              <h2 className="text-Brand-White font-playfair text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6">
                Wine Tastings
              </h2>
              <p className="text-Brand-White/80 font-neue-haas text-base leading-relaxed mb-8">
                Explore the passion-driven artisan-style wines in an intimate setting with a tasting of our exquisite wines.
              </p>
              <button className="bg-Brand-Gold-(Drk-BG) text-Brand-Black px-8 py-3 font-neue-haas text-sm tracking-[0.1em] uppercase font-medium hover:bg-Secondary-CTA-Gold-(Drk-BG) transition-all duration-300 hover:scale-105">
                Book a Tasting
              </button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={tastingsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 relative aspect-[4/5] md:aspect-[3/4]"
            >
              <Image
                src="/images/wine-tasting/wine-tasting-couple.png"
                alt="Wine Tasting"
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culinary Experiences Section */}
      <section ref={culinaryRef} className="py-16 md:py-24 bg-Brand-Black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={culinaryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] md:aspect-[3/4]"
            >
              <Image
                src="/images/culinary/plated-dish.png"
                alt="Culinary Experience"
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial="initial"
              animate={culinaryInView ? "animate" : "initial"}
              variants={fadeInUp}
            >
              <p className="text-Secondary-Light-Gold-(Drk-BG) text-xs font-neue-haas tracking-[0.2em] uppercase mb-4">
                A Michelin Wine Pairing
              </p>
              <h2 className="text-Brand-White font-playfair text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6">
                Culinary Experiences
              </h2>
              <p className="text-Brand-White/80 font-neue-haas text-base leading-relaxed mb-8">
                We bring MICHELIN-Starred restaurant culture, with special events where Chef teams up with us to deliver our wine and culinary experiences.
              </p>
              <button className="bg-Brand-Gold-(Drk-BG) text-Brand-Black px-8 py-3 font-neue-haas text-sm tracking-[0.1em] uppercase font-medium hover:bg-Secondary-CTA-Gold-(Drk-BG) transition-all duration-300 hover:scale-105">
                Make a Reservation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interior Showcase Image */}
      <section className="py-16 md:py-24 bg-Brand-Black">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] md:aspect-[21/9] max-w-4xl mx-auto"
          >
            <Image
              src="/_Assets/ws_lewis_hallway.png"
              alt="Lewis Cellars Interior"
              fill
              className="object-cover rounded-sm"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Salon Privé Section */}
      <section ref={salonRef} className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-20 md:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/salon-prive/couple-luxury.png"
            alt="Salon Privé"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-Brand-Black via-Brand-Black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            animate={salonInView ? "animate" : "initial"}
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-Secondary-Light-Gold-(Drk-BG) text-xs font-neue-haas tracking-[0.2em] uppercase mb-6"
            >
              Exclusive & Premium Experience
            </motion.p>
            
            <motion.h2
              variants={fadeInUp}
              className="text-Brand-White font-playfair text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8"
            >
              Salon Privé
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-Brand-White/90 font-neue-haas text-base md:text-lg leading-relaxed mb-10"
            >
              Experience a five-stop journey with our most exclusive wines, private tours to our winemaking facilities, VIP tastings experiences, and private chef and culinary experiences, finishing with a bottle of wine to take home with you.
            </motion.p>
            
            <motion.button
              variants={fadeInUp}
              className="bg-Brand-Gold-(Drk-BG) text-Brand-Black px-8 py-3 font-neue-haas text-sm tracking-[0.1em] uppercase font-medium hover:bg-Secondary-CTA-Gold-(Drk-BG) transition-all duration-300 hover:scale-105"
            >
              Join the Experience
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Discover Lewis Wines Section */}
      <section ref={winesRef} className="py-24 md:py-32 bg-Brand-Black">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            animate={winesInView ? "animate" : "initial"}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-Secondary-Light-Gold-(Drk-BG) text-xs font-neue-haas tracking-[0.2em] uppercase mb-6"
            >
              Our Collection
            </motion.p>
            
            <motion.h2
              variants={fadeInUp}
              className="text-Brand-White font-playfair text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-16"
            >
              Discover Lewis Wines
            </motion.h2>
            {/* Wine Bottles */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 mb-16">
              {/* Chardonnay */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative w-32 h-80 md:w-36 md:h-96 mb-6 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/wine-bottles/product-showcase.png"
                    alt="Lewis Cellars Chardonnay"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 128px, 144px"
                  />
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-Brand-Gold-(Drk-BG) to-yellow-600 flex items-center justify-center shadow-lg mb-3">
                  <span className="text-Brand-Black font-playfair text-xl font-bold">L</span>
                </div>
              </motion.div>

              {/* Cabernet Sauvignon */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative w-32 h-80 md:w-36 md:h-96 mb-6 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/wine-bottles/product-showcase.png"
                    alt="Lewis Cellars Cabernet Sauvignon"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 128px, 144px"
                  />
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-Brand-Gold-(Drk-BG) to-yellow-600 flex items-center justify-center shadow-lg mb-3">
                  <span className="text-Brand-Black font-playfair text-xl font-bold">L</span>
                </div>
              </motion.div>

              {/* Red Blend */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative w-32 h-80 md:w-36 md:h-96 mb-6 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/wine-bottles/product-showcase.png"
                    alt="Lewis Cellars Red Blend"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 128px, 144px"
                  />
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center shadow-lg mb-3">
                  <span className="text-Brand-White font-playfair text-xl font-bold">L</span>
                </div>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-Brand-White/80 font-neue-haas text-base max-w-2xl mx-auto mb-10"
            >
              Explore Lewis Cellars' vintage, barrel-tasting series with tasting notes for Napa and Sonoma wines.
            </motion.p>
            <motion.button
              variants={fadeInUp}
              className="bg-Brand-Gold-(Drk-BG) text-Brand-Black px-8 py-3 font-neue-haas text-sm tracking-[0.1em] uppercase font-medium hover:bg-Secondary-CTA-Gold-(Drk-BG) transition-all duration-300 hover:scale-105"
            >
              Explore Wines
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-Brand-Black to-[#1a1a1a]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-Brand-Gold-(Drk-BG) to-yellow-600 flex items-center justify-center shadow-2xl mx-auto mb-8">
                <span className="text-Brand-Black font-playfair text-3xl font-bold">L</span>
              </div>
              
              <h2 className="text-Brand-White font-playfair text-3xl md:text-4xl font-light mb-6">
                Lewis Cellars
              </h2>
              
              <p className="text-Brand-White/80 font-neue-haas text-sm leading-relaxed mb-2">
                5050 Arundell Cir — Silverado Trail, Calistoga
              </p>
              <p className="text-Brand-White/80 font-neue-haas text-sm leading-relaxed mb-2">
                Calistoga, CA 94515
              </p>
              <p className="text-Brand-White/80 font-neue-haas text-sm leading-relaxed mb-8">
                info@lewiscellars.com
              </p>
              
              <button className="bg-Brand-Gold-(Drk-BG) text-Brand-Black px-8 py-3 font-neue-haas text-sm tracking-[0.1em] uppercase font-medium hover:bg-Secondary-CTA-Gold-(Drk-BG) transition-all duration-300 hover:scale-105">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-Brand-Black border-t border-white/10 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Column 1 */}
            <div>
              <h3 className="text-Brand-White font-neue-haas text-sm font-medium mb-4 tracking-wide uppercase">
                Info@lewiscellars.com
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">The Estate</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Our Wines</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Tasting</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Wine Allocation Program</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-Brand-White font-neue-haas text-sm font-medium mb-4 tracking-wide uppercase">
                Shop
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Current Release</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Library</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Limited</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-Brand-White font-neue-haas text-sm font-medium mb-4 tracking-wide uppercase">
                About Us
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Our Team</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Trade Only</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Wholesale</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-Brand-White font-neue-haas text-sm font-medium mb-4 tracking-wide uppercase">
                WineSpectator.com:
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Top 100 Wines</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Ratings & Reviews</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Wine Ratings Search</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">Wine News & Features</a></li>
                <li><a href="#" className="text-Brand-White/60 hover:text-Brand-Gold-(Drk-BG) text-sm transition-colors">
                  Collecting<br />
                  Buying Guide
                </a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-Brand-White/40 text-xs text-center font-neue-haas">
              © 2025 Lewis Cellars | Wine Spectator
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}