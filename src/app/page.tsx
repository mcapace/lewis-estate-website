'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      
      {/* Hero Section - Full Width Background Image */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/homepage-hero.png"
            alt="Lewis Estate wine cellar experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm uppercase tracking-widest text-white/80 mb-6 font-inter">
            THE HOME OF BIG REDS AND SEXY CHARDONNAYS
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-normal leading-tight text-white mb-8">
            Napa Valley's Ultimate Experience Awaits
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            With exquisitely crafted wines and a culinary experience that celebrates the finest, evocative aromas and flavors of Napa Valley, Lewis Cellars invites you to discover a world of unparalleled luxury and taste.
          </p>
          <blockquote className="text-2xl md:text-3xl font-playfair italic text-white mb-4">
            "A record of excellence that few California wineries can rival."
          </blockquote>
          <cite className="text-sm uppercase tracking-widest text-white/70 font-inter">
            JAMES LAUBE, WINE SPECTATOR
          </cite>
        </div>
      </section>

      {/* Wine Tastings & Culinary Experiences - Side by Side */}
      <section className="min-h-screen bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Wine Tastings */}
            <div className="flex flex-col">
              <div className="mb-8">
                <h2 className="text-sm uppercase tracking-widest text-white/80 mb-6 font-inter">
                  A MEMORABLE JOURNEY
                </h2>
                <h1 className="text-3xl md:text-5xl font-playfair font-normal leading-tight text-white mb-8">
                  Wine Tastings
                </h1>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  Join us for a unique and immersive tasting experience designed to delight your senses and deepen your appreciation for exceptional wines.
                </p>
                <button className="bg-lewis-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors">
                  BOOK YOUR TASTING
                </button>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src="/images/wine-tasting/wine-tasting-couple.png"
                  alt="Wine tasting experience"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Culinary Experiences */}
            <div className="flex flex-col">
              <div className="mb-8">
                <h2 className="text-sm uppercase tracking-widest text-white/80 mb-6 font-inter">
                  A MEMORABLE JOURNEY
                </h2>
                <h1 className="text-3xl md:text-5xl font-playfair font-normal leading-tight text-white mb-8">
                  Culinary Experiences
                </h1>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  Indulge in exquisite food pairings crafted to complement our exceptional wines, featuring the finest ingredients and culinary artistry.
                </p>
                <button className="bg-lewis-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors">
                  RESERVE YOUR TABLE
                </button>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="/images/culinary/plated-dish.png"
                    alt="Gourmet plated dish"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="/images/culinary/dining-room.jpg"
                    alt="Elegant dining room"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salon Privé Section - Full Width Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/salon-prive/couple-luxury.png"
            alt="Salon Privé intimate experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm uppercase tracking-widest text-white/80 mb-6 font-inter">
            ENTER A SECLUDED WORLD
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-normal leading-tight text-white mb-8">
            Salon Privé
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
            Experience the ultimate in exclusivity with our Salon Privé membership. Enjoy access to limited-release wines, private tastings, and exclusive events.
          </p>
          <button className="bg-lewis-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors">
            EXPLORE THE SALON PRIVÉ
          </button>
        </div>
      </section>

      {/* Discover Lewis Wines Section */}
      <section className="min-h-screen bg-black flex flex-col justify-center items-center py-20">
        <div className="max-w-6xl mx-auto px-6 w-full text-center">
          <h2 className="text-sm uppercase tracking-widest text-white/70 mb-6 font-inter">
            YOUR CELLAR AWAITS
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-normal leading-tight text-white mb-8">
            Discover Lewis Wines
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mx-auto mb-12 max-w-2xl">
            Explore our collection of exceptional wines, each bottle telling a story of passion, craftsmanship, and the unique terroir of Napa Valley.
          </p>
          <button className="bg-lewis-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors mb-16">
            EXPLORE WINES
          </button>

          {/* Wine Bottles */}
          <div className="flex justify-center items-center space-x-8">
            <div className="relative w-24 h-80">
              <img
                src="/images/wine-bottles/product-showcase.png"
                alt="Lewis Cellars Chardonnay"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative w-24 h-80">
              <img
                src="/images/wine-bottles/product-showcase.png"
                alt="Lewis Cellars Cabernet Sauvignon"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative w-24 h-80">
              <img
                src="/images/wine-bottles/product-showcase.png"
                alt="Lewis Cellars The Big Blend"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact Section */}
      <section className="min-h-screen bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Map */}
            <div className="relative h-96 bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-lewis-gold rounded-full mx-auto mb-4"></div>
                <p className="text-white/60">Interactive Map</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-playfair text-white mb-6">Lewis Cellars</h2>
              <div className="space-y-4 text-white/90">
                <p><strong>Hours:</strong> Monday-Sunday, 10:00 am - 4:00 pm</p>
                <p><strong>Address:</strong> 4031 Silverado Trail, Napa, CA 94558</p>
                <p><strong>Phone:</strong> 707.265.9400</p>
              </div>
              <button className="bg-lewis-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-lewis-gold-hover transition-colors mt-8">
                REQUEST A RESERVATION
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}