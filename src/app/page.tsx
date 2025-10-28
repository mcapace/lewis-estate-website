'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-200">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Hero Section */}
        <div className="relative h-[850px] bg-black overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/_Assets/ws_lewis_hero.png"
              alt="Lewis Estate Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          </div>
          
          {/* Fixed Header */}
          <div className="absolute top-0 left-0 right-0 z-20 px-10 py-8">
            <div className="flex justify-between items-center">
              <div className="text-white text-xl font-medium">
                Wine Spectator
              </div>
              <nav className="flex gap-10">
                <a href="#wine-tastings" className="text-white text-sm uppercase tracking-wider hover:text-orange-200 transition-colors">
                  WINE TASTINGS
                </a>
                <a href="#culinary" className="text-white text-sm uppercase tracking-wider hover:text-orange-200 transition-colors">
                  CULINARY EXPERIENCES
                </a>
                <a href="#salon-prive" className="text-white text-sm uppercase tracking-wider hover:text-orange-200 transition-colors">
                  SALON PRIVÉ
                </a>
                <a href="#wines" className="text-white text-sm uppercase tracking-wider hover:text-orange-200 transition-colors">
                  WINES
                </a>
              </nav>
            </div>
          </div>

          {/* Hero Content - Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl px-20">
              <p className="text-white text-base uppercase tracking-[5.12px] mb-6 font-sans">
                THE HOME OF BIG REDS AND SEXY CHARDONNAYS
              </p>
              <h1 className="text-orange-200 text-5xl font-light leading-[64px] tracking-wide mb-8 font-serif">
                Napa Valley's Ultimate Experience Awaits
              </h1>
              <p className="text-white text-xl leading-8 tracking-wide font-sans">
                With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a tasting room. It's Napa Valley's ultimate indulgence.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="h-[500px] bg-stone-950 flex flex-col justify-center items-center px-64">
          <div className="text-center max-w-4xl">
            <blockquote className="text-orange-200 text-6xl font-light tracking-tight leading-tight mb-16 font-serif italic">
              "A record of excellence that few<br/>California wineries can rival."
            </blockquote>
            <cite className="text-orange-200 text-lg uppercase tracking-[5.76px] font-sans">
              -James Laube, wine spectator
            </cite>
          </div>
        </div>

        {/* Wine Tastings Section */}
        <div className="bg-stone-950 px-40 py-20">
          <div className="flex items-center gap-36 mb-32">
            <div className="w-96">
              <div className="mb-8">
                <p className="text-orange-200 text-sm uppercase tracking-[4.48px] mb-6 font-sans">
                  A SENSORY EXPERIENCE
                </p>
                <h2 className="text-white text-5xl font-light leading-[64px] tracking-widest mb-8 font-serif">
                  Wine Tastings
                </h2>
                <p className="text-white text-xl leading-8 tracking-wide mb-8 font-sans">
                  Explore the passion and craftsmanship of Lewis award-winning wines. Our unique experiences are designed to delight your senses.
                </p>
                <button className="bg-orange-200 text-black px-6 py-4 text-base uppercase tracking-wide font-medium">
                  BOOK A WINE TASTING
                </button>
              </div>
            </div>
            <div className="w-[553px] h-[672px] relative">
              <Image
                src="/_Assets/ws_lewis_wine_tastings.png"
                alt="Wine Tastings"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Culinary Experiences Section */}
        <div className="bg-stone-950 px-40 py-20">
          <div className="flex items-center gap-36">
            <div className="w-[481px] h-[639px] relative">
              <Image
                src="/_Assets/ws_lewis_culinary_exp.png"
                alt="Culinary Experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-96">
              <div className="mb-8">
                <p className="text-orange-200 text-sm uppercase tracking-[4.48px] mb-6 font-sans">
                  A MAGICAL INTERPLAY
                </p>
                <h2 className="text-white text-5xl font-light leading-[54px] tracking-widest mb-8 font-serif">
                  Culinary Experiences
                </h2>
                <p className="text-white text-xl leading-8 tracking-wide mb-8 font-sans">
                  Indulge in the art of Lewis Estate's culinary excellence, an ode to heighten your senses.
                </p>
                <button className="bg-orange-200 text-black px-6 py-4 text-base uppercase tracking-wide font-medium">
                  BOOK A TASTE OF LEWIS
                </button>
              </div>
              
              {/* Small Image */}
              <div className="w-96 h-80 relative">
                <Image
                  src="/_Assets/ws_lewis_hallway.png"
                  alt="Hallway"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Salon Privé Section */}
        <div className="relative h-[900px] bg-stone-950 overflow-hidden">
          <Image
            src="/_Assets/ws_lewis_salon_prive.png"
            alt="Salon Privé"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl px-20">
              <div className="mb-8">
                <p className="text-orange-200 text-base uppercase tracking-[5.12px] mb-6 font-sans">
                  ENTER A SECLUDED WORLD
                </p>
                <h2 className="text-white text-5xl font-light leading-[64px] tracking-widest mb-8 font-serif italic">
                  Salon Privé
                </h2>
                <p className="text-white text-xl leading-8 tracking-wide mb-12 font-sans">
                  Indulge in the ultimate luxury with Lewis Estate's exclusive Salon Privé. This intimate space offers a bespoke experience, perfect for private events or romantic evenings.
                </p>
                <button className="bg-orange-200 text-black px-6 py-4 text-base uppercase tracking-wide font-medium">
                  EXPLORE THE SALON PRIVÉ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Discover Wines Section */}
        <div className="bg-stone-950 px-40 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-16">
              <p className="text-orange-200 text-base uppercase tracking-[5.12px] mb-6 font-sans">
                THE CELLAR AWAITS
              </p>
              <h2 className="text-white text-5xl font-light leading-[64px] tracking-widest mb-8 font-serif">
                Discover Lewis Wines
              </h2>
              <p className="text-white text-xl leading-8 tracking-wide mb-12 font-sans">
                Explore Lewis Estate's legendary wines and discover your favorite reds and sexy chardonnays.
              </p>
              <button className="bg-orange-200 text-black px-6 py-4 text-base uppercase tracking-wide font-medium">
                EXPLORE WINES
              </button>
            </div>
            
            {/* Wine Bottles */}
            <div className="flex justify-center items-end gap-16">
              <div className="flex flex-col items-center">
                <div className="w-20 h-80 relative mb-4">
                  <Image
                    src="/_Assets/ws_lewis_product_showcase.png"
                    alt="Chardonnay"
                    width={80}
                    height={320}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-medium text-sm mb-1">LEWIS CELLARS</h3>
                  <p className="text-orange-200 text-sm mb-1">CHARDONNAY</p>
                  <p className="text-white/60 text-xs uppercase tracking-widest">NAPA VALLEY</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-80 relative mb-4">
                  <Image
                    src="/_Assets/ws_lewis_product_showcase.png"
                    alt="Cabernet"
                    width={80}
                    height={320}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-medium text-sm mb-1">LEWIS CELLARS</h3>
                  <p className="text-orange-200 text-sm mb-1">CABERNET SAUVIGNON</p>
                  <p className="text-white/60 text-xs uppercase tracking-widest">NAPA VALLEY</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-80 relative mb-4">
                  <Image
                    src="/_Assets/ws_lewis_product_showcase.png"
                    alt="Rosé"
                    width={80}
                    height={320}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-medium text-sm mb-1">LEWIS CELLARS</h3>
                  <p className="text-orange-200 text-sm mb-1">ROSÉ</p>
                  <p className="text-white/60 text-xs uppercase tracking-widest">NAPA VALLEY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="relative bg-neutral-400 py-20">
          <div className="max-w-[1440px] mx-auto px-40">
            <div className="flex justify-end">
              <div className="w-96 bg-black px-8 py-10">
                <div className="mb-6">
                  <h3 className="text-orange-200 text-3xl font-medium leading-8 tracking-wide mb-4">
                    Lewis Cellars
                  </h3>
                  <p className="text-white/80 text-xl leading-8 tracking-wide">
                    Monday–Sunday, 10:00 a.m.–4:30 p.m.<br/>6320 Silverado Trail Napa, CA 94558<br/>707.255.3400
                  </p>
                </div>
                <button className="bg-orange-200 text-black px-6 py-4 text-base uppercase tracking-wide font-medium">
                  REQUEST A RESERVATION
                </button>
              </div>
            </div>
          </div>
          
          {/* Wine Bottle */}
          <div className="absolute right-[394px] top-[99px] w-16 h-20">
            <Image
              src="/_Assets/ws_lewis_product_showcase.png"
              alt="Wine Bottle"
              width={61}
              height={74}
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative h-[520px] bg-black overflow-hidden">
          <Image
            src="/_Assets/ws_lewis_hero.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute left-[618px] top-[13px] w-52 h-16 bg-black" />
        </div>
      </div>
    </div>
  )
}