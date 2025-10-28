'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section - Black Background with Text Only */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm uppercase tracking-widest text-white/80 mb-6 font-inter">
            THE HOME OF BIG REDS AND SEXY CHARDONNAYS
          </h2>
          <h1 className="text-5xl lg:text-7xl font-playfair font-normal leading-tight text-white mb-8">
            Napa Valley's Ultimate Experience Awaits
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            With exquisitely crafted wines and a culinary experience that celebrates the finest, evocative aromas and flavors of Napa Valley, Lewis Cellars invites you to discover a world of unparalleled luxury and taste.
          </p>
        </div>
      </section>

      {/* Wine Cellar Section - Black Background with Wine Bottles */}
      <section className="min-h-screen bg-black flex flex-col justify-center items-center py-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Wine Bottles - Six bottles in two groups like Figma */}
          <div className="flex justify-center items-center space-x-16 mb-16">
            {/* Left Group - 3 bottles */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-6">
                <h3 className="text-white font-semibold text-sm mb-1">LEWIS CELLARS</h3>
                <p className="text-lewis-gold text-sm mb-1">CHARDONNAY</p>
                <p className="text-white/60 text-xs">NAPA VALLEY</p>
              </div>
              <div className="flex space-x-3">
                <div className="w-12 h-32 bg-gray-700 rounded-sm"></div>
                <div className="w-12 h-32 bg-gray-700 rounded-sm"></div>
                <div className="w-12 h-32 bg-gray-700 rounded-sm"></div>
              </div>
            </div>

            {/* Right Group - 3 bottles */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-6">
                <h3 className="text-white font-semibold text-sm mb-1">LEWIS CELLARS</h3>
                <p className="text-lewis-gold text-sm mb-1">CABERNET SAUVIGNON</p>
                <p className="text-white/60 text-xs">NAPA VALLEY</p>
              </div>
              <div className="flex space-x-3">
                <div className="w-12 h-32 bg-gray-700 rounded-sm"></div>
                <div className="w-12 h-32 bg-gray-700 rounded-sm"></div>
                <div className="w-12 h-32 bg-gray-700 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Text Content Below Bottles */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-sm uppercase tracking-widest text-white/70 mb-6 font-inter">
              THE CELLAR
            </h2>
            <h1 className="text-4xl lg:text-6xl font-playfair font-normal leading-tight text-white mb-8">
              Discover Lewis Wines
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mx-auto mb-12 max-w-2xl">
              Tap into the world of legendary wines and discover the story behind every bottle.
            </p>
            <button className="bg-lewis-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors">
              EXPLORE THE CELLAR
            </button>
          </div>
        </div>
      </section>

      {/* Salon Privé Section - Black Background with Text Only */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm uppercase tracking-widest text-white/80 mb-6 font-inter">
            ENTER A SECLUDED WORLD
          </h2>
          <h1 className="text-5xl lg:text-7xl font-playfair font-normal leading-tight text-white mb-8">
            Salon Privé
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
            Experience the ultimate in exclusivity with our Salon Privé membership. Enjoy access to limited-release wines, private tastings, and events.
          </p>
          <button className="bg-lewis-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors">
            JOIN SALON PRIVÉ
          </button>
        </div>
      </section>

      {/* Culinary Experiences Section - Black Background with Image */}
      <section className="min-h-screen bg-black flex items-center py-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Culinary Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/images/culinary/plated-dish.png"
                alt="Gourmet plated dish from MICHELIN-Starred chef"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-playfair font-normal leading-tight text-white mb-8">
                Culinary Experiences
              </h1>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-12 max-w-2xl">
                Indulge in exquisite food pairings crafted to complement our exceptional wines.
              </p>
              <button className="bg-lewis-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors">
                BOOK A TABLE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Tasting Section - Black Background with Interior Image */}
      <section className="min-h-screen bg-black flex items-center py-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Interior Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/images/culinary/dining-room.jpg"
                alt="Elegant interior at Lewis Estate"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right Column - Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-sm uppercase tracking-widest text-white/80 mb-6 font-inter">
                A SENSORY EXPERIENCE
              </h2>
              <h1 className="text-4xl lg:text-6xl font-playfair font-normal leading-tight text-white mb-8">
                Wine Tastings
              </h1>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-12 max-w-2xl">
                Join us for a unique and immersive tasting experience designed to delight your senses.
              </p>
              <button className="bg-lewis-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors">
                BOOK A TASTING
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}