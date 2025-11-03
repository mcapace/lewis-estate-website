'use client'

import Image from 'next/image'
import MapSection from '@/components/sections/MapSection'

export default function Home() {
  return (
    <div style={{width: '100vw', minHeight: '8000px', position: 'relative', background: '#000000', margin: 0, padding: 0, border: 'none'}}>
      <div style={{width: '100%', maxWidth: '1600px', margin: '0 auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
        
        {/* Hero Section */}
        <div style={{width: '100%', height: '100vh', position: 'relative', background: 'var(--Brand-Black, #0D0D0D)', overflow: 'visible', display: 'flex', flexDirection: 'column', zIndex: 0}}>
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
          </div>
          
        {/* Hero Text Content Section - Below Hero Image */}
        <div style={{width: '100%', padding: '0px 20px 80px 20px', marginTop: '-100px', background: '#0D0D0D', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '32px', position: 'relative', zIndex: 1}}>
            <div style={{textAlign: 'center', maxWidth: '800px', width: '100%'}}>
              <div style={{color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '5.12px', marginBottom: '24px'}}>
                The Home of Big Reds and Sexy Chardonnays
              </div>
            <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', lineHeight: '1.0', letterSpacing: '1.08px', marginBottom: '24px'}}>
              Napa Valley's Ultimate<br/>Experience Awaits
              </div>
            <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.6', letterSpacing: '0.50px'}}>
                With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a tasting room. It's Napa Valley's ultimate indulgence.
            </div>
          </div>
        </div>
        
        {/* Quote Section */}
        <div style={{width: '100%', padding: '80px 20px', background: '#0D0D0D', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px', position: 'relative', zIndex: 1}}>
          <div style={{textAlign: 'center', color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', letterSpacing: '0.32px', lineHeight: '1.08'}}>
            <span style={{display: 'inline-block', width: '1100px', maxWidth: '90vw'}}>
              <span style={{display: 'block'}}>"A record of excellence that few</span>
              <span style={{display: 'block'}}>California wineries can rival."</span>
            </span>
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
              <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '24px'}}>
                Wine Tastings
              </div>
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '32px'}}>
                Explore the passion and craftsmanship of Lewis' winemaking with unique experiences designed to delight your every sense.
              </div>
              <div style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer'}}>
                <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                  Book A wine tasting
                </div>
              </div>
            </div>
            <div className="image-container" style={{flex: 1, minWidth: '300px', maxWidth: '600px', height: '500px', position: 'relative', background: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
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
            <div className="image-container" style={{flex: 1, minWidth: '300px', maxWidth: '600px', height: '500px', position: 'relative', background: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
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
              <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '24px'}}>
                Culinary Experiences
              </div>
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '32px'}}>
                Indulge in their MICHELIN-Starred chef's culinary experiences curated to heighten your every sensation.
              </div>
              <div style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer'}}>
                <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
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
            <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '24px'}}>
              Salon Privé
            </div>
            <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '32px'}}>
              Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy white glove, on-call concierge service, customizable menus, access to both indoor and outdoor Salons Privés, access to their private cellar, private car service, and more.
            </div>
            <div style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer'}}>
              <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                Explore the salon privé
              </div>
            </div>
          </div>
        </div>

        {/* Discover Wines Section */}
        <div style={{width: '100%', background: '#0D0D0D', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 20px 60px 20px'}}>
          {/* Wine Bottles Image Section */}
          <div style={{width: '100%', maxWidth: '1600px', marginBottom: '0', position: 'relative', paddingBottom: '0'}}>
            <Image
              style={{width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', display: 'block'}}
              src="/_Assets/ws_lewis_product_showcase.png"
              alt="Wine Showcase"
              width={1440}
              height={850}
              className="object-contain"
            />
          </div>

          {/* Text Content Box Below Bottles */}
          <div style={{
            width: '100%',
            maxWidth: '1600px',
            backgroundColor: '#0D0D0D',
            padding: '0px 40px 40px 40px',
            marginTop: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
            <div style={{textAlign: 'center', maxWidth: '800px', width: '100%', paddingTop: '0px'}}>
              <div style={{color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '5.12px', marginBottom: '8px', marginTop: '0px'}}>
                the Cellar Awaits
              </div>
              <div style={{color: '#E5C1A0', fontSize: 'clamp(48px, 8vw, 72px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '200', lineHeight: '1.2', letterSpacing: '2.16px', marginBottom: '8px'}}>
                Discover Lewis Wines
              </div>
              <div style={{color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: 'clamp(16px, 3vw, 20px)', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '1.6', letterSpacing: '0.50px', marginBottom: '16px'}}>
                Explore Lewis' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.
              </div>
            <div style={{padding: '18px 24px', background: '#D3A737', display: 'inline-block', cursor: 'pointer'}}>
                <div style={{color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.64px'}}>
                Explore wines
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <MapSection />

        {/* Footer Section */}
        <footer style={{width: '100%', padding: '80px 20px 40px 20px', background: '#0D0D0D', borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
          <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 40px'}}>
            <div className="footer-grid" style={{marginBottom: '40px'}}>
              
              {/* Column 1: WineSpectator.com & Wine Spectator Magazine */}
              <div>
                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  WineSpectator.com
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px'}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Become a Member
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Member Benefits
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Give a Gift Membership
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Email Newsletters
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Find a Wine Shop
                    </a>
                  </li>
                </ul>
                
                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginTop: '28px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Wine Spectator Magazine
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Subscribe
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Digital Subscription
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Gift Subscription
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Buy Back Issues
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Issue Archives
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Wine Spectator Products
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Help, Events & Services */}
              <div>
                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Help
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px'}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Manage Account
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Contact Us
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Accessibility
                    </a>
                  </li>
                </ul>

                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginTop: '28px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Events
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px'}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Wine Experience
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Grand Tour
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      M. Shanken Events Calendar
                    </a>
                  </li>
                </ul>

                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginTop: '28px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Services
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Apps
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Gift Center
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: About Us & Trade Only */}
              <div>
                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  About Us
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px'}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      How We Taste
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Job Opportunities
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Terms of Service
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Privacy Policy
                    </a>
                  </li>
                </ul>

                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginTop: '28px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Trade Only
                </h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Submit Wines
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Advertise With Us / Media Kit
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Sell Wine Spectator / Join the Retailer Club
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Shanken Ratings Network
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Trade News
                    </a>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <a href="#" style={{color: '#F4F4F4', fontSize: '13px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease', lineHeight: '1.5'}} className="hover:text-[#D3A737]">
                      Impact Databank Reports
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4: M. Shanken Publications & Follow Us */}
              <div>
                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  M. Shanken Publications
                </h3>
                <div style={{marginBottom: '28px'}}>
                  <div style={{marginBottom: '16px', height: 'auto', maxWidth: '150px'}}>
                    <Image
                      src="/pub logos /Cigar.png"
                      alt="Cigar Aficionado"
                      width={150}
                      height={40}
                      style={{width: 'auto', height: 'auto', maxWidth: '100%'}}
                    />
                  </div>
                  <div style={{marginBottom: '16px', height: 'auto', maxWidth: '150px'}}>
                    <Image
                      src="/pub logos /WhiskyAdvocate.png"
                      alt="Whisky Advocate"
                      width={150}
                      height={40}
                      style={{width: 'auto', height: 'auto', maxWidth: '100%'}}
                    />
                  </div>
                  <div style={{marginBottom: '16px', height: 'auto', maxWidth: '280px'}}>
                    <Image
                      src="/pub logos /MarketWatch.png"
                      alt="Market Watch"
                      width={280}
                      height={80}
                      style={{width: 'auto', height: 'auto', maxWidth: '100%'}}
                    />
                  </div>
                  <div style={{marginBottom: '16px', height: 'auto', maxWidth: '150px'}}>
                    <Image
                      src="/pub logos /ShankenNewsDaily.png"
                      alt="Shanken News Daily"
                      width={150}
                      height={40}
                      style={{width: 'auto', height: 'auto', maxWidth: '100%'}}
                    />
                  </div>
                  <div style={{marginBottom: '16px', height: 'auto', maxWidth: '150px'}}>
                    <Image
                      src="/pub logos /Impact.png"
                      alt="Impact"
                      width={150}
                      height={40}
                      style={{width: 'auto', height: 'auto', maxWidth: '100%'}}
                    />
                  </div>
            </div>

                <h3 style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', marginTop: '28px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  Follow Us
                </h3>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  {/* Facebook */}
                  <a href="#" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textDecoration: 'none', transition: 'all 0.3s ease'}} className="hover:border-[#D3A737] hover:bg-[#D3A737]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textDecoration: 'none', transition: 'all 0.3s ease'}} className="hover:border-[#D3A737] hover:bg-[#D3A737]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* X (Twitter) */}
                  <a href="#" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textDecoration: 'none', transition: 'all 0.3s ease'}} className="hover:border-[#D3A737] hover:bg-[#D3A737]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="#" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textDecoration: 'none', transition: 'all 0.3s ease'}} className="hover:border-[#D3A737] hover:bg-[#D3A737]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
            </div>
              </div>
            </div>

            {/* Copyright */}
            <div style={{paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '40px', textAlign: 'center'}}>
              <p style={{color: '#F4F4F4', fontSize: '12px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', margin: 0}}>
                © Copyright 2025 Wine Spectator. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}