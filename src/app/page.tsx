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
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
          </div>
          
          {/* Navigation */}
          <div className="absolute top-0 left-0 right-0 z-20 px-10 py-8">
            <div className="flex justify-between items-center">
              <div className="w-48 h-14 relative">
                <div className="w-44 h-11 bg-black" />
              </div>
              <nav className="flex gap-10">
                <a href="#wine-tastings" className="text-white/70 text-base uppercase tracking-wider hover:text-white transition-colors">
                  wine tastings
                </a>
                <a href="#culinary" className="text-white/70 text-base uppercase tracking-wider hover:text-white transition-colors">
                  culinary experiences
                </a>
                <a href="#salon-prive" className="text-white text-base uppercase tracking-wider border-b-2 border-white">
                  salon privé
                </a>
                <a href="#wines" className="text-white/70 text-base uppercase tracking-wider hover:text-white transition-colors">
                  wines
                </a>
              </nav>
            </div>
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end justify-center pb-20">
            <div className="text-center max-w-4xl px-20">
              <div className="mb-6">
                <p className="text-white text-base uppercase tracking-[5.12px] mb-6">
                  The Home of Big Reds and Sexy Chardonnays
                </p>
                <h1 className="text-orange-200 text-5xl font-light leading-[64px] tracking-wide mb-8">
                  Napa Valley's Ultimate Experience Awaits
                </h1>
                <p className="text-white/90 text-xl leading-8 tracking-wide">
                  With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a tasting room. It's Napa Valley's ultimate indulgence.
                </p>
              </div>
              
              {/* Wine Bottle */}
              <div className="flex justify-center mt-8">
                <div className="w-16 h-20 relative">
                  <Image
                    src="/_Assets/ws_lewis_product_showcase.png"
                    alt="Wine Bottle"
                    width={61}
                    height={74}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="h-[500px] bg-stone-950 flex flex-col justify-center items-center px-64 pt-32">
          <div className="text-center max-w-4xl">
            <blockquote className="text-orange-200 text-6xl font-light tracking-tight leading-tight mb-16">
              "A record of excellence that few<br/>California wineries can rival."
            </blockquote>
            <cite className="text-orange-200 text-lg uppercase tracking-[5.76px]">
              -James Laube, wine spectator
            </cite>
          </div>
        </div>

        {/* Wine Tastings & Culinary Section */}
        <div className="bg-stone-950 px-40 py-20">
          {/* Wine Tastings */}
          <div className="flex items-center gap-36 mb-32">
            <div className="w-96">
              <div className="mb-8">
                <p className="text-white text-sm uppercase tracking-[4.48px] mb-6">
                  A Sensory Experience
                </p>
                <h2 className="text-orange-200 text-5xl font-light leading-[64px] tracking-widest mb-8">
                  Wine Tastings
                </h2>
                <p className="text-white/90 text-xl leading-8 tracking-wide mb-8">
                  Explore the passion and craftsmanship of Lewis' winemaking with unique experiences designed to delight your every sense.
                </p>
                <button className="bg-orange-400 text-black px-6 py-4 text-base uppercase tracking-wide font-medium">
                  Book A wine tasting
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

          {/* Culinary */}
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
                <p className="text-white text-sm uppercase tracking-[4.48px] mb-6">
                  A Magical Interplay
                </p>
                <h2 className="text-orange-200 text-5xl font-light leading-[54px] tracking-widest mb-8">
                  Culinary Experiences
                </h2>
                <p className="text-white/90 text-xl leading-8 tracking-wide mb-8">
                  Indulge in their MICHELIN-Starred chef's culinary experiences curated to heighten your every sensation.
                </p>
                <button className="bg-orange-400 text-black px-6 py-4 text-base uppercase tracking-wide font-medium">
                  book a taste of lewis
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
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl px-20">
              <div className="mb-8">
                <p className="text-white text-base uppercase tracking-[5.12px] mb-6">
                  enter A Secluded World
                </p>
                <h2 className="text-orange-200 text-5xl font-light leading-[64px] tracking-widest mb-8">
                  Salon Privé
                </h2>
                <p className="text-white/90 text-xl leading-8 tracking-wide mb-12">
                  Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy white glove,<br/>on-call concierge service, customizable menus, access to both indoor and outdoor Salons Privés,<br/>access to their private cellar, private car service, and more.
                </p>
                <button className="bg-orange-400 text-black px-6 py-4 text-base uppercase tracking-wide font-medium">
                  Explore the salon privé
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Discover Wines Section */}
        <div className="relative h-[900px] bg-stone-950 overflow-hidden">
          <Image
            src="/_Assets/ws_lewis_product_showcase.png"
            alt="Wine Showcase"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl px-20">
              <div className="mb-8">
                <p className="text-white text-base uppercase tracking-[5.12px] mb-6">
                  the Cellar Awaits
                </p>
                <h2 className="text-orange-200 text-5xl font-light leading-[64px] tracking-widest mb-8">
                  Discover Lewis Wines
                </h2>
                <p className="text-white/90 text-xl leading-8 tracking-wide mb-12">
                  Explore Lewis' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.
                </p>
                <button className="bg-orange-400 text-black px-6 py-4 text-base uppercase tracking-wide font-medium">
                  Explore wines
                </button>
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
                <button className="bg-orange-400 text-black px-6 py-4 text-base uppercase tracking-wide font-medium">
                  Visitor Information
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