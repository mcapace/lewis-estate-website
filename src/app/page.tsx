'use client'

import Image from 'next/image'
import MapSection from '@/components/sections/MapSection'

export default function Home() {
  return (
    <div style={{width: '100vw', minHeight: '8000px', position: 'relative', background: '#000000', margin: 0, padding: 0, border: 'none'}}>
      <div style={{width: '100%', maxWidth: '1600px', margin: '0 auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
        
        {/* Hero Section */}
        <div style={{width: '100%', height: '100vh', position: 'relative', background: 'var(--Brand-Black, #0D0D0D)', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
          <div style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', overflow: 'hidden'}}>
            <Image
              style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', objectFit: 'cover', objectPosition: 'center'}}
              src="/_Assets/ws_lewis_hero.png"
              alt="Lewis Estate Hero"
              width={1440}
              height={850}
              priority
              className="object-cover"
            />
            <div style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', background: 'linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, rgba(13, 13, 13, 0.65) 100%)'}}></div>
          </div>
          
          {/* Navigation */}
          <div style={{width: '100%', padding: '20px 40px', position: 'absolute', top: '0px', left: '0px', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Image
                src="/_Assets/WSlogoWhite-stroke (2) (4) (3).png"
                alt="Wine Spectator Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </div>
            <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center'}}>
              <div style={{padding: '8px 0'}}>
                <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px'}}>
                  wine tastings
                </div>
              </div>
              <div style={{padding: '8px 0'}}>
                <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px'}}>
                  culinary experiences
                </div>
              </div>
              <div style={{padding: '8px 0'}}>
                <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px'}}>
                  salon privé
                </div>
              </div>
              <div style={{padding: '8px 0'}}>
                <div style={{color: 'var(--Brand-White, white)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px'}}>
                  wines
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px 20px', position: 'relative', zIndex: 5}}>
            <div style={{textAlign: 'center', maxWidth: '800px', width: '100%'}}>
              <div style={{color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '5.12px', marginBottom: '24px'}}>
                The Home of Big Reds and Sexy Chardonnays
              </div>
              <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.2', letterSpacing: '1.08px', marginBottom: '32px'}}>
                Napa Valley's Ultimate Experience Awaits
              </div>
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '1.6', letterSpacing: '0.50px'}}>
                With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a tasting room. It's Napa Valley's ultimate indulgence.
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote Section */}
        <div style={{width: '100%', padding: '80px 20px', background: '#0D0D0D', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px'}}>
          <div style={{textAlign: 'center', color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', letterSpacing: '0.32px', lineHeight: '1.1', maxWidth: '600px', whiteSpace: 'nowrap'}}>
            <div>"A record of excellence that few</div>
            <div>California wineries can rival."</div>
          </div>
          <div style={{textAlign: 'center', color: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', fontSize: 'clamp(14px, 2.5vw, 18px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: '5.76px'}}>
            -James Laube, wine spectator
          </div>
        </div>

        {/* Wine Tastings & Culinary Section */}
        <div style={{width: '100%', padding: '80px 20px', background: '#0D0D0D', display: 'flex', flexDirection: 'column', gap: '80px', alignItems: 'center'}}>
          {/* Wine Tastings */}
          <div style={{display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center', flexWrap: 'wrap', maxWidth: '1200px', width: '100%'}}>
            <div style={{flex: 1, minWidth: '300px', maxWidth: '500px'}}>
              <div style={{color: 'var(--Brand-White, white)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '4.48px', marginBottom: '16px'}}>
                A Sensory Experience
              </div>
              <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '24px'}}>
                Wine Tastings
              </div>
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '32px'}}>
                Explore the passion and craftsmanship of Lewis' winemaking with unique experiences designed to delight your every sense.
              </div>
              <div style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer'}}>
                <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                  Book A wine tasting
                </div>
              </div>
            </div>
            <div style={{flex: 1, minWidth: '300px', maxWidth: '600px', height: '500px', position: 'relative', background: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', overflow: 'hidden'}}>
              <Image
                style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
                src="/_Assets/ws_lewis_wine_tastings.png"
                alt="Wine Tastings"
                width={1136}
                height={758}
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Culinary Experiences */}
          <div style={{display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center', flexWrap: 'wrap-reverse', maxWidth: '1200px', width: '100%'}}>
            <div style={{flex: 1, minWidth: '300px', maxWidth: '600px', height: '500px', position: 'relative', background: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', overflow: 'hidden'}}>
              <Image
                style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
                src="/_Assets/ws_lewis_culinary_exp.png"
                alt="Culinary Experience"
                width={513}
                height={651}
                className="object-cover"
              />
            </div>
            <div style={{flex: 1, minWidth: '300px', maxWidth: '500px'}}>
              <div style={{color: 'var(--Brand-White, white)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '4.48px', marginBottom: '16px'}}>
                A Magical Interplay
              </div>
              <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '24px'}}>
                Culinary Experiences
              </div>
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '32px'}}>
                Indulge in their MICHELIN-Starred chef's culinary experiences curated to heighten your every sensation.
              </div>
              <div style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer'}}>
                <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                  Book A Taste of Lewis
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Salon Privé Section */}
        <div style={{width: '100%', height: '100vh', position: 'relative', background: '#0D0D0D', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', objectFit: 'cover', objectPosition: 'center'}}
            src="/_Assets/ws_lewis_salon_prive.png"
            alt="Salon Privé"
            width={1440}
            height={850}
            className="object-cover"
          />
          <div style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', background: 'linear-gradient(180deg, rgba(13, 13, 13, 0.3) 0%, rgba(13, 13, 13, 0.8) 100%)'}}></div>
          <div style={{position: 'relative', zIndex: 5, textAlign: 'center', padding: '40px 20px', maxWidth: '800px', width: '100%'}}>
            <div style={{color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '5.12px', marginBottom: '24px'}}>
              enter A Secluded World
            </div>
            <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '32px'}}>
              Salon Privé
            </div>
            <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '40px'}}>
              Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy white glove, on-call concierge service, customizable menus, access to both indoor and outdoor Salons Privés, access to their private cellar, private car service, and more.
            </div>
            <div style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer'}}>
              <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                Explore the salon privé
              </div>
            </div>
          </div>
        </div>

        {/* Discover Wines Section */}
        <div style={{width: '100%', height: '100vh', position: 'relative', background: '#0D0D0D', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', objectFit: 'cover', objectPosition: 'center'}}
            src="/_Assets/ws_lewis_product_showcase.png"
            alt="Wine Showcase"
            width={1440}
            height={850}
            className="object-cover"
          />
          <div style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', background: 'linear-gradient(180deg, rgba(13, 13, 13, 0.3) 0%, rgba(13, 13, 13, 0.8) 100%)'}}></div>
          <div style={{position: 'relative', zIndex: 5, textAlign: 'center', padding: '40px 20px', maxWidth: '800px', width: '100%'}}>
            <div style={{color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '5.12px', marginBottom: '24px'}}>
              the Cellar Awaits
            </div>
            <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '32px'}}>
              Discover Lewis Wines
            </div>
            <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '40px'}}>
              Explore Lewis' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.
            </div>
            <div style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer'}}>
              <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                Explore wines
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <MapSection />

        {/* Footer Section */}
        <div style={{width: '100%', padding: '40px 20px', background: '#0D0D0D', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{textAlign: 'center', maxWidth: '600px', width: '100%'}}>
            <div style={{color: '#E5C1A0', fontSize: 'clamp(24px, 5vw, 32px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '1.2', letterSpacing: '0.64px', marginBottom: '24px'}}>
              Lewis Cellars
            </div>
            <div style={{color: '#F4F4F4', fontSize: 'clamp(12px, 2.5vw, 16px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '1.6', letterSpacing: '0.50px', opacity: '0.60'}}>
              © 2024 Lewis Cellars. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}