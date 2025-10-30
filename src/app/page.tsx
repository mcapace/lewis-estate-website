'use client'

import Image from 'next/image'
import MapSection from '@/components/sections/MapSection'

export default function Home() {
  return (
    <div style={{width: '100vw', minHeight: '8000px', position: 'relative', background: '#000000', margin: 0, padding: 0, border: 'none'}}>
      <div style={{width: '100%', maxWidth: '1440px', margin: '0 auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
        
        {/* Hero Section */}
        <div className="w-full h-screen md:h-[120vh] lg:h-screen relative bg-[#0D0D0D] overflow-hidden flex flex-col">
          <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
            <Image
              className="w-full h-full absolute top-0 left-0 object-cover object-center"
              src="/_Assets/ws_lewis_hero.png"
              alt="Lewis Estate Hero"
              width={1440}
              height={850}
              priority
            />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/0 via-black/20 to-black/65"></div>
          </div>
          
          {/* Navigation */}
          <div className="w-full px-4 sm:px-6 lg:px-10 absolute top-0 left-0 z-10 flex justify-between items-center flex-wrap py-5">
            <div className="flex items-center">
              <Image
                src="/_Assets/WSlogoWhite-stroke (2) (4) (3).png"
                alt="Wine Spectator Logo"
                width={120}
                height={32}
                className="object-contain sm:w-[150px] sm:h-[40px]"
              />
            </div>
            <div className="hidden md:flex gap-4 lg:gap-8 flex-wrap justify-center">
              <div className="px-2 py-2">
                <div className="text-[#F4F4F4] text-xs sm:text-sm font-neue-haas font-normal uppercase tracking-[1.44px] hover:text-[#D3A737] transition-colors cursor-pointer">
                  wine tastings
                </div>
              </div>
              <div className="px-2 py-2">
                <div className="text-[#F4F4F4] text-xs sm:text-sm font-neue-haas font-normal uppercase tracking-[1.44px] hover:text-[#D3A737] transition-colors cursor-pointer">
                  culinary experiences
                </div>
              </div>
              <div className="px-2 py-2">
                <div className="text-[#F4F4F4] text-xs sm:text-sm font-neue-haas font-normal uppercase tracking-[1.44px] hover:text-[#D3A737] transition-colors cursor-pointer">
                  salon privé
                </div>
              </div>
              <div className="px-2 py-2">
                <div className="text-white text-xs sm:text-sm font-neue-haas font-normal uppercase tracking-[1.44px] hover:text-[#D3A737] transition-colors cursor-pointer">
                  wines
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative z-5">
            <div className="text-center max-w-4xl w-full">
              <div className="text-white text-sm sm:text-base font-neue-haas font-normal uppercase leading-[18px] tracking-[5.12px] mb-4 sm:mb-6">
                The Home of Big Reds and Sexy Chardonnays
              </div>
              <h1 className="text-[#E5C1A0] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neue-haas font-light leading-[1.2] tracking-[1.08px] mb-6 sm:mb-8">
                Napa Valley's Ultimate Experience Awaits
              </h1>
              <p className="text-[#F4F4F4] text-sm sm:text-base md:text-lg lg:text-xl font-neue-haas font-normal leading-[1.6] tracking-[0.50px] max-w-3xl mx-auto">
                With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a tasting room. It's Napa Valley's ultimate indulgence.
              </p>
            </div>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0D0D0D] flex flex-col justify-center items-center gap-8 sm:gap-10">
          <div className="text-center text-[#E5C1A0] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-neue-haas font-light leading-[1.2] tracking-[0.32px] max-w-4xl px-4">
            "A record of excellence that few<br className="hidden sm:block"/>California wineries can rival."
          </div>
          <div className="text-center text-[#EFE5DA] text-sm sm:text-base md:text-lg font-neue-haas font-normal uppercase leading-5 tracking-[5.76px]">
            -James Laube, wine spectator
          </div>
        </div>

        {/* Wine Tastings & Culinary Section */}
        <div className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0D0D0D] flex flex-col gap-12 sm:gap-16 md:gap-20">
          {/* Wine Tastings */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-16 items-center px-4 sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0 max-w-lg lg:max-w-xl">
              <div className="text-white text-sm font-neue-haas font-normal uppercase leading-[18px] tracking-[4.48px] mb-4">
                A Sensory Experience
              </div>
              <h2 className="text-[#E5C1A0] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-neue-haas font-light leading-[1.2] tracking-[2.16px] mb-6">
                Wine Tastings
              </h2>
              <p className="text-[#F4F4F4] text-base sm:text-lg md:text-xl font-neue-haas font-normal leading-[1.6] tracking-[0.50px] mb-8">
                Explore the passion and craftsmanship of Lewis' winemaking with unique experiences designed to delight your every sense.
              </p>
              <button className="px-6 py-4 bg-[#D3A737] text-[#0D0D0D] text-base font-neue-haas font-semibold uppercase tracking-[0.64px] hover:bg-[#E5C1A0] transition-colors cursor-pointer">
                Book A wine tasting
              </button>
            </div>
            <div className="flex-1 min-w-0 max-w-2xl w-full h-80 sm:h-96 md:h-[500px] relative bg-[#EFE5DA] overflow-hidden rounded-lg">
              <Image
                className="w-full h-full object-cover object-center"
                src="/_Assets/ws_lewis_wine_tastings.png"
                alt="Wine Tastings"
                width={1136}
                height={758}
              />
            </div>
          </div>
          
          {/* Culinary Experiences */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-10 xl:gap-16 items-center px-4 sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0 max-w-2xl w-full h-80 sm:h-96 md:h-[500px] relative bg-[#EFE5DA] overflow-hidden rounded-lg">
              <Image
                className="w-full h-full object-cover object-center"
                src="/_Assets/ws_lewis_culinary_exp.png"
                alt="Culinary Experience"
                width={513}
                height={651}
              />
            </div>
            <div className="flex-1 min-w-0 max-w-lg lg:max-w-xl">
              <div className="text-white text-sm font-neue-haas font-normal uppercase leading-[18px] tracking-[4.48px] mb-4">
                A Magical Interplay
              </div>
              <h2 className="text-[#E5C1A0] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-neue-haas font-light leading-[1.2] tracking-[2.16px] mb-6">
                Culinary Experiences
              </h2>
              <p className="text-[#F4F4F4] text-base sm:text-lg md:text-xl font-neue-haas font-normal leading-[1.6] tracking-[0.50px] mb-8">
                Indulge in their MICHELIN-Starred chef's culinary experiences curated to heighten your every sensation.
              </p>
              <button className="px-6 py-4 bg-[#D3A737] text-[#0D0D0D] text-base font-neue-haas font-semibold uppercase tracking-[0.64px] hover:bg-[#E5C1A0] transition-colors cursor-pointer">
                Book A Taste of Lewis
              </button>
            </div>
          </div>
        </div>

        {/* Salon Privé Section */}
        <div className="w-full h-screen relative bg-[#0D0D0D] overflow-hidden flex flex-col justify-center items-center">
          <Image
            className="w-full h-full absolute top-0 left-0 object-cover object-center"
            src="/_Assets/ws_lewis_salon_prive.png"
            alt="Salon Privé"
            width={1440}
            height={850}
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl w-full">
            <div className="text-white text-sm sm:text-base font-neue-haas font-normal uppercase leading-[18px] tracking-[5.12px] mb-4 sm:mb-6">
              enter A Secluded World
            </div>
            <h2 className="text-[#E5C1A0] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neue-haas font-light leading-[1.2] tracking-[2.16px] mb-6 sm:mb-8">
              Salon Privé
            </h2>
            <p className="text-[#F4F4F4] text-sm sm:text-base md:text-lg lg:text-xl font-neue-haas font-normal leading-[1.6] tracking-[0.50px] mb-8 sm:mb-10 max-w-3xl mx-auto">
              Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy white glove, on-call concierge service, customizable menus, access to both indoor and outdoor Salons Privés, access to their private cellar, private car service, and more.
            </p>
            <button className="px-6 py-4 bg-[#D3A737] text-[#0D0D0D] text-base font-neue-haas font-semibold uppercase tracking-[0.64px] hover:bg-[#E5C1A0] transition-colors cursor-pointer">
              Explore the salon privé
            </button>
          </div>
        </div>

        {/* Discover Wines Section */}
        <div className="w-full h-screen relative bg-[#0D0D0D] overflow-hidden flex flex-col justify-center items-center">
          <Image
            className="w-full h-full absolute top-0 left-0 object-cover object-center"
            src="/_Assets/ws_lewis_product_showcase.png"
            alt="Wine Showcase"
            width={1440}
            height={850}
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl w-full">
            <div className="text-white text-sm sm:text-base font-neue-haas font-normal uppercase leading-[18px] tracking-[5.12px] mb-4 sm:mb-6">
              the Cellar Awaits
            </div>
            <h2 className="text-[#E5C1A0] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neue-haas font-light leading-[1.2] tracking-[2.16px] mb-6 sm:mb-8">
              Discover Lewis Wines
            </h2>
            <p className="text-[#F4F4F4] text-sm sm:text-base md:text-lg lg:text-xl font-neue-haas font-normal leading-[1.6] tracking-[0.50px] mb-8 sm:mb-10 max-w-3xl mx-auto">
              Explore Lewis' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.
            </p>
            <button className="px-6 py-4 bg-[#D3A737] text-[#0D0D0D] text-base font-neue-haas font-semibold uppercase tracking-[0.64px] hover:bg-[#E5C1A0] transition-colors cursor-pointer">
              Explore wines
            </button>
          </div>
        </div>

        {/* Map Section */}
        <MapSection />

        {/* Footer Section */}
        <div className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0D0D0D] flex flex-col justify-center items-center">
          <div className="text-center max-w-2xl w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#E5C1A0] text-2xl sm:text-3xl md:text-4xl font-neue-haas font-normal leading-[1.2] tracking-[0.64px] mb-6">
              Lewis Cellars
            </h2>
            <div className="text-[#F4F4F4] text-sm sm:text-base md:text-lg font-neue-haas font-normal leading-[1.6] tracking-[0.50px] opacity-80 mb-8 sm:mb-10 space-y-2">
              <div>Monday–Sunday, 10:00 a.m.–4:30 p.m.</div>
              <div>6320 Silverado Trail Napa, CA 94558</div>
              <div>707.255.3400</div>
            </div>
            <button className="px-6 py-4 bg-[#D3A737] text-[#0D0D0D] text-base font-neue-haas font-semibold uppercase tracking-[0.64px] hover:bg-[#E5C1A0] transition-colors cursor-pointer">
              Visitor Information
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}